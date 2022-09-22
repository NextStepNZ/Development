import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddUser from "./components/AddUser";
import User from './components/User';
import Test from './components/Test';
import SignIn from "./components/Login/SignIn";
import Register from "./components/Login/Register"

import {Routes, Route} from 'react-router-dom';

const App = () => {
  
  return (
    <>
    <Navbar />
    <Routes> 
      <Route path='/' element={<Home />}/>
      <Route path='/adduser' element={<AddUser />}/>
      <Route path='/user' element={<User firstname={'John'} lastname={'Smith'} isTeacher={'true'}/>}/>
      <Route path='/Test' element={<Test/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    </>
    );
}


export default App;
