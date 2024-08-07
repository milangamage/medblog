'use client';

import { useState, useEffect } from 'react';
import Banner from "@/components/banner/Banner";
import BlogCategoryHighlights from "./components/home/blogs/BlogCategoryHighlights";
import Editors from "./components/home/editor/Editors";
import HeroComponent from "./components/home/hero/Hero";
import TrendingNews from "./components/home/trendingNews/TrendingNews";
import AustraliaBlog from "./components/home/australia/AustraliaBlog";
import NewZealandBlogs from "./components/home/newzealand/NewZealandBlogs";
import LatestJobs from "@/components/jobSection/LatestJobs";
import RegisterBanner from "@/components/banner/RegisterBanner";
import useFetchAllBlogDetails from "@/hooks/useFetchAllBlogDetails";
import categorizeBlogs from "@/utils/categorizeBlogs";
import { CATEGORY_IDS } from "@/constants/siteContstantsDetails";
import useFetchAllJobs from '@/hooks/useFetchAllJobsDetails';

export default function HomePage() {
  const { blogData, blogDataLoading } = useFetchAllBlogDetails();
  const { allJobData, loading } = useFetchAllJobs();
  const [selectedLabel, setSelectedLabel] = useState(null);

  const categorizedBlogs = blogData ? categorizeBlogs(blogData) : {
    [CATEGORY_IDS.HOME_PAGE_TRENDING_NEWS]: [],
    [CATEGORY_IDS.HOME_PAGE_EDITOR_PICK]: [],
    [CATEGORY_IDS.HOME_PAGE_NEWZEALAND]: [],
    [CATEGORY_IDS.HOME_PAGE_AUSTRALIA]: [],
    LABELS: [],
  };

  const filterBlogsByLabel = (blogs, labelId) => {
    if (!labelId) return blogs;
    return blogs.filter(blog =>
      blog.blogTags?.some(tag => tag.site_tags.site_tags_id === labelId)
    );
  };

  useEffect(() => {
    if (categorizedBlogs.LABELS.length > 0 && !selectedLabel) {
      setSelectedLabel(categorizedBlogs.LABELS[0].site_tags_id);
    }
  }, [categorizedBlogs.LABELS]);

  const handleLabelClick = (labelId) => {
    setSelectedLabel(labelId);
  };

  const filteredBlog = filterBlogsByLabel(blogData, selectedLabel);


  return (
    <main>
        <HeroComponent />
        <div className="max-width-container">
          <div className="main-width-container">
            <TrendingNews blogs={categorizedBlogs[CATEGORY_IDS.HOME_PAGE_TRENDING_NEWS]} loading={blogDataLoading} />
            <BlogCategoryHighlights
              labels={categorizedBlogs.LABELS}
              onLabelClick={handleLabelClick}
              selectedLabel={selectedLabel}
              loading={blogDataLoading}
              filteredBlog={filteredBlog}
            />
            <Editors blogs={categorizedBlogs[CATEGORY_IDS.HOME_PAGE_EDITOR_PICK]} loading={blogDataLoading} />
            <Banner />
            <div className="flex items-start justify-between">
              <div className="w-[951px]">
                <AustraliaBlog blogs={categorizedBlogs[CATEGORY_IDS.HOME_PAGE_AUSTRALIA]} loading={blogDataLoading} />
                <NewZealandBlogs blogs={categorizedBlogs[CATEGORY_IDS.HOME_PAGE_NEWZEALAND]} loading={blogDataLoading} />
              </div>
              <div>
                <LatestJobs jobData={allJobData} loading={loading} />
              </div>
            </div>
            <RegisterBanner />
          </div>
        </div>
    </main>
  );
}
