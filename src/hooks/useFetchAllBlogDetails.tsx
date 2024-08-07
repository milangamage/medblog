'use client'
import GetBlogDetails from '@/app/api/GetAllBlogDetailsApi';
import { useEffect, useState } from 'react';

interface BlogDetails {}

interface FetchAllBlogData {
  blogData: BlogDetails[] | null;
  blogDataLoading: boolean;
  error: Error | null;
}

export default function useFetchAllBlogDetails(): FetchAllBlogData {
  const [blogData, setAllBlogData] = useState<BlogDetails[] | null>(null);
  const [blogDataLoading, setBlogDataLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    setBlogDataLoading(true);
    try {
      const response = await GetBlogDetails();
      setAllBlogData(response);
    } catch (error) {
      setError(error as Error);
    } finally {
      setBlogDataLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { blogData, blogDataLoading, error };
}
