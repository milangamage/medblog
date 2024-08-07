import React from 'react'
import Image from "next/image";
import Button from '../buttons/Button';

export default function Banner() {
  return (
    <section className='flex items-center justify-center my-20'>
      <div className="w-[1269px] h-[325px] relative">
        <Image
          src="/blog/images/BannerBackground.png"
          fill={true}
          quality={100}
          alt="banner-bg-img"
          priority={true}
          className="object-cover object-center"
        />
        <div className="absolute top-[60px] left-1/3 transform -translate-x-1/3 text-black w-[568px]">
          <p className="font-sans font-bold text-[32px] leading-[48px] text-center">Stay updated with our newsletters and job alerts!</p>
          <div className='flex items-center justify-center'>
            <div className="w-[250px] mt-5">
              <Button
                type="button"
                title="Subscribe"
                variant="find-jobs-btn"
              // handleClick={navigateToRegister}
              />
            </div>
          </div>
        </div>
        <div className="absolute right-[20%]">
          <div className="w-[216px] h-[298px] relative">
            <Image src="/blog/images/portrait-doctor.png" fill={true} />
          </div>
        </div>
      </div>
    </section>
  )
}
