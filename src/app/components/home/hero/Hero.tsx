'use client'
import Button from "@/components/buttons/Button";
import { SOCIAL_LINKS } from "@/constants/GlobalConstant";
import Image from "next/image";
import dynamic from 'next/dynamic';
import { CAR_IMAGES } from "@/constants/siteContstantsDetails";
import { PRODUCTION_BASE_URL } from "@/service/productionUrl";

const ReactSlickCarousel = dynamic(() => import('./HeroCaresoul'), { ssr: false });

export default function HeroComponent() {

  const handleNavigateToBlog = (url) => {
    window.open(url, '_blank');
  };

  const navigateToRegister = () => {
    window.open(`${PRODUCTION_BASE_URL}/register`, '_blank');
  };

  return (
    <section className="max-width-container relative">
      <div className="h-[686px]">
        <Image
          src="/blog/images/BackgroundImage.jpeg"
          fill={true}
          quality={100}
          alt="hero-bg-img"
          priority={true}
          className="object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-blue-500 dark:bg-blue-1000 opacity-70 z-10"></div>
      </div>
      <div className="main-width-container items-center overflow-hidden relative">
        <div className="gap-4">
          <div className="absolute bottom-[120px] right-[20px] 2xl:right-[40px] 4xl:right-[40px] z-[20] w-[700px] 2xl:w-[800px] 4xl:w-[900px]">
            <ReactSlickCarousel images={CAR_IMAGES} />
          </div>
          {/* Right */}
          {/* Left */}
          <div className="absolute top-0 z-[20] text-white text-left md:top-[100px] lg:top-[15%] pr-5 w-[550px] 2xl:w-[657px]">
            <p className="hero-text-main">Shaping the Healthcare of Tomorrow</p>
            <p className="hero-text-sub w-[500px] 2xl:w-[657px] mt-5  2xl:mt-10">Discover cutting-edge medical solutions and personalized care.</p>
            <div className="w-[250px] mt-10">
              <Button
                type="button"
                title="Register Now"
                variant="register-now-btn"
                handleClick={navigateToRegister}
              />
            </div>
            <div className="flex items-center gap-5 mt-10">
              {SOCIAL_LINKS.map((city) => (
                <div
                  key={city.id}
                  onClick={() => {
                    handleNavigateToBlog(city.href);
                  }}
                >
                  <img
                    src={city.icon}
                    alt="avatar"
                    width={40}
                    height={40}
                    className="rounded-full cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}