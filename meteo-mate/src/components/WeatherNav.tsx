import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import { Link, Routes, Route } from 'react-router-dom';
import CurrentWeather from "../views/CurrentWeather";
import LandingPage from "../views/LandingPage";
import Forecast from "../views/Forecast";

interface WeatherNavProps {
  temp: number | undefined;
  city: string | undefined;
  feelsLike: number | undefined;
  weatherType: string | undefined;
  icon: string | undefined;
  last_update: string | undefined;
  localtime: string | undefined;
  country: string | undefined;
  forecastData?: Array<{
    date: string;
    day: {
      condition: {
        text: string;
        icon: string;
      };
      mintemp_c: number;
      maxtemp_c: number;
    };
  }>;
}

function WeatherNav({ temp, city, feelsLike, icon, last_update, localtime, country, weatherType, forecastData }: WeatherNavProps) {
  return (
    <Flex
      height="100vh"
      width="100vw"
      alignItems="center"
      justifyContent="center"
      direction="column"
      mt="-16"
    >
      <Flex
        
        width={"600px"}
        minHeight={"150px"}
        
        direction="column"
        borderRadius="xl"
        background="linear-gradient(to bottom, rgba(135, 206, 250, 0.5), rgba(255, 255, 255, 0.8))"
        boxShadow="0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.15)"
      >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/current-weather" element={<CurrentWeather temp={temp} city={city} feelsLike={feelsLike} icon={icon} last_update={last_update} localtime={localtime} country={country} weatherType={weatherType} />} />
        </Routes>
      </Flex>
      <Box
        height="220px"
        width="600px"
        borderRadius="xl"
        background="linear-gradient(to bottom,rgba(255, 255, 255, 0.8), rgba(135, 206, 250, 0.8) )"
        mt="4"
        boxShadow="0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.15)"
      >
        {forecastData && (
          <Forecast forecastData={forecastData} />
        )}
      </Box>
    </Flex>
  )
}

export default WeatherNav;
