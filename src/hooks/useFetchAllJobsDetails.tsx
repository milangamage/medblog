'use client'
import GetAllJobsApi from '@/app/api/GetAllJobsApi';
import { useEffect, useState } from 'react';

interface AllJobData {}

interface FetchAllJobData {
  allJobData: AllJobData[] | null;
  loading: boolean;
  error: Error | null;
}

export default function useFetchAllJobs(): FetchAllJobData {
  const [allJobData, setAllJobData] = useState<AllJobData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await GetAllJobsApi();
      const initialJobs = response?.data;
      setAllJobData(initialJobs);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { allJobData, loading, error };
}
