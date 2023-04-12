import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BeakerIcon,Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
const Header = () => {
    const [open,setOpen] = useState(false);
    return (
        <div>
        <div onClick={()=>setOpen(!open)} className='md:hidden'>
            <span>{open==true?<XMarkIcon className="h-6 w-6 text-blue-500" />:<Bars3Icon className="h-6 w-6 text-blue-500" />}</span>
            </div>
        <div className={`relative md:static sm:grid-flow-row md:flex justify-between items-center mt-4 gap-4 ${open?'left-0':'-top-48'}`}>
            <h3 className='md:text-5xl font-serif font-bold text-indigo-400 '>JobHub</h3>
            
            <div className='grid md:flex md:justify-between items-center'>
                <Link to='/' className='hover:text-sky-400 sm:mr-2'>Home</Link>
                <Link to='/statistics' className='hover:text-sky-400 sm:mr-2'>Statistics</Link>
                <Link to='/applied' className='hover:text-sky-400 sm:mr-2'>Applied-Jobs</Link>
                <Link to='/blog' className='hover:text-sky-400 sm:mr-2'>Blog</Link>
            </div>
            <Link to='/'><button className='md:text-xl font-medium bg-sky-300 md:py-4 px-7 rounded-lg hover:bg-sky-500 text-white'>Start Applying</button></Link>
        </div>
        </div>
    );
};

export default Header;