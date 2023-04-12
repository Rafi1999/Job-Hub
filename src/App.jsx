import React, { createContext } from 'react';
import Header from './Components/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import { data } from 'autoprefixer';
import { ToastContainer } from 'react-toastify';

export const DataContext = createContext([])

const App = () => {
  const jobData= useLoaderData();
 
  return (
    <DataContext.Provider value={jobData}>
      <div className='mx-3 md:mx-16'>
      <Header></Header>
      <Outlet></Outlet>
    <ToastContainer />
      </div>
    </DataContext.Provider>
  );
};

export default App;