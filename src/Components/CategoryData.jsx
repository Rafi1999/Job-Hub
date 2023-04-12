import React from 'react';

const CategoryData = ({category}) => {
    return (
        <div className='bg-slate-100 text-left w-72 px-6 py-8'>
            <img className='mt-6 bg-slate-200 p-2' src={category.logo} alt="" />
            <h4 className='font-semibold text-xl mt-3'>{category.name}</h4>
            <p>{category.jobs_available} Jobs Available</p>
        </div>
    );
};

export default CategoryData;