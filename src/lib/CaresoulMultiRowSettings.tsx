import { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const carouselMultiRowSettings = (): Settings => {
  return {
    dots: true,
    infinite: false,
    speed: 500,
    rows: 2,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    className: 'custom-carousel-multi',
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          infinite: false,
          slidesToShow: 3,
          rows: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          infinite: false,
          slidesToShow: 3,
          slidesPerRow: 3,
          rows: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          infinite: false,
          slidesToShow: 2,
          rows: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 430,
        settings: {
          infinite: false,
          slidesToShow: 1,
          rows: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
};

