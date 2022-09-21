import React from 'react';
import AddUser from "./components/AddUser";
import User from './components/User';
import "./App.css"

const App = () => {






  return (
    <>
    <div className='App'>
      <centre>
        <h1>Landing Page</h1>
        <br/>
        <AddUser />

      </centre>
        <User firstname={'John'} lastname={'Smith'} isTeacher={'true'} />
    </div>
    </>
  )
}

export default App;
