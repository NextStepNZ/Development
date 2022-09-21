import "./App.css";
import React from "react";
import { useState } from "react";
import { useRef } from "react";
import axios from "axios";

return (
    <div className='App'>
        <h1>Landing Page</h1>
        <br/>
        <AddUser />
        <User firstname={'John'} lastname={'Smith'} isTeacher={'true'} />
    </div>
  )


export default App;
