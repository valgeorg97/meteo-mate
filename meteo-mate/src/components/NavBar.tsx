import React, { Dispatch, SetStateAction } from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
import Logo from '../assets/images/meteoLogo.png';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/Searchbar';

interface NavBarProps {
  city: string;
  setCity: Dispatch<SetStateAction<string>>;
}

export default function Simple({ city, setCity }: NavBarProps) {
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    setCity(query);
    navigate('/current-weather');
  };

  return (
    <Box px={4} py={4} mb={"-24"}>
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
          mt={{ base: '0', sm: '-6' }}
        />
        <Box flex="1" display="flex" justifyContent="center" mr={{base:"-10", md:"20"}}>
          <SearchBar onSearch={handleSearch} />
        </Box>
      </Flex>
    </Box>
  );
}
