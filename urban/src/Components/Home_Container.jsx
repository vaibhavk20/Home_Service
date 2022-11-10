import React, { useState } from "react";
import { Box, HStack, Image, Heading } from "@chakra-ui/react";
import Carousel from "./Carousel";

const CustomerReview = [
  {
    id: 1,
    src: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1665169659111-37b31d.jpeg",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1663711958449-f77329.jpeg",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1665169659111-37b31d.jpeg",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1663711958449-f77329.jpeg",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1665169659111-37b31d.jpeg",
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1663711958449-f77329.jpeg",
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1665169659111-37b31d.jpeg",
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1663711958449-f77329.jpeg",
  },
];

const Home_Container = () => {
  const [slide, setSlide] = useState(1);
  return (
    <div>
      <Box w={"100%"} mt={"100px"} mb={20} h="200px">
        <HStack spacing={"10px"} justify="center">
          <Box w={"25%"}>
            <Image
              src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1663592113155-5052d8.jpeg"
              alt="poster-1"
            />
          </Box>
          <Box w={"25%"}>
            <Image
              src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1663592119741-e5440b.jpeg"
              alt="poster-2"
            />
          </Box>
          <Box w={"25%"}>
            <Image
              src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1663592120206-204058.jpeg"
              alt="poster-3"
            />
          </Box>
        </HStack>
      </Box>
      {/* customer review */}

      <Box>
        <Heading>Customer Reviews</Heading>

        <Box ml="90px" mt="30px">
          <Carousel data={CustomerReview} />
        </Box>
      </Box>
    </div>
  );
};

export default Home_Container;
