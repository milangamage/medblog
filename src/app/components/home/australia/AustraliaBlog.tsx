import MainBlogCard from '@/components/blogs/MainBlogCard';
import MainBlogCardLoading from '@/components/loading/MainBlogLoadingCard';
import { carouselMultiRowSettings } from '@/lib/CaresoulMultiRowSettings';
import React from 'react'
import Slider from 'react-slick';

export default function AustraliaBlog({ blogs, loading }) {
  const settings = carouselMultiRowSettings();

  return (
    <section className='padding-container'>
      <h2 className='main-topic'>Australia</h2>
      <div className='custom-carousel-multi'>
        <Slider {...settings}>
          {loading
            ? Array.from({ length: 10 }).map((_, index) => (
              <MainBlogCardLoading key={index} />
            ))
            : blogs?.slice(0, 10).map((blog) => (
              <MainBlogCard key={blog.id} blog={blog} />
            ))}
        </Slider>
      </div>
    </section>
  )
}
