import React from "react";
import { Box, HStack, Text, Stack, Heading, Image } from "@chakra-ui/react";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsYoutube,
  BsLinkedin,
  BsPinterest,
} from "react-icons/bs";
import logo from "./logo.png";

const Footer = () => {
  return (
    <div>
      <Box w={"100%"} bg={"black"} mt={20} color={"white"}>
        <Box
          w={"90%"}
          h={"400px"}
          //   border="1px solid white"
          m={"auto"}
          pt={"10px"}
        >
          <Box py={5} borderBottom="1px">
            <HStack gap={5}>
              <Text>About Us</Text>
              <Text>IC Impact</Text>
              <Text>Trems & Conditions</Text>
              <Text>Privacy Policy</Text>
              <Text>Intrest Base Advertising</Text>
              <Text>Anti Discrimination Policy</Text>
              <Text>Patner Welfare Policy</Text>
            </HStack>
            <HStack gap={5} mt={5}>
              <Text>Information Security Policy Statement & Objective</Text>
              <Text>Blog</Text>
              <Text>Reviews</Text>
              <Text>Near me</Text>
              <Text>Careers</Text>
              <Text>Gift Cards</Text>
              <Text>Contact Us</Text>
              <Text>Quick Links</Text>
            </HStack>
          </Box>
          <HStack>
            <Heading as="h5" size="sm" mt={5}>
              Serving In
            </Heading>
          </HStack>
          <HStack>
            <Heading as="h6" size="xs" mt={5}>
              USA
            </Heading>
          </HStack>
          <HStack gap={5} mt={5}>
            <Text>Austin</Text>
            <Text>NewYork City</Text>
          </HStack>
          <HStack>
            <Heading as={"h6"} size="sm" mt={5}>
              India
            </Heading>
          </HStack>
          <HStack gap={5} mt={5}>
            <Text>Mumbai</Text>
            <Text>Delhi</Text>
            <Text>Surat</Text>
            <Text>Pune</Text>
            <Text>Nagpure</Text>
            <Text>Hydrabad</Text>
            <Text>Bangalore</Text>
            <Text>Patna</Text>
          </HStack>
        </Box>
      </Box>

      {/* footer lower part */}
      <Box w={"100%"} mt={-10} bg={"black"} color={"white"}>
        <HStack
          w={"90%"}
          borderTop="1px"
          justify={"center"}
          align={"center"}
          margin={"auto"}
          gap={20}
        >
          {/* icon Copy right */}
          <HStack w={40} ml={10} mt={5}>
            <Image src={logo} alt="logo" />
          </HStack>

          {/* social icons */}
          <HStack>
            <BsFacebook size={"1.5em"} />
            <BsTwitter size={"1.5em"} />
            <BsInstagram size={"1.5em"} />
            <BsYoutube size={"1.5em"} />
            <BsLinkedin size={"1.5em"} />
            <BsPinterest size={"1.5em"} />
          </HStack>

          {/* store */}
          <HStack>
            <HStack>
              <Image
                src="https://images.urbanclap.com/image/upload/categories/category_v2/category_7f907eb0.png"
                alt="playStore"
                w={"120px"}
              />

              <Image
                src="https://images.urbanclap.com/image/upload/categories/category_v2/category_7f741d10.png"
                alt="AppleStore"
                w={"120px"}
              />
            </HStack>
          </HStack>
        </HStack>
        <Text mt={-25}>© 2014-22 HomeService Technologies India Pvt. Ltd.</Text>
      </Box>
    </div>
  );
};

export default Footer;
