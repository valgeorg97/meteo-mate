import React, { useState, useEffect } from 'react';
import './App.css';
// import axios from 'axios';
import NavBar from './components/NavBar'

import { ChakraProvider } from "@chakra-ui/react"
import LandingPage from './views/LandingPage';
import { getWeatherData } from './services/weather-api-service';

interface WeatherData {
  location: {
    name: string;
  };
  current: {
    temp_c: number;
  };
}
function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [city, setCity] = useState('London');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getWeatherData(city);
        if (data) {
          setWeatherData(data);
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
      setIsLoading(false);
    }
    fetchData();
  }, [city]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ChakraProvider>
      <NavBar city={city} setCity={setCity}/>
      <LandingPage temp={weatherData?.current.temp_c} city={weatherData?.location.name}/>
    </ChakraProvider>
  );
}

export default App;