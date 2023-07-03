import { Flex } from "@chakra-ui/react";
import React from "react";

interface LandingPageProps {
  temp: number | undefined;
  city: string | undefined;
}

function LandingPage ({temp, city}: LandingPageProps){
    return(
        <Flex
            height="700px"
            width="800px"
            alignItems="center"
            justifyContent="center"
            border="2px"
            borderRadius={"lg"}
        >
            Hello! The current temperature in {city} is {temp}°C
        </Flex>
    );
}

export default LandingPage;