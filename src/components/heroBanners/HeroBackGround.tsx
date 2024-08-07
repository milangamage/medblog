import { HeroCommonProps } from '@/types/types';
import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};


export default function HeroBackground({
  title,
}: HeroCommonProps) {
  return (
    <section
      id="hero"
      className="max-width-container relative cater3-movingBG bg-cover bg-center xl:h-[580px] md:h-[500px] 4xl:h-[635px] w-screen text-center flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-blue-500 dark:bg-blue-1000 opacity-70 z-[5]"></div>
      <div className="absolute z-[20]">
        <motion.h1
          className=" common-hero-main w-[1082px] lg:w-[1100px] h-[76px]"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 2 }}
        >
          {title}
        </motion.h1>
      </div>
    </section>
  );
}
