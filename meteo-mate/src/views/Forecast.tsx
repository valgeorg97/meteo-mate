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
    <Flex direction="column" align="center">
      <Text fontSize="lg" fontWeight="bold" mb={4} mt={2}>
        Forecast:
      </Text>
      <Flex direction="row">
        {forecastData.map((dayData, index) => (
          <Flex key={index} direction="column" align="center" justify="center" mx={6}>
            <Text>Date: {dayData.date}</Text>
            <Text>{dayData.day.condition.text}</Text>
            <Image src={dayData.day.condition.icon} alt="Weather Icon" boxSize={50} />
            <Text>
              {dayData.day.mintemp_c}&deg;C | {dayData.day.maxtemp_c}&deg;C
            </Text>
            <hr />
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}

export default Forecast;
