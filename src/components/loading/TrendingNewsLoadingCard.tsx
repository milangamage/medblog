import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function TrendingNewsCardSkeleton() {
  return (
    <div className='w-[625px] h-[193px]  flex items-center justify-normal gap-x-5 cursor-pointer dark:bg-white dark:bg-opacity-10 shadow-lg'>
      <div className='min-w-[202px] h-[193px] relative'>
        <Skeleton height="100%" width="100%" />
      </div>
      <div>
        <div className='bg-blue-200 rounded-[3px] w-[62px] px-2 py-1 text-gray-450 dark:text-purple-100 text-xs'>
          <Skeleton width="100%" />
        </div>
        <p className='font-sans font-normal text-[25px] leading-[35px] text-blue-950 dark:text-pink-100'>
          <Skeleton width="80%" />
        </p>
        <div className='flex items-center gap-x-4 my-2'>
          <div className='flex items-center gap-x-2'>
            <Skeleton circle={true} height={18} width={18} />
            <span className='text-gray-400 text-sm dark:text-green-100'>
              <Skeleton width="60px" />
            </span>
          </div>
          <div className='border-l border-gray-300 h-6'></div>
          <div className='flex items-center gap-x-2'>
            <Skeleton circle={true} height={18} width={18} />
            <span className='text-gray-400 text-sm dark:text-green-100'>
              <Skeleton width="60px" />
            </span>
          </div>
          <div className='border-l border-gray-300 h-6'></div>
          <div className='flex items-center gap-x-2'>
            <Skeleton circle={true} height={18} width={18} />
            <span className='text-gray-400 text-sm dark:text-green-100'>
              <Skeleton width="60px" />
            </span>
          </div>
        </div>
        <p className="font-sans font-normal text-[15px] leading-[23px] text-gray-450 dark:text-white">
          <Skeleton count={3} />
        </p>
      </div>
    </div>
  );
}
