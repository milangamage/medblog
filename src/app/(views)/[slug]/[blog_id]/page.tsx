'use client'
import { useEffect, useState, useRef } from 'react';
import { SHARE_SOCIAL_MEDIA } from '@/constants/siteContstantsDetails';
import useFetchSingleBlogDetails from '@/hooks/useFetchSingleBlogData';
import DOMPurify from 'dompurify';
import useFetchAllJobs from '@/hooks/useFetchAllJobsDetails';
import LatestJobs from '@/components/jobSection/LatestJobs';
import LeaveCommentForm from '@/app/components/comment/LeaveCommentForm';
import Skeleton from 'react-loading-skeleton';
import WriterDetailsLoading from '@/app/components/blogSection/WriterDetailsLoading';
import ContentSkeleton from '@/app/components/blogSection/contentSklton';
import TocLoading from '@/app/components/blogSection/TocLoading';
import DropDownSection from '@/components/dropdown/DropDownSection';

export default function DynamicSingleBlog() {
  const [blogId, setBlogId] = useState<number | null>(null);
  const { singleBlog, singleBlogLoading } = useFetchSingleBlogDetails(blogId);
  const { allJobData, loading } = useFetchAllJobs();
  const [toc, setToc] = useState<{ id: string; title: string }[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);
  const sanitizedDescription = DOMPurify.sanitize(singleBlog?.blogDetails[0]?.blog_description || '');

  useEffect(() => {
    const currentUrl = window.location.pathname;
    const segments = currentUrl.split('/').filter(Boolean);
    const idSegment = segments.pop(); 

    const numericId = idSegment ? parseInt(idSegment) : null;

    setBlogId(numericId);
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      const headings = contentRef.current.querySelectorAll('h2');
      const newToc = Array.from(headings).map((heading, index) => {
        const id = `${index + 1}`;
        heading.id = id;
        return {
          id,
          title: heading.textContent || '',
        };
      });
      setToc(newToc);
    }
  }, [singleBlog]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const generateBlogUrl = () => {
    const origin = window.location.origin;
    const path = window.location.pathname;
    return `${origin}${path}`;
  };

  const blogUrl = generateBlogUrl();

  const shareBlog = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className='max-width-container'>
      <div className="main-width-container padding-container">
        <div>
          <div className='w-1/4'>
            {singleBlogLoading ? (
              <Skeleton className="text-blue-400 text-base font-sans" />
            ) : (
              <h2 className="text-blue-400 text-base font-sans">{singleBlog?.mainBlogDetails[0]?.division_name}</h2>
            )}
          </div>
          <div className='flex items-center justify-between'>
            <div className='w-[885px]'>
              {singleBlogLoading ? (
                <Skeleton className="text-blue-850 text-base font-sans dark:text-white" />
              ) : (
                <h1 className='text-blue-850 font-sans font-bold text-[42px] leading-[58px] dark:text-white'>{singleBlog?.blogDetails[0]?.blog_title}</h1>
              )}
            </div>
            <div>
              <p className='text-end font-bold'>Share this article</p>
              <div className="flex items-center gap-x-1 mt-5">
                {SHARE_SOCIAL_MEDIA.map((socialMedia, index) =>
                  socialMedia.links.map((link, linkIndex) => (
                    <div
                      key={linkIndex}
                      className="social-icon w-11 h-11 rounded-full bg-white dark:bg-opacity-10 flex items-center justify-center cursor-pointer"
                      onClick={() => shareBlog(`${link.url}${encodeURIComponent(blogUrl)}`)}
                    >
                      <img src={link.icon} alt="socialIcon" className="w-7 h-7" />
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
        <div className='flex items-start justify-between gap-x-16 mt-10'>
          <div className=''>
            {singleBlogLoading ? (
              <WriterDetailsLoading />
            ) : (
              <>
                <div className='flex items-center gap-x-4 my-2'>
                  <div className='flex items-center gap-x-2'>
                    <img src="/blog/icons/Poster.png" alt="Bookmark" className='w-[18px] h-[18px]' />
                    <span className='text-gray-400 text-sm dark:text-green-100'>{singleBlog?.content_writer}</span>
                  </div>
                  <div className='border-l border-gray-300 h-6'></div>
                  <div className='flex items-center gap-x-2'>
                    <span className='text-gray-400 text-sm dark:text-green-100'>{singleBlog?.published_date}</span>
                  </div>
                  <div className='border-l border-gray-300 h-6'></div>
                  <div className='flex items-center gap-x-2'>
                    <span className='text-gray-400 text-sm dark:text-green-100'>{singleBlog?.blogHistory[0]?.minutes} min. to read</span>
                  </div>
                </div>
              </>
            )}
            {singleBlogLoading ? (
              <ContentSkeleton />
            ) : (
              <div ref={contentRef} dangerouslySetInnerHTML={{ __html: sanitizedDescription }} />
            )}
          </div>
          <div>
            {
              singleBlogLoading ? (
                <>
                  <TocLoading />
                </>
                ) : (
                <>
                  <div className='border-t-4 border-b-4 border-blue-400 bg-blue-50 dark:bg-opacity-10'>
                    <div className='px-5'>
                      <p className='text-[20px] font-bold mt-5 leading-[28px] text-blue-250 dark:text-white'>Table of contents</p>
                      <hr className='border-b-2 border-gray-360 mt-5' />
                      <ul>
                        {toc.map(({ id, title }) => (
                          <li
                            key={id}
                            onClick={() => scrollToSection(id)}
                            className="cursor-pointer text-blue-250 dark:text-blue-400 my-3 text-[15px] leading-[20px]"
                          >
                            {title}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>)
            }
            <div className='mt-32'>
              <p className='text-[20px] font-bold leading-[28px] text-blue-250 dark:text-white'>Similar Topics</p>
              <hr className='border-b-2 border-gray-360 mt-5' />
            </div>
            <div>
              <LatestJobs jobData={allJobData} loading={loading} />
            </div>
          </div>
        </div>
        <div className='my-10 flex items-center justify-center'>
          <LeaveCommentForm blogId={blogId} />
        </div>
        <div>
          <DropDownSection/>
        </div>
      </div>
    </div>
  );
}
