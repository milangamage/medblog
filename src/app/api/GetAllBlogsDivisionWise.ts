import { getBaseUrl } from "@/config/BaseUrl";
import { SingleBlogData } from "@/types/FetchDataTypes";


export default async function GetAllBlogDivisionWiseApi(divisionId: number): Promise<SingleBlogData> {
  const baseUrl = getBaseUrl();
  try {
    const response = await fetch(`${baseUrl}web/blogs/division/${divisionId}`);
    if (!response.ok) {
      const error = new Error(`Error ${response.status}: ${response.statusText}`);
      throw error;
    }
    return response.json();
  } catch (error) {
    console.error('Failed to fetch blog details:', error);
    throw error;
  }
}
