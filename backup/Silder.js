import React from "react";
import Slider from "react-slick"; // App.js 또는 해당 컴포넌트 파일 상단에
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Slider {...settings} className="w-3/4 mx-auto">
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index}`} className="w-full rounded-xl" />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
