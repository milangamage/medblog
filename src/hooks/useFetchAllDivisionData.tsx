'use client'
import GetAllDivisionDataApi from '@/app/api/GetAllDivisionDataApi';
import { useEffect, useState } from 'react';

interface DivisionDetails { }

interface FetchAllDivisionData {
  divisionData: DivisionDetails[] | null;
  divisionDataLoading: boolean;
  error: Error | null;
}

export default function useFetchAllDivisionData(): FetchAllDivisionData {
  const [divisionData, setAllDivisionData] = useState<DivisionDetails[] | null>(null);
  const [divisionDataLoading, setDivisionDataLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    setDivisionDataLoading(true);
    try {
      const response = await GetAllDivisionDataApi();
      setAllDivisionData(response);
    } catch (error) {
      setError(error as Error);
    } finally {
      setDivisionDataLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { divisionData, divisionDataLoading, error };
}
