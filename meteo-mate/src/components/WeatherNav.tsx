import React from "react";
import { Flex, Button, Spacer } from "@chakra-ui/react";
import { Link, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import CurrentWeather from "../views/CurrentWeather"; // Import CurrentWeather
import Forecast10Days from "../views/Forecast10Days"; // Import Forecast10Days
import LandingPage from "../views/LandingPage";

interface WeatherNavProps {
    temp: number | undefined;
    city: string | undefined;
    feelsLike: number | undefined;
}

function WeatherNav ({temp, city, feelsLike}: WeatherNavProps) {
    return (
        <Flex
            height="100vh"
            width="100vw"
            alignItems="center"
            justifyContent="center"
        >
            <Flex
                height="700px"
                width="800px"
                direction="column"
                border="2px"
                borderRadius={"lg"}
            >
                <Flex
                    p={4}
                    bg="teal.500"
                    color="white"
                >
                    <Link to="/current-weather">
                        <Button m={2} colorScheme="whiteAlpha">Current Weather</Button>
                    </Link>
                    <Spacer />
                    <Link to="/forecast-10-days">
                        <Button m={2} colorScheme="whiteAlpha">10 Days Forecast</Button>
                    </Link>
                </Flex>
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/current-weather" element={<CurrentWeather temp={temp} city={city} feelsLike={feelsLike} />} />
                    <Route path="/forecast-10-days" element={<Forecast10Days />} />
                </Routes>
            </Flex>
        </Flex>
    )
}

export default WeatherNav;