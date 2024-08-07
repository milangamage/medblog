'use client'
import React, { useState } from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { PRODUCTION_BASE_URL } from '@/service/productionUrl';


type ReactSlickCarouselProps = {
  images: { src: string, url: string }[];
};

const ReactSlickCarousel: React.FC<ReactSlickCarouselProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
  };

  return (
    <Slider {...settings} className="custom-carousel">
      {images.map((image, index) => {
        const slideClass = index === (currentSlide - 1 + images.length) % images.length ? 'slick-slide-left' : '';
        return (
          <div key={index} className={`relative ${slideClass}`}>
            <a href={`${PRODUCTION_BASE_URL}${image.url}`} target="_blank" rel="noopener noreferrer">
              <img src={image.src} alt={`slide ${index}`} className="object-cover w-full h-full cursor-pointer" />
            </a>
          </div>
        );
      })}
    </Slider>
  );
};

export default ReactSlickCarousel;
