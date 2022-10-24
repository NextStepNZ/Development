import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import DevControls from "./components/DevControls";
import User from './components/User';
import TestPage from "./components/TestPage";
import TestOne from "./components/Test1";
import TestTwo from "./components/Test2";
import TestThree from "./components/Test3";
<<<<<<< Updated upstream
=======
import TestNine from "./components/Test9";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Teacher from "./components/Teacher";
import Footer from './components/Footer';
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/Themes/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes/Themes"
import {useState} from 'react';
>>>>>>> Stashed changes
import TestNine from "./components/Test9";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Teacher from "./components/Teacher";

import {Routes, Route} from 'react-router-dom';


const App = () => {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}
  return (
    <>
    <Navbar />
    <Footer />
    <Routes> 
      <Route path='/' element={<Home />}/>
      <Route path='/devcontrols' element={<DevControls />}/>
      <Route path='/teacher' element={<Teacher />}/>
      <Route path='/user' element={<User firstname={'John'} lastname={'Smith'} isTeacher={'true'}/>}/>
      <Route path='/testPage' element={<TestPage/>}/>
      <Route path='/test1' element={<TestOne/>}/>
      <Route path='/test2' element={<TestTwo/>}/>
      <Route path='/test3' element={<TestThree/>}/>
      <Route path='/test9' element={<TestNine/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
      <button onClick={themeToggler}>Switch Theme</button>
      </>
    </ThemeProvider>
    </>
    );
}


export default App;
