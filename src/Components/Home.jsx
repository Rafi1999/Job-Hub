import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CategoryData from './CategoryData';
import { DataContext } from '../App';
import AppliedJobs from './AppliedJobs';
import Jobs from './Jobs';

const Home = () => {
    const jobData = useContext(DataContext)
    const [current,setCurrent] = useState(jobData.slice(0,4))
    const showAll = (bool) =>{
        if(bool) {setCurrent(jobData)}}
        
    const categories = useLoaderData();
    return (
        <section>
            <div className='flex mt-1 md:mt-10 md:gap-5 items-center'>
                <div className='w-6/12 md:space-y-4'>
            <h2 className='text-2xl md:text-7xl font-semibold '>One Step <br /> Closer To Your <br /><span className='text-sky-500'>Dream Job</span> </h2>
            <p className='py-2 text-slate-600'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
            <Link to='/'><button className='text-xl font-medium bg-sky-300 
            py-1 md:py-4 px-7 rounded-lg hover:bg-sky-500 text-white mt-2'>Get Started</button> </Link>               </div>
                <img src="https://i.postimg.cc/y8CswfNp/P3-OLGJ1-copy-1.png" className='w-6/12' alt="" />
            </div>
            <div className='text-center my-10'>
                <h4 className='text-2xl md:text-4xl font-semibold mb-2'>Job Category List</h4>
                <p className='text-slate-600'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='grid md:flex justify-center md:justify-around md:mt-6'>{
            categories.map((category,index)=><CategoryData key={index} category={category}></CategoryData>)
                }</div>
            </div>
            <div className='text-center my-10'>
            <h4 className='text-2xl md:text-4xl font-semibold mb-2'>Featured Jobs</h4>
                <p className='text-slate-600'>Explore thousands of job opportunities with all the information you need. Its your future</p>  <div className='grid grid-cols-1 md:grid-cols-2  mt-8 mb-5 mx-5 md:mx-32 gap-5 '>
                    {
                        current.map(jobs=><Jobs key={jobs.id} jobs={jobs}></Jobs>)
                    }
                </div>
                <button onClick={()=>showAll(true)} className={current.length ==4 ?'text-xl font-medium bg-sky-300 py-1 md:py-3 px-4 rounded-lg hover:bg-sky-500 text-white ': 'hidden'}>Show All Jobs</button>
            </div>
        </section>
    );
};

export default Home;