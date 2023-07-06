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
        <Flex direction="column" alignItems="center" justifyContent="center" ml={"10"} mt={2} color={"blackAlpha.500"} fontWeight={"medium"}>
            <Flex>Last update: {last_update} | Local time: {localtime}</Flex>
            <Flex direction="row" alignItems="center" justifyContent="space-between">
                <Text
                    fontSize={"6xl"} 
                    color={"whitesmoke"}
                    fontWeight="bold" 
                    mt={10}
                    fontFamily={"-moz-initial"}
                >
                    {city}, {country}
                </Text>
            </Flex>
            
            <Flex direction={"row"} justifyContent="center" alignItems={"center"}>
                <Box  width="200px" height="200px" mt={0} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <Text alignItems={"center"} mb={"-4"} mr={"14"} fontSize={"2xl"}>{weatherType}</Text>
                    <Flex direction="row" alignItems="center" justifyContent={"center"} mr={20}>
                        <Image src={icon} alt="Weather condition icon" boxSize={"28"} mr={2}/>
                        <Flex direction="column" alignItems="center">
                            <Text fontSize={"6xl"} 
                                color={"white"}
                                textShadow={
                                    "2px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
                                }
                                fontWeight="bold"
                                ml={-4}
                            >
                                {temp}°C
                            </Text>
                            <Text fontSize={"sm"} mt={-2}>Feels like: {feelsLike}°C</Text>
                        </Flex>
                    </Flex>
                </Box>
            </Flex>
        </Flex>
    )
}

export default CurrentWeather;