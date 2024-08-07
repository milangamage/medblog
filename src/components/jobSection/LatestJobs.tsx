import React from 'react';
import MainJobCards from '../jobCards/MainJobCards';
import MainJobCardLoading from '../loading/MainJobCardLoading';


export default function LatestJobs({ jobData, loading }) {
  return (
    <div className='text-black padding-container'>
      <h5 className="font-semibold text-[20px] text-blue-600 dark:text-white mb-14">Latest Jobs</h5>
      {loading ? (
        Array.from({ length: 5 }).map((_, index) => (
          <div key={index}>
            <MainJobCardLoading />
            {index < 4 && <hr className="my-6 border-black" />}
          </div>
        ))
      ) : (
        jobData?.slice(0, 5).map((job, index) => (
          <div key={job.jobdetails_id}>
            <MainJobCards data={job} />
            {index < jobData?.slice(0, 5).length - 1 && <hr className="my-6 border-black" />}
          </div>
        ))
      )}
    </div>
  );
}
