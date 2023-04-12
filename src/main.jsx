import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home';
import ErrorPage from './Components/ErrorPage';
import Statistics from './Components/Statistics';
import AppliedJobs from './Components/AppliedJobs';
import Blog from './Components/Blog';
import { getJobData } from './loaders/getJobData';
import { getCategoryData } from './loaders/getCategoryData';
import JobDetails from './Components/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement :  <ErrorPage></ErrorPage>,
    loader: getJobData,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: getCategoryData
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/applied",
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/details/:id",
        element: <JobDetails></JobDetails>,
        loader: getCategoryData
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={router} />

)
