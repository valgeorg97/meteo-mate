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
    <>
      <Box px={4}>
        <Flex h={'28'} alignItems={'center'} justifyContent={'space-between'}>
          <Flex justifyContent={'space-between'} w="full">
            <Image boxSize={'28'} width={"64"} src={Logo} alt="Logo" mt={-4} />
            <SearchBar onSearch={handleSearch} />
            <Flex alignItems={'center'}></Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
