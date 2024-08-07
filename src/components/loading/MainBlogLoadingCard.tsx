import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function MainBlogCardLoading() {
  return (
    <div className="mb-20">
      <div className='w-[290px] h-[368px] border-[0.5px] flex flex-col items-center justify-normal gap-x-5 shadow-lg cursor-pointer'>
        <div className='min-w-[290px] h-[205px] relative'>
          <Skeleton height={205} />
        </div>
        <div className='p-2'>
          <Skeleton width={62} height={20} />
          <Skeleton width="100%" height={35} />
          <div className='flex items-center gap-x-4 my-2'>
            <Skeleton width={18} height={18} />
            <Skeleton width={50} height={18} />
            <Skeleton width={18} height={18} />
            <Skeleton width={50} height={18} />
            <Skeleton width={18} height={18} />
            <Skeleton width={50} height={18} />
          </div>
          <Skeleton width="100%" height={23} count={2} />
        </div>
      </div>
    </div>
  );
}
