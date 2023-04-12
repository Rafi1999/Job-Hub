import React, { useEffect, useState } from 'react';
import AppliedData from './AppliedData';
import './banner.css'
const AppliedJobs = () => {
    const [jobs,setJobs] = useState([]);
    useEffect(()=>{
        const getJob = JSON.parse(localStorage.getItem("applied"));
        setJobs(getJob)
    },[])
    
    const [state,setState] = useState([jobs]);
    console.log(jobs);
    let flag=1;
    const handleRemote=()=>{
        const getJob = JSON.parse(localStorage.getItem("applied"));
        let remote=getJob.filter(job=>job.work_from=='Remote');
        setJobs(remote)
    }
    const handleOnSite=()=>{
        const getJob = JSON.parse(localStorage.getItem("applied"));
        let onSite=getJob.filter(job=>job.work_from=='Onsite');
        setJobs(onSite)
    }
 
    return (
        <div className='my-12'>
            <h3 className='font-medium underline text-3xl text-center mb-20 font-  pt-3  pb-3 banner'>Applied Jobs {jobs?.length} </h3>

            
            <div className='flex gap-4 justify-end mt-10'>
        <button onClick={handleRemote} className={flag==1?'text-xl font-medium bg-sky-300 py-1 md:py-1 px-4 rounded-lg hover:bg-sky-500 text-white ':'hidden'}>Remote</button>
        <button onClick={handleOnSite} className={flag==1?'text-xl font-medium bg-sky-300 py-1 md:py-1 px-4 rounded-lg hover:bg-sky-500 text-white ':'hidden'}>OnSite</button>
        </div>
            {
                jobs?.map((job) =><AppliedData key={job.id} job={job}></AppliedData>)
            }
        </div>
    );
};

export default AppliedJobs;