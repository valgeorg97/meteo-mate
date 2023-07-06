import React from "react";
import { Flex } from "@chakra-ui/react";
import { Link, Routes, Route } from 'react-router-dom';
import CurrentWeather from "../views/CurrentWeather";
import LandingPage from "../views/LandingPage";

interface WeatherNavProps {
  temp: number | undefined;
  city: string | undefined;
  feelsLike: number | undefined;
  weatherType: string | undefined;
  icon: string | undefined;
  last_update: string | undefined;
  localtime: string | undefined;
  country: string | undefined;
}

function WeatherNav({ temp, city, feelsLike, icon, last_update, localtime, country, weatherType }: WeatherNavProps) {
  return (
    <Flex
      height="100vh"
      width="100vw"
      alignItems="center"
      justifyContent="center"
      mt="-40"
    >
      <Flex
        height="450px"
        width="600px"
        direction="column"
        borderRadius="xl"
        background="linear-gradient(to bottom, rgba(135, 206, 250, 0.5), rgba(255, 255, 255, 0.8))"
      >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/current-weather" element={<CurrentWeather temp={temp} city={city} feelsLike={feelsLike} icon={icon} last_update={last_update} localtime={localtime} country={country} weatherType={weatherType}/>} />
        </Routes>
      </Flex>
    </Flex>
  )
}

export default WeatherNav;
