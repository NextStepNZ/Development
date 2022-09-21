import "./App.css";
import React from "react";
import AddUser from "./components/AddUser";
import User from './components/User';


const App = () => {
  
  return (
      <div className='App'>
          <h1>Landing Page</h1>
          <br/>
          <AddUser />
          <User firstname={'John'} lastname={'Smith'} isTeacher={'true'} />
      </div>
    )
  
}


export default App;
