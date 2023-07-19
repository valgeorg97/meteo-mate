import React, { Dispatch, SetStateAction } from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
import Logo from '../../assets/images/meteoLogo.png';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../SearchBar/Searchbar';

/**
 * Props for the NavBar component.
 */
interface NavBarProps {
  city: string;
  setCity: Dispatch<SetStateAction<string>>;
}

/**
 * Simple navigation bar component.
 * @param {NavBarProps} props - The props for the NavBar component.
 * @returns {JSX.Element} - The rendered NavBar component.
 */
export default function Simple({ setCity }: NavBarProps): JSX.Element {
  const navigate = useNavigate();

  /**
   * Handles the search action.
   * @param {string} query - The search query.
   * @returns {void}
   */
  const handleSearch = (query: string): void => {
    setCity(query);
    navigate('/current-weather');
  };

  return (
    <Box px={4} py={4} mb={{base:"-36", md:"-24"}}>
      <Flex
        h={{ base: '32', sm: '28' }}
        alignItems={{ base: 'center', sm: 'flex-start' }}
        justifyContent="center"
        flexDirection={{ base: 'column', sm: 'row' }}
      >
        <Image
          boxSize={{ base: '32', sm: '32' }}
          width={{ base: '32', sm: '48' }}
          src={Logo}
          alt="Logo"
          mt={{ base: '-10', sm: '-6' }}
        />
        <Box flex="1" display="flex" justifyContent="center" mr={{base:"-10", md:"20"}} mt={{base:"-12", md: "0"}}>
          <SearchBar onSearch={handleSearch} />
        </Box>
      </Flex>
    </Box>
  );
}
