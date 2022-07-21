import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom"
import "../styles/App.css"
import About from "../pages/About"
import Posts from "../pages/Posts";
import Navbar from './UI/navbar/Navbar';
import Error from './../pages/Error';

function App() {
  return (
    <BrowserRouter>     
    <Navbar/> 
      <Routes>
          <Route path="/about" element={<About/>}/> 
          <Route path="/posts" element={<Posts/>}/>
          <Route path='/error' element={<Navigate to={<Error/>} replace/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export {App};
