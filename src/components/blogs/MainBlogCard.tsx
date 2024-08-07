'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { formatBlogNameForURL } from '@/utils/formateNameForUrl';
import DOMPurify from 'dompurify';

export default function MainBlogCard({blog}) {

  const router = useRouter();
  const slug = formatBlogNameForURL(blog?.blogDetails[0]?.blog_title);
  const featuredImage = blog?.blogDetails[0]?.featured_image;
  const fallbackImage = "/images/defaultBlogImage.jpeg";

  const sanitizedDescription = DOMPurify.sanitize(blog?.blogDetails[0]?.blog_description || '');
  const extractFirstParagraph = (html: string) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const firstParagraph = doc.querySelector('p');
    return firstParagraph ? firstParagraph.textContent : '';
  };

  const firstParagraphText = extractFirstParagraph(sanitizedDescription);

  const showFirstTwoLines = (text: string) => {
    const lines = text.split('\n').slice(0, 2).join('\n');
    return lines;
  };

  const blogTags = blog.blogTags;
  const labelTags = blogTags.filter(tag => tag.site_tags.category === 'Label');

  const handleCardClick = () => {
    router.push(`/${slug}/${blog.id}`);
  };

  return (
    <div className="mb-20">
      <div onClick={handleCardClick} className='w-[290px] h-[368px] flex flex-col items-center justify-normal gap-x-5 dark:bg-white dark:bg-opacity-10 cursor-pointer'>
        <div className='min-w-[288px] h-[205px] relative'>
          <Image src={featuredImage || fallbackImage} alt={''} fill={true} priority={true} objectFit='cover' objectPosition='center' className='rounded-md' />
        </div>
        <div className='p-2'>
        <div className='flex gap-x-2 mb-2'>
          {labelTags.map(tag => (
            <div key={tag.site_tags_id} className='bg-blue-200 rounded-[3px] px-2 py-1 text-gray-450 dark:text-purple-100 text-xs'>
              {tag.site_tags.name}
            </div>
          ))}
        </div>
          <p className='font-sans font-normal text-[17px] leading-[24px] text-blue-950 dark:text-pink-100'>{blog?.blogDetails[0]?.blog_title}</p>
          <div className='flex items-center gap-x-4 my-2'>
            <div className='flex items-center gap-x-1'>
              <img src="/blog/icons/Poster.png" alt="Bookmark" className='w-[18px] h-[18px]' />
              <span className='text-gray-400 text-[9px] dark:text-green-100'>{blog?.content_writer}</span>
            </div>
            <div className='border-l border-gray-300 h-6'></div>
            <div className='flex items-center gap-x-1'>
              <img src="/blog/icons/Calendar.png" alt="Share" className='w-3 h-3' />
              <span className='text-gray-400 text-[9px] dark:text-green-100'>{blog?.published_date}</span>
            </div>
            <div className='border-l border-gray-300 h-6'></div>
            <div className='flex items-center gap-x-1'>
              <img src="/blog/icons/GrayClock.png" alt="Comment" className='w-3 h-3' />
              <span className='text-gray-400 text-[9px] dark:text-green-100'>{blog?.blogHistory[0]?.minutes} min. to read</span>
            </div>
          </div>
          <p className="font-sans font-normal text-[12px] leading-[18px] text-gray-450 dark:text-white line-clamp-2">{showFirstTwoLines(firstParagraphText)}</p>
        </div>
      </div>
    </div>
  )
}
