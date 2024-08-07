import { getBaseUrl } from '@/config/BaseUrl';
import { CURRENT_PAGE, PER_PAGE } from '@/constants/GlobalConstant';

export default async function GetAllJobsApi() {
  let res: string = '';
  try {
    const baseUrl = getBaseUrl();
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
    };
    await fetch(
      `${baseUrl}web/job/getAll?per_page=${PER_PAGE}&page=${CURRENT_PAGE}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((response) => {
        res = response;
      })
      .catch((error) => {
        console.error('Error getting all Jobs: ', error);
        res = error;
      });
  } catch (error) {
    console.error(error);
  }

  return res;
}
