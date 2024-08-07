import React from 'react'
import Button from '../buttons/Button'
import { formatJobNameForURL } from '@/utils/formatJobNameForUrl';
import { PRODUCTION_BASE_URL } from '@/service/productionUrl';

export default function MainJobCards({ data }) {

  const handleApplyNow = (event) => {
    event.stopPropagation();
    const jobUrl = formatJobNameForURL(data.job_title);
    let url;
  
    if (data.is_permanent === '1') {
      url = `${PRODUCTION_BASE_URL}/apply-now/permanent/${jobUrl}/${data.jobdetails_id}`;
    } else {
      url = `${PRODUCTION_BASE_URL}/apply-now/locum/${jobUrl}/${data.jobdetails_id}`;
    }
  
    window.open(url, '_blank');
    window.scrollTo(0, 0);
  };
  return (
    <div className="w-[400px] drop-shadow-md rounded-md flex flex-col items-stretch justify-between p-6 bg-white dark:bg-opacity-10 cursor-pointer">
      <div className='flex items-center justify-between gap-x-5'>
        <h2 className="card-text-header">{data.job_title}</h2>
       
      </div>
      <div className="flex items-center justify-between mt-5">
          <h3 className="text-sm dark:text-green-100">Post Date: {data.commencement_date}</h3>
          <h3 className="text-white font-normal rounded-md bg-blue-400 px-[6px] text-sm">
          {data.job_id}
        </h3>
        </div>
      <div className="flex flex-col mt-3 card-text-items dark:text-blue-400">
        <div className="flex items-center my-[3px]">
          <div className="h-[30px] w-[30px] rounded-full bg-blue-50 flex items-center justify-center mr-2">
            <img
              src={`/blog/icons/CurrencyIcon.png`}
              alt="Salary Icon"
              className="w-[14.8px] h-[14.8px] object-contain"
            />
          </div>
          {data.billing_share && data.hourly_fee ? (
            <p className="line-clamp-1">{`${data.hourly_fee} or ${data.billing_share}`}</p>
          ) : (
            <p className="line-clamp-1">
              {data.hourly_fee || data.billing_share}
            </p>
          )}
        </div>
        <div className="flex items-center my-[3px]">
          <div className="h-[30px] w-[30px] rounded-full bg-blue-50 flex items-center justify-center mr-2">
            <img
              src={`/blog/icons/Location.png`}
              alt="Salary Icon"
              className="w-[14.8px] h-[15.3px] object-contain"
            />
          </div>
          <p>{`${data.suburb?.name}, ${data.state?.name}`}</p>
        </div>
        <div className="flex items-center my-[3px]">
          <div className="h-[30px] w-[30px] rounded-full bg-blue-50 flex items-center justify-center mr-2">
            <img
              src={`/blog/icons/clock.png`}
              alt="Salary Icon"
              className="w-[14.8px] h-[14.8px] object-contain "
            />
          </div>
          <p>{data.engagement_type?.name}</p>
        </div>
        <div className="flex items-center my-[3px]">
          <div className="h-[30px] w-[30px] rounded-full bg-blue-50 flex items-center justify-center mr-2">
            <img
              src={`/blog/icons/TypeIcon.png`}
              alt="Salary Icon"
              className="w-[13.34px] h-[12.13px] object-contain"
            />
          </div>
          <p>{data.is_permanent === '1' ? 'Permanent' : 'Locum'}</p>
        </div>
        <div className="flex items-center justify-end">
          <Button
            type="button"
            title="Apply Now"
            variant="apply-now"
           handleClick={handleApplyNow}
          />
        </div>
      </div>
    </div>
  )
}
