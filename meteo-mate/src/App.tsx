import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import Navigation from '../src/components/Navigation'
// import { API_KEY } from './constants/constants';
import { ChakraProvider } from "@chakra-ui/react"


function App() {

  // const url = `https://api.openweathermap.org/data/3.0/onecall?llat=33.44&lon=-94.04&exclude=hourly,daily&appid=${API_KEY}`
  return (
    <ChakraProvider>
      <Navigation></Navigation>
    </ChakraProvider>
  );
}

export default App;
