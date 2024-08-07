import React from 'react'
import Image from 'next/image'

export default function PopularBlogCard() {
    return (
        <div className='w-[792px] h-[319px] drop-shadow-xl rounded-md border-[0.5px]  flex items-start justify-normal gap-x-5 p-4'>
            <div className='min-w-[346px] h-[271px] relative'>
                <Image src="/images/blogImageCommon.jpeg" alt={''} fill={true} priority={true} objectFit='cover' objectPosition='center' className='rounded-md' />
            </div>
            <div className='p-1'>
                <div className='flex items-center justify-end'>
                    <div className='bg-blue-500 rounded-[3px] w-[112px] py-1 text-center text-white font-sans text-xs'>Popular Posted</div>
                </div>
                <p className='font-sans font-normal text-[25px] leading-[35px] text-blue-950'>Promising Solutions for Doctor Shortages in Albury</p>
                <div className='flex items-center gap-x-4 my-2'>
                    <div className='flex items-center gap-x-2'>
                        <img src="/icons/Poster.png" alt="Bookmark" className='w-[18px] h-[18px]' />
                        <span className='text-gray-400 text-[9px]'>Bookmark</span>
                    </div>
                    <div className='border-l border-gray-300 h-6'></div>
                    <div className='flex items-center gap-x-2'>
                        <img src="/icons/Calendar.png" alt="Share" className='w-3 h-3' />
                        <span className='text-gray-400 text-[9px]'>Share</span>
                    </div>
                    <div className='border-l border-gray-300 h-6'></div>
                    <div className='flex items-center gap-x-2'>
                        <img src="/icons/GrayClock.png" alt="Comment" className='w-3 h-3' />
                        <span className='text-gray-400 text-[9px]'>Comment</span>
                    </div>
                </div>
                <p className="font-sans font-normal text-[12px] leading-[18px] mt-5 text-gray-450">Did you come here for something in particular or just general Riker-bashing? And blowing into</p>
            </div>
        </div>
    )
}
