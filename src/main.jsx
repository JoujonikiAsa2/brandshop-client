import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './components/Layout/Root'
import {
  createBrowserRouter,
  RouterProvider,
 } from "react-router-dom";
 import "./index.css";
import ErrorPage from './components/ErrorPage/ErrorPage';
 const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    // children:[
    //   {
    //     path: '/',
    //     element:
    //   }
    // ]
  },
 ]);
 ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
 );
 
