import React, { Dispatch, SetStateAction, useState} from 'react';
import {
    Box,
    Flex,
    Avatar,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Image,
    Input,
    InputGroup,
    InputLeftElement
} from '@chakra-ui/react';
import Logo from '../assets/images/logo.png'
import { HamburgerIcon, CloseIcon, SearchIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';


interface NavBarProps {
    city: string;
    setCity: Dispatch<SetStateAction<string>>;
  }

export default function Simple({city, setCity}: NavBarProps) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [inputValue, setInputValue] = useState(''); 
    const navigate = useNavigate()

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }
    
    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            setCity(inputValue);
            navigate('/current-weather')
        }
    }
    

    return (
        <>
            <Box px={4}>
                <Flex h={"28"} alignItems={'center'} justifyContent={'space-between'}>
                   <Flex justifyContent={'space-between'} w="full">
                      <Image boxSize={"28"} width={"36"} src={Logo} alt="Logo" />
                      <InputGroup maxW={"96"} alignSelf={'center'} borderRadius={"xl"} border={"white"} color={"white"} maxH={"28"}>
                        <InputLeftElement
                            pointerEvents="none"
                            children={<SearchIcon color="gray.300" />}
                        />
                        <Input type="search" placeholder="Search..." value={inputValue} onChange={handleInputChange} onKeyDown={handleKeyDown}/>
                      </InputGroup>
                      <Flex alignItems={'center'}>
                      </Flex>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}