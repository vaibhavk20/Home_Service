import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Image } from "@chakra-ui/react";

function Carousel({ data }) {
  const settings = {
  
    dots: true,
    accessibility: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
   
  };

  return (
    <div>
      <Slider {...settings}>
        {data.map((item) => {
          return (
            <Box >
              <img width={"70%"} src={item.src} alt={item.id} />
            </Box>
          );
        })}
      </Slider>
    </div>
  );
}
export default Carousel;
