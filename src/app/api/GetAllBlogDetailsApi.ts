import { getBaseUrl } from "@/config/BaseUrl";

export default async function GetBlogDetails() {
  const baseUrl = getBaseUrl();
  try {
    const response = await fetch(`${baseUrl}web/blogs/get-all`);
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