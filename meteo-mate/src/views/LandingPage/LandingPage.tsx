import { Box, Image } from "@chakra-ui/react";
import Logo from "../../assets/images/meteoLogo.png";
import React from "react";

function LandingPage() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Image
        src={Logo}
        boxSize={"40"}
        w={"56"}
        mt={"-8"}
        alt="MeteoMate Logo"
        alignSelf="center"
        mb={2} 
      />
      <Box
        fontWeight="bold"
        fontSize="2xl"
        mb={6} // Add margin bottom
        mt={"-4"}
      >
        Welcome to MeteoMate!
      </Box>
      <Box fontSize="large">
        Please enter the location you want to check the weather for!
      </Box>
    </Box>
  );
}

export default LandingPage;