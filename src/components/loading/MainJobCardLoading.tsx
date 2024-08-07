import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function MainJobCardLoading() {
  return (
    <div className="w-[400px] drop-shadow-xl rounded-md flex flex-col items-stretch justify-between p-6 bg-white dark:bg-opacity-10 border border-white">
      <div className='flex items-center justify-between gap-x-5'>
        <Skeleton width={200} height={24} />
      </div>
      <div className="flex items-center justify-between mt-5">
        <Skeleton width={100} height={18} />
        <Skeleton width={50} height={18} />
      </div>
      <div className="flex flex-col mt-3">
        <div className="flex items-center my-[6px]">
          <Skeleton width={30} height={30} circle={true} />
          <Skeleton width={100} height={18} />
        </div>
        <div className="flex items-center my-[6px]">
          <Skeleton width={30} height={30} circle={true} />
          <Skeleton width={100} height={18} />
        </div>
        <div className="flex items-center my-[6px]">
          <Skeleton width={30} height={30} circle={true} />
          <Skeleton width={100} height={18} />
        </div>
        <div className="flex items-center my-[6px]">
          <Skeleton width={30} height={30} circle={true} />
          <Skeleton width={100} height={18} />
        </div>
        <div className="flex items-center justify-end">
          <Skeleton width={100} height={36} />
        </div>
      </div>
    </div>
  );
}
