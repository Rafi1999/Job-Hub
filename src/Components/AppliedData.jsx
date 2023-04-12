import React from 'react';
import { Link } from 'react-router-dom';

const AppliedData = ({job}) => {
    const {company_logo,job_title,company_name,work_from,job_type,salary,location} = job
    return (
        <div className='border rounded-md my-5'>
        <div className='flex py-4 px-4 h-44 gap-5 justify-between'>
        <div className='flex gap-5'>
        <img className='w-5/12 ' src={company_logo} />
        <div className='grid items-center text-lg'>
                <h3>{job_title}</h3>
                <p>{company_name}</p>
                <div className='flex gap-3'>
            <p className='border px-2 rounded-md border-cyan-500'>{job_type}</p>
            <p className='border px-2 rounded-md border-cyan-500'>{work_from}</p>
            </div>
            <div className='md:flex justify-between gap-3 items-center my-1'>
                <div className='flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>
<p>{location}</p>
</div>          <div className='flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
<p>Salary: {salary}</p></div>
            </div>
            </div>
        </div>
        <div className='flex justify-between'>
            
            <div className='grid items-center'><Link to={`/details/${job.id}`}><button className='font-medium bg-sky-300 py-2 px-4 rounded-md hover:bg-sky-500 text-white'>View Details</button></Link></div>
        </div>
            
        </div>
        </div>
    );
};

export default AppliedData;