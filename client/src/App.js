import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import DevControls from "./components/DevControls";
import User from './components/User';
import Test from './components/Test';
import {Routes, Route} from 'react-router-dom';

const App = () => {
  
  return (
    <>
    <Navbar />
    <Routes> 
      <Route path='/' element={<Home />}/>
      <Route path='/devcontrols' element={<DevControls />}/>
      <Route path='/user' element={<User firstname={'John'} lastname={'Smith'} isTeacher={'true'}/>}/>
      <Route path='/Test' element={<Test/>}/>
    </Routes>
    </>
    );
}


export default App;
