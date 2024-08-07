import React from 'react';
import Image from 'next/image';
import Button from '../buttons/Button';
import { PRODUCTION_BASE_URL } from '@/service/productionUrl';

export default function RegisterBanner() {
  const navigateToRegister = () => {
    window.open(`${PRODUCTION_BASE_URL}/register`, '_blank');
  };

  return (
    <section className='flex items-center justify-center padding-container'>
      <div className="w-[904px] h-[264px] relative">
        <Image
          src="/blog/images/RegsiterBanner.png"
          fill={true}
          quality={100}
          alt="banner-bg-img"
          priority={true}
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(179.37deg, rgba(255, 255, 255, 0) 0.55%, #FFFFFF 63.76%)',
          }}
        />
        <div className="absolute top-[60px] left-1/2 transform -translate-x-1/2 text-black w-[568px] text-center">
          <p className="font-sans font-bold text-[32px] leading-[48px]">Global Doctor Community</p>
          <p>Get news from the medfuture in your inbox each weekday morning.</p>
          <div className='flex items-center justify-center'>
            <div className="w-[250px] mt-5">
              <Button
                type="button"
                title="Register"
                variant="find-jobs-btn"
                handleClick={navigateToRegister}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

