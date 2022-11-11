import React from "react";
import { Box, HStack, Image, Heading } from "@chakra-ui/react";
import Carousel from "./Carousel";
import "./Home_Container.css";
import Footer from "./Footer";


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
  return (
    <div>
      <Box w={"100%"} mt={"100px"} mb={20} h="200px">
        <HStack spacing={"10px"} justify="center">
          <Box w={"25%"}>
            <Image
              className="Home_Container-poster"
              src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1663592113155-5052d8.jpeg"
              alt="poster-1"
            />
          </Box>
          <Box w={"25%"}>
            <Image
              className="Home_Container-poster"
              src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1663592119741-e5440b.jpeg"
              alt="poster-2"
            />
          </Box>
          <Box w={"25%"}>
            <Image
              className="Home_Container-poster"
              src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1663592120206-204058.jpeg"
              alt="poster-3"
            />
          </Box>
        </HStack>
      </Box>
      {/* customer review */}

      <Box>
        <Heading>Customer Reviews</Heading>

        <Box w={"90%"} m="auto" mt="30px" bg="blackAlpha.900">
          <Carousel data={CustomerReview} />
        </Box>
      </Box>
       {/* footer */}
       <Footer />
    </div>
  );
};

export default Home_Container;
