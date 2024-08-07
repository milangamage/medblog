import { getBaseUrl } from '@/config/BaseUrl';

interface CommentResponse {
  message?: string;
  data?: true;
}

export default async function UserCommentApi(
  blog_sub_titles_id: number,
  comments: string,
  status: number,
  email: string,
  user_name: string,
): Promise<CommentResponse> {
  const baseUrl = getBaseUrl();
  const url = `${baseUrl}web/blogs-comment/save`;

  const requestBody = {
    blog_sub_titles_id,
    comments,
    status,
    email,
    user_name,
  };

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(requestBody),
  };

  try {
    const response = await fetch(url, requestOptions);

    if (!response.ok) {
      const responseData: CommentResponse = await response.json();
      if (response.status === 422 && responseData.errors?.length > 0) {
        throw new Error(responseData.errors[0]);
      } else {
        throw new Error(
          responseData.message || `Failed with status: ${response.status}`
        );
      }
    }

    const responseData: CommentResponse = await response.json();
    return responseData;
  } catch (error) {
    const errorMessage = error.message || 'Unknown error occurred';
    throw new Error(errorMessage);
  }
}
