import React from "react";
import { useState } from "react";
import axios from "axios";


function AddUser() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    /*
    const displayInfo = () => {
      console.log(username + " " + password);
    };
    */
  
    const AddNewUser = () => {
      axios.post('http://localhost:3001/addUser', {
        username: username, 
        password: password
      }).then(() => {
        console.log("success");
      })
    }

  return (
    <>
    <div className="AddUser">
    <div className="loginComponents">
      <label>Username</label>
      <input
        type="Text"
        placeholder="enter username here"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <label>Password</label>
      <input
        type="Text"
        placeholder="enter password here"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <button onClick={AddNewUser}>Add User and Password</button>
    </div>
  </div>
  </>
);
  
}

export default AddUser




