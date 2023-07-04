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

interface NavBarProps {
    city: string;
    setCity: Dispatch<SetStateAction<string>>;
  }

export default function Simple({city, setCity}: NavBarProps) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [inputValue, setInputValue] = useState(''); 

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }
    
    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            setCity(inputValue);
        }
    }
    

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={"28"} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                   <Flex justifyContent={'space-between'} w="full">
                      <Image boxSize={"28"} width={"36"} src={Logo} alt="Logo" />
                      <InputGroup maxW="80" alignSelf={'center'} borderRadius={"xl"} border={"grey"}>
                        <InputLeftElement
                            pointerEvents="none"
                            children={<SearchIcon color="gray.300" />}
                        />
                        <Input type="search" placeholder="Search..." value={inputValue} onChange={handleInputChange} onKeyDown={handleKeyDown}/>
                      </InputGroup>
                      <Flex alignItems={'center'}>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>
                                <Avatar
                                    size={'sm'}
                                    src={
                                        'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                                    }
                                />
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Link 1</MenuItem>
                                <MenuItem>Link 2</MenuItem>
                                <MenuDivider />
                                <MenuItem>Link 3</MenuItem>
                            </MenuList>
                        </Menu>
                      </Flex>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}