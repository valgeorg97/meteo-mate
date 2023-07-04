import React from "react";
import { Flex, Box } from "@chakra-ui/react";
interface CurrentWeatherProps {
    temp: number | undefined;
    city: string | undefined;
    feelsLike: number | undefined;
}
function CurrentWeather({ temp, city, feelsLike }: CurrentWeatherProps) {
    return (
    <Flex
        height="100vh"
        width="100vw"
        alignItems="center"
        justifyContent="center"
        mt={"-20"}
    >
        
            <Box>Hello! The current temperature in {city} is {temp}°C</Box>
            <Box>It feels like: {feelsLike}°C</Box>
        
    </Flex>
    )
}

export default CurrentWeather;