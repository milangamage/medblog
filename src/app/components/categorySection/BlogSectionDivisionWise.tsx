'use client'
import MainBlogCard from '@/components/blogs/MainBlogCard';
import MainBlogCardLoading from '@/components/loading/MainBlogLoadingCard';
import React, { useState } from 'react'

export default function BlogSectionDivisionWise({ data, loading }) {
    const [visibleBlogs, setVisibleBlogs] = useState<number>(12);

    const handleLoadMore = () => {
        setVisibleBlogs((prevCount) => prevCount + 3);
    };

    const displayedBlogs = data?.slice(0, visibleBlogs) || [];

    return (
        <section>
            <div className="grid grid-cols-3 gap-5">
                {loading
                    ? Array.from({ length: visibleBlogs }).map((_, index) => (
                        <div key={index}>
                            <MainBlogCardLoading />
                        </div>
                    ))
                    : displayedBlogs.map((blog, index) => (
                        <div key={index}>
                            <MainBlogCard blog={blog} />
                        </div>
                    ))
                }
            </div>
            <div className="text-center mt-10">
                {data?.length > visibleBlogs && (
                    <button
                        onClick={handleLoadMore}
                        className="text-blue-390 text-center text-[20px] leading-[23px]"
                    >
                        Load More...
                    </button>
                )}
            </div>
        </section>
    )
}
