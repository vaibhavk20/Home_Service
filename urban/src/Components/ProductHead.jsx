import React from "react";
import { Heading, HStack, Box, Image, VStack, Text } from "@chakra-ui/react";
import logo from "./Home.gif";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProductHead = () => {
  let navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };
  return (
    <div>
      <HStack m="auto" justify="center" gap={"100px"}>
        <VStack justify={"left"}>
          <Heading>Regular Home Cleaning</Heading>
          <HStack>
            <FaStar />
            <Text>4.82 (139K)</Text>
          </HStack>
        </VStack>

        <Box onClick={handleHome} style={{ pointer: "cursor" }}>
          <Image src={logo} alt="logo-gif" h={"250px"} />
        </Box>
      </HStack>
    </div>
  );
};

export default ProductHead;
