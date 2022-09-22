import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddUser from "./components/AddUser";
import User from './components/User';
import Test from './components/Test';
import Login from './components/Login/Login';

//import Dashboard from './components/Dashboard/Dashboard';
//import Preferences from './components/Preferences/Preferences';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
  const [token, setToken] = useState();  

  if(!token) {
    return <Login setToken={setToken} />
  }


  return (
    <>
    <div className="wrap">
    <Navbar />
      <BrowserRouter>
        <Routes> 
          <Route path='/' element={<Home />}/>
          <Route path='/adduser' element={<AddUser />}/>
          <Route path='/user' element={<User firstname={'John'} lastname={'Smith'} isTeacher={'true'}/>}/>
          <Route path='/Test' element={<Test/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    </>
    );
}


export default App;
