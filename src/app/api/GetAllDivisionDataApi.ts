import { getBaseUrl } from '@/config/BaseUrl';

export default async function GetAllDivisionDataApi() {
  const baseUrl = getBaseUrl();
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
  };

  const response = await fetch(`${baseUrl}web/getAllMenu`, requestOptions);
  const responseData = await response.json();

  if (!response.ok) {
    throw { status: response.status, data: responseData };
  }

  return responseData;
}
