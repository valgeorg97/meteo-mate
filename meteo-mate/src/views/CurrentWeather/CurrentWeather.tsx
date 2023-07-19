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

function CurrentWeather({
  temp,
  city,
  feelsLike,
  icon,
  last_update,
  localtime,
  country,
  weatherType,
}: CurrentWeatherProps) {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      ml={{ base: 0, sm: "10" }}
      mt={2}
      color={"blackAlpha.500"}
      fontWeight={"medium"}
      mb={4}
    >
      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        fontSize={{ base: "2xs", md: "md" }}
        textAlign="center"
        mb={2}
      >
        Last update: {last_update} | Local time: {localtime}
      </Flex>
      <Flex
        direction={{ base: "column", sm: "row" }}
        alignItems={{ base: "center", sm: "flex-start" }}
        justifyContent="space-between"
        textAlign={{ base: "center", sm: "left" }}
      >
        <Text
          fontSize={{ base: "xl", sm: "6xl" }}
          color={"blackAlpha.800"}
          fontWeight="bold"
          fontFamily={"-moz-initial"}
          mb={{ base: 2, sm: 0 }}
        >
          {city}, {country}
        </Text>
      </Flex>

      <Flex direction={"column"} alignItems={{ base: "center", sm: "flex-start" }} mt={{base: "-2", md: "10"}}>
        <Box
          width={{ base: "100%", sm: "200px" }}
          minHeight={{ base: "auto", sm: "200px" }}
          mt={{ base: 6, sm: 0 }}
          display="flex"
          flexDirection="column"
          alignItems={{ base: "center", sm: "flex-start" }}
          justifyContent="center"
          textAlign={{ base: "center", sm: "left" }}
        >
          <Text
            mb={{base:"-4", md: "4"}}
            fontSize={{ base: "md", sm: "3xl" }}
            mt={{ base: 0, sm: "-20" }}
            textAlign={{ base: "center", sm: "left" }}
          >
            {weatherType}
          </Text>
          <Flex direction="row" alignItems={{ base: "center", sm: "flex-start" }} mb={"-4"}>
            <Image src={icon} alt="Weather condition icon" boxSize={{base:"20", md:"28"}} mr={2} />
            <Flex direction="column" alignItems={{ base: "center", sm: "flex-start" }}>
              <Text
                fontSize={{ base: "3xl", sm: "6xl" }}
                color={"white"}
                textShadow={
                  "2px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
                }
                fontWeight="bold"
                mt={2}
              >
                {temp?.toFixed(0)}°C
              </Text>
              <Text fontSize={{ base: "2xs", sm: "md" }} mt={-2}>
                Feels like: {feelsLike?.toFixed(0)}°C
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}

export default CurrentWeather;