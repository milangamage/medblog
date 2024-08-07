import React from 'react';
import MainJobCards from '../jobCards/MainJobCards';
import MainJobCardLoading from '../loading/MainJobCardLoading';


export default function ScrollJobSection({ jobData, loading }) {
    return (
        <div className='text-black padding-container bg-white dark:bg-opacity-10 border border-white rounded-md shadow-2xl p-6'>
            <h5 className="font-semibold ms-5 text-blue-600 dark:text-white text-[24px] leading-[34px] mb-5">Latest Jobs</h5>
            <div className='h-[685px] overflow-y-auto px-4'>
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
        </div>
    );
}
