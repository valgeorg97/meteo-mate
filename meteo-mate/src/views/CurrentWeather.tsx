import React from "react";
import { Flex, Box, Image, Text } from "@chakra-ui/react";

interface CurrentWeatherProps {
    temp: number | undefined;
    city: string | undefined;
    feelsLike: number | undefined;
    icon: string | undefined;
    last_update: string | undefined;
    localtime: string | undefined;
    country: string | undefined;
    weatherType: string | undefined;
}

function CurrentWeather({ temp, city, feelsLike, icon, last_update, localtime, country, weatherType}: CurrentWeatherProps) {
    return (
        <Flex direction="column" alignItems="center" justifyContent="center" ml={"10"} mt={2} color={"blackAlpha.500"} fontWeight={"medium"} mb={4}>
            <Flex alignItems={"center"} justifyContent={"center"}>Last update: {last_update} | Local time: {localtime}</Flex>
            <Flex direction="row" alignItems="center" justifyContent="space-between">
                <Text
                    fontSize={"6xl"} 
                    color={"blackAlpha.800"}
                    fontWeight="bold" 
                    fontFamily={"-moz-initial"}
                    paddingRight={"6"}
                >
                    {city}, {country}
                </Text>
            </Flex>
            
            <Flex direction={"row"} justifyContent="center" alignItems={"center"} mt={10}>
                <Box  width="200px" minHeight="200px" mt={6} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <Text alignItems={"center"} mb={"-4"} mr={"14"} fontSize={"3xl"} mt={"-20"}>{weatherType}</Text>
                    <Flex direction="row" alignItems="center" justifyContent={"center"} mr={20} mb={"-4"}>
                        <Image src={icon} alt="Weather condition icon" boxSize={"28"} mr={2}/>
                        <Flex direction="column" alignItems="center">
                            <Text fontSize={"6xl"} 
                                color={"white"}
                                textShadow={
                                    "2px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
                                }
                                fontWeight="bold"
                                ml={-4}
                                mt={2}
                            >
                                {temp?.toFixed(0)}°C
                            </Text>
                            <Text fontSize={"md"} mt={-2}>Feels like: {feelsLike?.toFixed(0)}°C</Text>
                        </Flex>
                    </Flex>
                </Box>
            </Flex>
        </Flex>
    )
}

export default CurrentWeather;
