'use client';
import { formatBlogNameForURL } from '@/utils/formateNameForUrl';
import Link from 'next/link';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function BlogCategoryHighlights({ labels, onLabelClick, selectedLabel, loading, filteredBlog }) {
  console.log(filteredBlog);
  return (
    <section className="padding-container">
      <h2 className='main-topic'>Blogs</h2>
      <div className="">
        <div className='flex flex-wrap gap-5 max-h-[calc(3*16rem)] overflow-hidden'>
          {loading
            ? Array.from({ length: 8 }).map((_, index) => (
                <div 
                  key={index} 
                  className='py-2 px-6 flex-grow min-w-[100px] text-center cursor-pointer shadow-md'
                >
                  <Skeleton height={30} width={100} />
                </div>
              ))
            : labels.map((label) => (
                <div 
                  key={label.site_tags_id} 
                  className={`py-2 px-6 flex-grow min-w-[100px] text-center cursor-pointer shadow-lg ${selectedLabel === label.site_tags_id ? 'bg-blue-400 text-white' : 'bg-white text-gray-700'}`} 
                  onClick={() => onLabelClick(label.site_tags_id)}
                >
                  <span className='text-lg'>{label.name}</span>
                </div>
              ))
          }
        </div>
        <div className="mt-8 flex items-center justify-normal gap-x-5">
          {loading ? (
            Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className='mb-4'>
                <Skeleton height={20} width={200} />
              </div>
            ))
          ) : (
            filteredBlog && filteredBlog.length > 0 ? (
              filteredBlog?.map((blog, index) => (
                <div key={blog.id} className='mb-4 '>
                  <div
                    className='text-lg leading-[20px] font-normal text-blue-400' 
                    // href={`/${formatBlogNameForURL(blog?.blogDetails[0]?.blog_title)}/${blog.id}`}
                  >
                    #Topic {index + 1} {blog?.blogDetails[0]?.blog_title}
                  </div>
                </div>
              ))
            ) : (
              <p className='text-gray-500'>No blog titles available</p>
            )
          )}
        </div>
      </div>
    </section>
  );
}
