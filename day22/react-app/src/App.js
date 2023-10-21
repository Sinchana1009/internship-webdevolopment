import React from "react";

import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Navbar from  "./Components/Navbar";
import Login from "./Pages/Login";
import Signin from "./Pages/Signin";
import {BrowserRouter,Routes,Route} from "react-router-dom"
const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route element ={<About/>} path="/About"/>
    <Route element ={<Contact/>} path="/Contact"/>
    <Route element ={<Home/>} path="/Home"/>
    <Route element ={<Signin/>} path="/Signin"/>
    <Route element ={<Login/>} path="/Login"/>
    </Routes>
    </BrowserRouter>
   </>
      );
};

export default App;