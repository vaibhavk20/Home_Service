import React from "react";
import "./Navbar.css";

import logo from "./logo.png";

import {
  Box,
  Image,
  HStack,
  Spacer,
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Input,
  Heading,
} from "@chakra-ui/react";
import { ChevronDownIcon, Search2Icon } from "@chakra-ui/icons";

// import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Box>
        <Image
          className="cleaning-poster"
          src="https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1645105954445-5a1b01.jpeg"
          alt="cleaning-poster"
        />
      </Box>
      <Flex h={50} justify="center" align={"center"}>
        <Box w={40} ml={10}>
          <Image src={logo} alt="logo" />
        </Box>
        <Spacer />
        <HStack spacing={20} mr={20} color={"blackAlpha.900"}>
          <p>Blog</p>
          <p>Register As A Professional</p>
          <p>Login/SignUp</p>
        </HStack>
      </Flex>

      <Box w={"45%"} m="auto" mt={"200px"}>
        <Heading color={"whiteAlpha.900"} mb={"50px"}>
          Home Services, On Demand.
        </Heading>
        <Flex gap="20px">
          <Menu>
            <MenuButton
              as={Button}
              h={50}
              w={130}
              rightIcon={<ChevronDownIcon />}
            >
              <HStack spacing={"10px"}>
                <Text>India</Text>
              </HStack>
            </MenuButton>
            <MenuList>
              <MenuItem>India</MenuItem>
              <MenuItem>Astine</MenuItem>
            </MenuList>
          </Menu>
          <HStack bg={"whiteAlpha.800"}>
            <Box ml={3}>
              <Search2Icon />
            </Box>
            <Box bg={"whiteAlpha.900"}>
              <Input placeholder="Search for Services"  w={400} />
            </Box>
          </HStack>
        </Flex>
      </Box>
    </div>
  );
};

export default Navbar;
