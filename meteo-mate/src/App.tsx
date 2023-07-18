import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import WeatherNav from './components/WeatherNav/WeatherNav';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";
import { getWeatherData } from './services/weather-api-service';

import backgroundImage from '../src/assets/images/desktop-1920x1080.jpg';

interface WeatherData {
  location: {
    name: string;
    localtime: string;
    country: string;
  };
  current: {
    temp_c: number;
    feelslike_c: number;
    last_updated: string;
    condition: {
      text: string;
      icon: string;
    };
  };
  forecast: {
    forecastday: {
      date: string;
      day: {
        condition: {
          text: string;
          icon: string;
        };
        mintemp_c: number;
        maxtemp_c: number;
      };
    }[];
  };
}

/**
 * Main application component.
 * @returns {JSX.Element} - The rendered App component.
 */
function App(): JSX.Element {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [city, setCity] = useState('');
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
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="blur-container">
        <ChakraProvider>
          <Router>
            <NavBar city={city} setCity={setCity} />
            <WeatherNav
              temp={weatherData?.current.temp_c}
              city={weatherData?.location.name}
              feelsLike={weatherData?.current.feelslike_c}
              weatherType={weatherData?.current.condition.text}
              icon={weatherData?.current.condition.icon}
              last_update={weatherData?.current.last_updated}
              localtime={weatherData?.location.localtime}
              country={weatherData?.location.country}
              forecastData={weatherData?.forecast?.forecastday}
            />
          </Router>
        </ChakraProvider>
      </div>
    </div>
  );
}

export default App;
