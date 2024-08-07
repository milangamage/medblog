import React from 'react';
import Skeleton from 'react-loading-skeleton';

const TocLoading: React.FC = () => {
  return (
    <div className='border-t-4 border-b-4 border-blue-400 bg-blue-50 dark:bg-opacity-10'>
      <div className='px-5'>
        <Skeleton width={150} height={18} className='mt-5 text-blue-250 dark:text-white' />
        <div className='border-b-2 border-gray-360'>
          <Skeleton height={1} />
        </div>
        <ul className='mt-3'>
          {[...Array(5)].map((_, index) => (
            <li key={index} className="my-3 text-[15px] leading-[20px]">
              <Skeleton width="80%" height={20} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TocLoading;
