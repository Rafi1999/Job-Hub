import React from 'react';
import { LineChart, Line, PieChart, Pie, ResponsiveContainer, Tooltip } from 'recharts';
const data01 = [
    {
      "name": "Assignment-1",
      "value": 60
    },
    {
      "name": "Assignment-2",
      "value": 60
    },
    {
      "name": "Assignment-3",
      "value": 60
    },
    {
      "name": "Assignment-4",
      "value": 60
    },
    {
      "name": "Assignment-5",
      "value": 58
    },
    {
      "name": "Assignment-6",
      "value": 60
    },
    {
      "name": "Assignment-7",
      "value": 60
    },
    {
      "name": "Assignment-8",
      "value": 60
    },
    
  ];
  const EXAMPLE_DATA = [
    {
      name: 'example1',
      value: 23.4,
    },
    {
      name: 'example2',
      value: 76.6,
    },
  ];
const Statistics = () => {
    return (
        <div className='my-12'>
            <h3 className='font-medium underline text-3xl text-center mb-20 font-serif  pt-3  pb-3 banner'>Statistics</h3>
            <ResponsiveContainer width="100%" height={200} className='mt-10'>
<PieChart  margin={{ top: 30, right: 30, left: 0, bottom: 20 }}>
  <Pie  data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius="100%" fill="#8884d8" label startAngle={90} endAngle={-360}/>
  <Tooltip ></Tooltip>
</PieChart>

</ResponsiveContainer>
<p className='text-center underline text-xl font-serif font-medium text-cyan-600'>Fig: Pie-Chart of Assignment Marks</p>
        </div>
    );
};

export default Statistics;