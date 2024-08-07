import GetAllBlogDivisionWiseApi from '@/app/api/GetAllBlogsDivisionWise';
import { SingleBlogData } from '@/types/FetchDataTypes';
import { useState, useEffect } from 'react';

interface FetchBlogs {
    divisionWiseBlogs: SingleBlogData | null;
    blogDivisionWiseLoading: boolean;
    error: Error | null;
}

export default function useFetchAllBlogsDivisionWise(divisionId: number | null): FetchBlogs {
    const [divisionWiseBlogs, setDivisionWiseBlogs] = useState<SingleBlogData | null>(null);
    const [blogDivisionWiseLoading, setBlogsDivisionWiseLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = async () => {
        if (divisionId === null || divisionId === undefined) {
            return;
        }

        setBlogsDivisionWiseLoading(true);
        try {
            const response = await GetAllBlogDivisionWiseApi(divisionId);
            setDivisionWiseBlogs(response);
        } catch (error) {
            setError(error as Error);
        } finally {
            setBlogsDivisionWiseLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [divisionId]);

    return { divisionWiseBlogs, blogDivisionWiseLoading, error };
}
