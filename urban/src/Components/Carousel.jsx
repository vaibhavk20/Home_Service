import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Image } from "@chakra-ui/react";
import "./Home_Container.css";

function Carousel({ data }) {
  const settings = {
    dots: true,
    accessibility: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true
  };

  return (
    <div>
      <Slider {...settings}>
        {data.map((item) => {
          return (
            <Box w="120px" p="20px" border={"1px"}>
              <img
                className="Home_Container-poster"
                src={item.src}
                alt={item.id}
                style={{ width: "100%", objectFit: "contain" }}
              />
            </Box>
          );
        })}
      </Slider>
    </div>
  );
}
export default Carousel;
