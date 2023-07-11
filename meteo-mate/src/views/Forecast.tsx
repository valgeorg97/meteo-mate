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
      <Text fontSize="lg" fontWeight="bold" mb={6} mt={2} borderBottom={"2px"}>
        Forecast
      </Text>
      <Flex direction="row" >
        {forecastData.map((dayData, index) => (
          <Flex key={index} direction="column" align="center" justify="center" mx={10} >
            <Text>{dayData.date}</Text>
            <Image src={dayData.day.condition.icon} alt="Weather Icon" boxSize={50} />
            <Text>
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
