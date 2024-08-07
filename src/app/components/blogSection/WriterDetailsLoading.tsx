import React from 'react';
import Skeleton from 'react-loading-skeleton';

const WriterDetailsLoading = () => (
  <div className='flex items-center gap-x-4 my-2'>
    <div className='flex items-center gap-x-2'>
      <Skeleton width={18} height={18} />
      <Skeleton width={100} height={20} />
    </div>
    <div className='border-l border-gray-300 h-6'></div>
    <div className='flex items-center gap-x-2'>
      <Skeleton width={120} height={20} />
    </div>
    <div className='border-l border-gray-300 h-6'></div>
    <div className='flex items-center gap-x-2'>
      <Skeleton width={60} height={20} />
    </div>
  </div>
);

export default WriterDetailsLoading;
