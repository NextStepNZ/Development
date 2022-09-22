import "../style/App.css";
import React from "react";
import { useState } from "react";
import { useRef } from "react";
import axios from "axios";


function AddUser() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [userlist, setUserlist] = useState([]);

  /*
  const displayInfo = () => {
    console.log(username + " " + password);
  };
  */

  const userInput = useRef(null);
  const passwordInput = useRef(null);

  const addNewUser = event => {
    axios.post('http://localhost:3001/addUser', { username: username, password: password })
      .then(() => { console.log("success") });

    userInput.current.value = '';
    passwordInput.current.value = '';
  }

  const getUserList = () => {
    axios.get('http://localhost:3001/getUserList').then((response) => { 
      console.log(response) 
      setUserlist(response.data)
    });
  }

  const deleteAllUsers = () => {
    axios.post('http://localhost:3001/deleteAllUsers').then((response) => {
      console.log(response)
      getUserList()
    })
  }

/*********************************************************************************************/

  return (
    <div className="App">
      <h1>DB Readwrite testpage</h1>

      <div className="loginComponents">
        <label>Username</label>
        <input
          ref={userInput}
          type="Text"
          placeholder="enter username here"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <label>Password</label>
        <input
          ref={passwordInput}
          type="Text"
          placeholder="enter password here"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button onClick={addNewUser}>Add User and Password</button>
      </div>

      ================================================================
      <div className="displayComponents">
        <div>
        <button onClick={getUserList}> Show all Data </button>
        <button onClick={deleteAllUsers}> Delete all data</button>
        </div>
        {userlist.map((val, key) => {
          return <div className="displayComponentsList">
            <h3>Username:</h3> <p>{val.userName}</p>
            <h3>Password:</h3> <p>{val.password}</p>
            </div>
        })}

      </div>
    </div>
)}

export default AddUser