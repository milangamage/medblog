"use client"

import { motion } from 'framer-motion';
import Logo from '../logo/Logo';
import { FOOTER_LINKS, MAIN_REGIONS_LINKS, SOCIAL_LINKS } from '@/constants/GlobalConstant';
import Link from 'next/link';
import Image from 'next/image';
import { PRODUCTION_BASE_URL } from '@/service/productionUrl';

export default function Footer() {
  const handleNavigateToBlog = (url) => {
    window.open(url, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const linkVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const iconVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    hover: { rotate: 20, scale: 1.1 },
  };

  const handleNavigateToMain = (url) => {
    window.open(url, '_blank');
  };


  const handleNavigateToStateJobs = (url) => {
    window.open(url, '_blank');
  };

  const handleNavigateToRegister = (url) => {
    window.open(url, '_blank');
  };

  const handleNavigateToContact = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section className='max-width-container bg-blue-500 dark:bg-blue-1000'>
      <div className="main-width-container">
        <footer className="padding-container">
          <div className="flex items-start justify-between mt-20">
            <div>
              <div className="w-[296px] h-[70px]">
                <Logo height={70} width={296} />
              </div>
              <div className="mt-4">
                {MAIN_REGIONS_LINKS.map((region) => (
                  <div
                    key={region.id}
                    className="flex items-center text-base font-normal leading-5 cursor-pointer"
                    onClick={() => {
                      handleNavigateToMain(region.href);
                    }}
                  >
                    <div className="w-12 h-20">
                      <Image
                        src={region.icon}
                        alt={region.name}
                        width={48}
                        height={80}
                        className=" object-contain object-center"
                      />
                    </div>
                    <span className="text-gray-300 ml-8">{region.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              className="grid grid-cols-2 xl:grid-cols-3 gap-20"
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
            >
              {FOOTER_LINKS.map((value, index) => (
                <motion.article key={index} variants={linkVariants}>
                  <div className="mb-10">
                    <p className="footer-text-topic">{value.title}</p>
                  </div>
                  <motion.div className="footer-text-subtopic">
                    {value.links.map((link, linkIndex) => (
                      <motion.div
                        key={linkIndex}
                        className="mb-4"
                        variants={linkVariants}
                        whileHover={{ scale: 1.05, color: '#F5F5F5' }}
                      >
                        {link.type === 'contact' ? (
                          <span className='cursor-pointer' onClick={() => { handleNavigateToContact(`${PRODUCTION_BASE_URL}/contact-us`) }}>{link.name}</span>
                        ) : link.type === 'register' ? (
                          <span className='cursor-pointer' onClick={() => { handleNavigateToRegister(`${PRODUCTION_BASE_URL}/register`) }}>{link.name}</span>
                        ) : typeof link === 'string' ? (
                          link
                        ) : link.type === 'internal' ? (
                          <Link href={link.url}>{link.name}</Link>
                        ) : (
                          link.type === 'external' && (
                            <span className='cursor-pointer' onClick={() => { handleNavigateToStateJobs(`${PRODUCTION_BASE_URL}/state/${link.url}`) }}>{link.name}</span>
                          )
                        )}
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.article>
              ))}
            </motion.div>
          </div>
          <hr className="mt-20 border-t-[0.5px] border-gray-600" />
          <div className="flex items-center justify-between my-5">
            <div className="footer-text-subtopic">Copyrights © 2024 Medfuture</div>
            <motion.div
              className="flex items-center gap-6"
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
            >
              {SOCIAL_LINKS.map((city, index) => (
                <motion.div
                  key={city.id}
                  custom={index}
                  variants={iconVariants}
                  whileHover="hover"
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
                </motion.div>
              ))}
            </motion.div>
          </div>
        </footer>
      </div>
    </section>
  );
}
