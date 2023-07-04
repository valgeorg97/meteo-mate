import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import WeatherNav from './components/WeatherNav';
import { BrowserRouter as Router} from 'react-router-dom'; // Import Router, Switch, and Route

import { ChakraProvider } from "@chakra-ui/react"
import LandingPage from './views/LandingPage';
import { getWeatherData } from './services/weather-api-service';


interface WeatherData {
  location: {
    name: string;
  };
  current: {
    temp_c: number;
    feelslike_c: number;
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
      <Router>
        <NavBar city={city} setCity={setCity}/>
        <WeatherNav temp={weatherData?.current.temp_c} city={weatherData?.location.name} feelsLike={weatherData?.current.feelslike_c} />
      </Router>
    </ChakraProvider>
  );

}

export default App;