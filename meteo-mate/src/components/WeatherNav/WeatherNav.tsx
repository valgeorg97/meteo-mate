import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import { Routes, Route, useLocation } from "react-router-dom";
import CurrentWeather from "../../views/CurrentWeather/CurrentWeather";
import LandingPage from "../../views/LandingPage/LandingPage";
import Forecast from "../../views/Forecast/Forecast";

/**
 * Props for the WeatherNav component.
 */
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

/**
 * Weather navigation component.
 * @param {WeatherNavProps} props - The props for the WeatherNav component.
 * @returns {JSX.Element} - The rendered WeatherNav component.
 */
function WeatherNav({
  temp,
  city,
  feelsLike,
  icon,
  last_update,
  localtime,
  country,
  weatherType,
  forecastData,
}: WeatherNavProps): JSX.Element {
  const location = useLocation();

  const isLandingPage = location.pathname === "/";

  return (
    <Flex
      minHeight={{ base: "100vh", sm: "auto" }}
      width="100vw"
      alignItems="center"
      justifyContent="center"
      direction="column"
      mt={{base: "0px", md:"20px"}}
    >
      {isLandingPage ? (
        <Flex
          width={{ base: "90%", md: "600px" }}
          minHeight={{base: "150", md: "300px"}}
          direction="column"
          borderRadius="xl"
          background="linear-gradient(to bottom, rgba(135, 206, 250, 0.5), rgba(255, 255, 255, 0.8))"
          boxShadow="0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.15)"
          mt={{ base: "-32", md: "44" }}
          p={6}
        >
          <LandingPage />
        </Flex>
      ) : (
        <Box
          minHeight={{ base: "auto", md: "400px" }}
          width={{ base: "90%", md: "600px" }}
          borderRadius="xl"
          background="linear-gradient(to bottom,rgba(255, 255, 255, 0.8), rgba(135, 206, 250, 0.8) )"
          mt={{ base: "10", md: "32" }}
          boxShadow="0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.15)"
        >
          <Routes>
            <Route
              path="/current-weather"
              element={
                <CurrentWeather
                  temp={temp}
                  city={city}
                  feelsLike={feelsLike}
                  icon={icon}
                  last_update={last_update}
                  localtime={localtime}
                  country={country}
                  weatherType={weatherType}
                />
              }
            />
            <Route
              path="/"
              element={
                <CurrentWeather
                  temp={temp}
                  city={city}
                  feelsLike={feelsLike}
                  icon={icon}
                  last_update={last_update}
                  localtime={localtime}
                  country={country}
                  weatherType={weatherType}
                />
              }
            />
          </Routes>
        </Box>
      )}
      {!isLandingPage && forecastData && (
        <Box
          minHeight={{ base: "60px", md: "120px" }}
          width={{ base: "90%", md: "600px" }}
          borderRadius="xl"
          background="linear-gradient(to bottom,rgba(255, 255, 255, 0.8), rgba(135, 206, 250, 0.8) )"
          mt="4"
          boxShadow="0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.15)"
        >
          <Forecast forecastData={forecastData} />
        </Box>
      )}
    </Flex>
  );
}

export default WeatherNav;
