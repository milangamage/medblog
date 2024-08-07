'use client'
import BlogSectionDivisionWise from '@/app/components/categorySection/BlogSectionDivisionWise'
import DiscoverBlogTopics from '@/app/components/categorySection/DiscoverBlogTopics'
import Banner from '@/components/banner/Banner'
import PopularBlogCard from '@/components/blogs/PopularBlogCard'
import ScrollJobSection from '@/components/jobSection/ScrollJobSection'
import { useDivisionContext } from '@/context/ContextProvider'
import useFetchAllBlogsDivisionWise from '@/hooks/useFetchAllBlogsDivisionWise'
import useFetchAllJobs from '@/hooks/useFetchAllJobsDetails'
import { formatURLNameToNormal } from '@/utils/formatNameForNomal'
import React, { useEffect, useState } from 'react'

export default function CategoryDyanamicPage() {
  const [divisionName, setDivisionName] = useState<string>('');
  const { allJobData, loading } = useFetchAllJobs();
  const { divisionData } = useDivisionContext();

  function getDivisionIdByName(divisionName: string) {
    const division = divisionData?.find((div: { name: string }) => div.name === formatURLNameToNormal(divisionName));
    return division ? division.divisions_id : null;
  }
  const divisionId = getDivisionIdByName(divisionName);

  const { divisionWiseBlogs, blogDivisionWiseLoading } = useFetchAllBlogsDivisionWise(divisionId);

  useEffect(() => {
    const currentUrl = window.location.pathname;
    const segments = currentUrl.split('/').filter(Boolean);
    const categoryIndex = segments.indexOf('category');
    const division = categoryIndex !== -1 ? segments[categoryIndex + 1] : null;

    setDivisionName(division || null);
  }, []);

  const divisionDesc = divisionWiseBlogs?.[0]?.mainBlogDetails?.[0]?.division_desc || '';
  


  return (
    <div className='max-width-container'>
      <div className="main-width-container ">
        <div className='mt-24 flex items-center justify-between gap-10'>
          <div>
            <h1 className="font-sans font-normal text-[60px] leading-[84px] text-blue-600 dark:text-white">{formatURLNameToNormal(divisionName)}</h1>
            <p className='mb-5'>{divisionWiseBlogs?.length} posts</p>
            <p>{divisionDesc}</p>
          </div>
          <div>
            <DiscoverBlogTopics data={divisionData} />
          </div>
        </div>
        <div className='padding-container flex items-start justify-between gap-10'>
          <div>
            <PopularBlogCard />
          </div>
          <div>
            <ScrollJobSection jobData={allJobData} loading={loading} />
          </div>
        </div>
        <div>
          <BlogSectionDivisionWise data={divisionWiseBlogs} loading={blogDivisionWiseLoading}/>
        </div>
        <Banner />
      </div>
    </div>
  )
}
