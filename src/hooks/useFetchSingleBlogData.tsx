import GetSingleBlogDetailsApi from '@/app/api/GetSingleBlogApi';
import { SingleBlogData } from '@/types/FetchDataTypes';
import { useState, useEffect } from 'react';

interface FetchSingleBlog {
  singleBlog: SingleBlogData | null;
  singleBlogLoading: boolean;
  error: Error | null;
}

export default function useFetchSingleBlogDetails(blogId: number | null): FetchSingleBlog {
  const [singleBlog, setSingleBlog] = useState<SingleBlogData | null>(null);
  const [singleBlogLoading, setSingleBlogLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    if (blogId === null || blogId === undefined) {
      return;
    }

    setSingleBlogLoading(true);
    try {
      const response = await GetSingleBlogDetailsApi(blogId);
      setSingleBlog(response[0]);
    } catch (error) {
      setError(error as Error);
    } finally {
      setSingleBlogLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [blogId]);

  return { singleBlog, singleBlogLoading, error };
}
