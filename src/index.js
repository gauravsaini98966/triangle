import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout';
import Services from './Components/ServicesNavbar';
import Portfolio_Navbar from './Components/Portfolio_Navbar';

import Contect_Navbar from './Components/Contect_Navbar';
import About from './Components/About';
import Blogs_Navbar from './Components/Blogs_Navbar';


import Home from './Components/Home';
const router =createBrowserRouter(
  createRoutesFromElements(
 
    <Route path='/' element={<Layout/>}>
       <Route path='' element={<Home/>}/>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/Blogs_Navbar' element={<Blogs_Navbar/>}/>
   
    <Route path='/About' element={<About/>}/>
    <Route path='/ServicesNavbar' element={<Services/>}/>
    <Route path='/Portfolio_Navbar' element={<Portfolio_Navbar/>}/>

    <Route path='/Contect_Navbar' element={<Contect_Navbar/>}/>

   
    
    </Route>
  
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
