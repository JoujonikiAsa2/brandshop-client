import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './components/Layout/Root'
import {
  createBrowserRouter,
  RouterProvider,
 } from "react-router-dom";
 import "./index.css";
import ErrorPage from './components/ErrorPage/ErrorPage';
import HomePage from './Pages/Home/HomePage';
import Products from './Pages/Products/Products';
import AddProducts from './Pages/AddProducts/AddProducts';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
 const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <HomePage></HomePage>
      },
      {
        path: '/signIn',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <Registration></Registration>
      },
      {
        path: '/addProduct',
        element: <AddProducts></AddProducts>
      },
      {
        path: '/products',
        element: <Products></Products>
      },
    ]
  },
 ]);
 ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
 );
 
