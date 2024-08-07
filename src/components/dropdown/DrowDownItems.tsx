
import React from 'react';
import { motion } from 'framer-motion';

interface DropDownItemProps {
    question: string;
    answer: string;
    id: number;
    isOpen: boolean;
    onToggle: () => void;
}

const DropDownItem: React.FC<DropDownItemProps> = ({
    id,
    question,
    answer,
    isOpen,
    onToggle,
}) => {
    const textVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
        e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
    };

    return (
        <div>
            <motion.div
                className="flex items-center justify-between bg-white dark:bg-opacity-10 border w-full p-4 mb-2 mt-5 border-b-[1px] border-gray-200 cursor-pointer relative rounded-[30px]"
                onClick={onToggle}
                onMouseMove={handleMouseMove}
                whileHover={{
                    scale: 1.01,
                    borderColor: '#F5F5F5',
                    transition: { duration: 1 },
                }}
                style={{
                    border: '1px solid transparent',
                    '--hover-color': '#F5F5F5',
                    '--mouse-x': '50%',
                    '--mouse-y': '50%',
                }}
            >
                <h2
                    className={`font-sans lg:text-[24px] 2xl:text-[28px] leading-[44px] font-normal ${isOpen ? 'text-blue-400' : 'text-blue-390 dark:text-white'}`}
                >
                    {question}
                </h2>

                <span>
                    {isOpen ? (
                        <img
                            width={20}
                            height={20}
                            src='/blog/icons/MinusIcon.png'
                            alt="Close Icon"
                            className="object-contain object-center cursor-pointer"
                        />
                    ) : (
                        <img
                            width={20}
                            height={20}
                            src='/blog/icons/PlusIcon.png'
                            alt="Open Icon"
                            className="object-contain object-center cursor-pointer"
                        />
                    )}
                </span>
                <style jsx>{`
          div::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(
              circle at var(--mouse-x) var(--mouse-y),
              var(--hover-color),
              transparent 50%
            );
            opacity: 0.3;
            pointer-events: none;
            transition: background 0.5s;
          }
        `}</style>
            </motion.div>

            {isOpen && (
                <motion.div
                    className="px-8 font-sans font-normal lg:text-base lg:leading-[28px] 2xl:text-[18px] 2xl:leading-8 text-blue-380"
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                >
                    {answer}
                </motion.div>
            )}
        </div>
    );
};

export default DropDownItem;
