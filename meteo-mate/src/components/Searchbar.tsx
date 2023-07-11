import React, { useState, useEffect, useRef } from 'react';
import { Input, InputGroup, InputLeftElement, Box, Text } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { getWeatherData } from '../services/weather-api-service';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

interface Suggestion {
  name: string;
  country: string;
}

function SearchBar({ onSearch }: SearchBarProps) {
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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onSearch(inputValue);
    }
  };

  const handleSuggestionClick = (suggestion: Suggestion) => {
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
    <Box position="relative" ml="-60" mt="4">
      <InputGroup maxW="lg" alignSelf="center" width="96">
        <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
        <Input
        color={"white"}
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
        />
      </InputGroup>
      {suggestions.length > 0 && (
        <Box
          ref={suggestionRef}
          position="absolute"
          top="100%"
          left="0"
          mt="-8"
          p="2"
          bg="white"
          borderRadius="md"
          boxShadow="md"
          minWidth="xs"
          width="96"
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
