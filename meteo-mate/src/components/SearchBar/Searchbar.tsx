import React, { useState, useEffect, useRef } from 'react';
import { Input, InputGroup, InputLeftElement, Box, Text } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { getWeatherData } from '../../services/weather-api-service';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

interface Suggestion {
  name: string;
  country: string;
}

/**
 * Search bar component.
 * @param {SearchBarProps} props - The props for the SearchBar component.
 * @returns {JSX.Element} - The rendered SearchBar component.
 */
function SearchBar({ onSearch }: SearchBarProps): JSX.Element {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const suggestionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (inputValue.length > 0) {
        try {
          const weatherData = await getWeatherData(inputValue);
          if (weatherData) {
            const locationData = weatherData.location;
            const locationSuggestions = [
              {
                name: locationData.name,
                country: locationData.country,
              },
            ];
            setSuggestions(locationSuggestions);
          } else {
            setSuggestions([]);
          }
        } catch (error) {
          console.error('Error fetching suggestions', error);
        }
      } else {
        setSuggestions([]);
      }
    };

    fetchSuggestions();
  }, [inputValue]);

  /**
   * Handles the input change event.
   * @param {React.ChangeEvent<HTMLInputElement>} event - The input change event.
   * @returns {void}
   */
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  /**
   * Handles the keydown event.
   * @param {React.KeyboardEvent} event - The keydown event.
   * @returns {void}
   */
  const handleKeyDown = (event: React.KeyboardEvent): void => {
    if (event.key === 'Enter') {
      onSearch(inputValue);
    }
  };

  /**
   * Handles the click event for a suggestion.
   * @param {Suggestion} suggestion - The selected suggestion.
   * @returns {void}
   */
  const handleSuggestionClick = (suggestion: Suggestion): void => {
    const { name, country } = suggestion;
    const query = `${name}, ${country}`;
    setInputValue(query);
    setSuggestions([]);
    onSearch(query);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (suggestionRef.current && !suggestionRef.current.contains(event.target as Node)) {
        setSuggestions([]);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Box position="relative" ml={[-4, -8]} mt={4} justifyContent="center" alignSelf="center">
      <InputGroup maxW="lg" alignSelf="center" width={['90%', '96']}>
        <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
        <Input
          color="white"
          type="search"
          placeholder="Enter location..."
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          borderRadius="full"
          _focus={{
            outline: 'none',
            boxShadow: 'outline',
          }}
          width={{ base: '80', md: '90' }}
        />
      </InputGroup>
      {suggestions.length > 0 && (
        <Box
          ref={suggestionRef}
          position="absolute"
          top="100%"
          left={[-4, 0]}
          mt={2}
          p={2}
          bg="white"
          borderRadius="md"
          boxShadow="md"
          minWidth="xs"
          width={['40%', '40%', '50%']}
        >
          {suggestions.map((suggestion, index) => (
            <Text
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              cursor="pointer"
              _hover={{ color: 'blue.500' }}
            >
              {suggestion.name}, {suggestion.country}
            </Text>
          ))}
        </Box>
      )}
    </Box>
  );
}

export default SearchBar;
