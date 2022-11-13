import React, { useContext } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  HStack,
  VStack,
  Button,
  Image,
  Stack,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { cartContext } from "../Context/CartContextProvider";

const data = [
  {
    id: 1,
    title: "First floor cleaning",
    rating: "4.77 (636)",
    price: "99",
    src: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/home-screen/1644931257406-6b799b.jpeg ",
  },
  {
    id: 2,
    title: "First floor cleaning",
    rating: "4.77 (636)",
    price: "99",
    src: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/home-screen/1644931257406-6b799b.jpeg ",
  },
  {
    id: 3,
    title: "First floor cleaning",
    rating: "4.77 (636)",
    price: "99",
    src: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/home-screen/1644931257406-6b799b.jpeg ",
  },
  {
    id: 4,
    title: "First floor cleaning",
    rating: "4.77 (636)",
    price: "99",
    src: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/home-screen/1644931257406-6b799b.jpeg ",
  },
  {
    id: 5,
    title: "First floor cleaning",
    rating: "4.77 (636)",
    price: "99",
    src: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/home-screen/1644931257406-6b799b.jpeg ",
  },
  {
    id: 6,
    title: "First floor cleaning",
    rating: "4.77 (636)",
    price: "99",
    src: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/home-screen/1644931257406-6b799b.jpeg ",
  },
  {
    id: 7,
    title: "First floor cleaning",
    rating: "4.77 (636)",
    price: "99",
    src: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/home-screen/1644931257406-6b799b.jpeg ",
  },
  {
    id: 8,
    title: "First floor cleaning",
    rating: "4.77 (636)",
    price: "99",
    src: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/home-screen/1644931257406-6b799b.jpeg ",
  },
  {
    id: 9,
    title: "First floor cleaning",
    rating: "4.77 (636)",
    price: "99",
    src: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/home-screen/1644931257406-6b799b.jpeg ",
  },
  {
    id: 10,
    title: "First floor cleaning",
    rating: "4.77 (636)",
    price: "99",
    src: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/home-screen/1644931257406-6b799b.jpeg ",
  },
  {
    id: 11,
    title: "First floor cleaning",
    rating: "4.77 (636)",
    price: "99",
    src: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/home-screen/1644931257406-6b799b.jpeg ",
  },
];

const Product = () => {
  const { total, handleTotal } = useContext(cartContext);

  return (
    <div>
      <Flex w={"90%"} borderTop={"1px"} m={"auto"} justify="space-between">
        {/* left side */}
        <Box px={10}>
          {data.map((item) => (
            <Box
              key={item.id}
              w="500px"
              m={"15px"}
              h="150px"
              p={5}
              borderRadius={20}
              style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
            >
              <HStack justify="space-between">
                {/* left */}
                <VStack>
                  <Text>{item.title}</Text>
                  <HStack>
                    <FaStar />
                    <Text>4.82 (139K)</Text>
                  </HStack>
                  <Text>₹ {item.price}</Text>
                </VStack>

                {/* right */}

                <Image mr={40} src={item.src} mb={3} />
              </HStack>
              <Button onClick={() => handleTotal(item.price)}>Add</Button>
            </Box>
          ))}
        </Box>

        {/* right side */}

        <Box w={"500px"}>
          <Stack align={"center"} mt={100}>
            <Heading>Total : {total}</Heading>
            <Button w={"60%"} mt={"50px"}>
              Checkout
            </Button>
          </Stack>
        </Box>
      </Flex>
    </div>
  );
};

export default Product;
