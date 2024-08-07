'use client'
import { formatBlogNameForURL } from '@/utils/formateNameForUrl';
import { motion } from 'framer-motion';
import Link from 'next/link'
import React from 'react'

const menuVariants = {
  hidden: {
    opacity: 0.5,
    y: -10,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.25,
      when: 'beforeChildren',
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
    },
  },
};


export default function TopMenu({ data }) {
  return (
    <section className="absolute backdrop-blur-xl top-[18px] left-[90%] transform -translate-x-[50%] w-[400px] z-[10]">
      <motion.div
        className="bg-gradient-to-r from-white to-gray-150 rounded-md shadow py-10 font-normal text-[13px] text-blue-580 p-10"
        initial="hidden"
        animate="visible"
        variants={menuVariants}
      >
        <ul className="grid grid-cols-1 gap-5">
          {data?.map((subLink, index) => (
            <motion.li
              key={subLink.divisions_id}
              className=""
              variants={itemVariants}
              custom={index}
              initial="hidden"
              animate="visible"
            >
              <Link href={{
                  pathname: `/category/${formatBlogNameForURL(subLink.name)}`
                }} className="flex items-center justify-normal text-blue-500 text-xl font-bold">
                {subLink.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}
