import React from "react";
import { Flex, Text, Image } from "@chakra-ui/react";

interface ForecastProps {
  forecastData: Array<{
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

function Forecast({ forecastData }: ForecastProps) {
  return (
    <Flex direction="column" align="center" >
      <Text fontSize={{base:"sm", md:"lg"}} fontWeight="bold" mb= {{ base:"1", md:"4"}} mt={{base:"0", md:"2"}} borderBottom={"2px"}>
        Forecast
      </Text>
      <Flex direction="row" >
        {forecastData.map((dayData, index) => (
          <Flex key={index} direction="column" align="center" justify="center" mx={10} >
            <Text fontSize={{base:"xs", md:"md"}}>{dayData.date}</Text>
            <Image src={dayData.day.condition.icon} alt="Weather Icon" boxSize={{base: "12", md: "50"}} />
            <Text fontSize={{base:"xs", md:"md"}} mb={2}>
              {dayData.day.mintemp_c.toFixed(0)}&deg;C | {dayData.day.maxtemp_c.toFixed(0)}&deg;C
            </Text>
            <hr />
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}

export default Forecast;
