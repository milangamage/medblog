import Skeleton from 'react-loading-skeleton';

const ContentSkeleton = () => (
  <div className='p-4 w-[800px]'>
    <Skeleton count={10} height={20} />
  </div>
);

export default ContentSkeleton;