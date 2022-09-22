import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddUser from "./components/AddUser";
import User from './components/User';
import TestPage from "./components/TestPage";
import TestOne from "./components/Test1";
import TestTwo from "./components/Test2";
import TestThree from "./components/Test3";
import {Routes, Route} from 'react-router-dom';


const App = () => {
  
  return (
    <>
    <Navbar />
    <Routes> 
      <Route path='/' element={<Home />}/>
      <Route path='/adduser' element={<AddUser />}/>
      <Route path='/user' element={<User firstname={'John'} lastname={'Smith'} isTeacher={'true'}/>}/>
      <Route path='/testPage' element={<TestPage/>}/>
      <Route path='/test1' element={<TestOne/>}/>
      <Route path='/test2' element={<TestTwo/>}/>
      <Route path='/test3' element={<TestThree/>}/>
    </Routes>
    </>
    );
}


export default App;
