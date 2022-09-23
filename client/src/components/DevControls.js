import React from "react";
import { useState } from "react";
import { useRef } from "react";
import axios from "axios";


function DevControls() {

  /*  DB Readwite Test ==============================================*/
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [userlist, setUserlist] = useState([]);

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

  /*  userProfiles ==================================================*/

  const [pType, setPType] = useState("");
  const [pFirstName, setPFirstName] = useState("");
  const [pLastName, setPLastName] = useState("");
  const [pEmail, setPEmail] = useState("");
  const [pUsername, setPUsername] = useState("");
  const [pPassword, setPPassword] = useState("");
  const [pGroupID, setPGroupID] = useState("");

  const [profileList, setProfileList] = useState([]);

  const pTypeInput = useRef(null);
  const pFirstNameInput = useRef(null);
  const pLastNameInput = useRef(null);
  const pEmailInput = useRef(null);
  const pUsernameInput = useRef(null);
  const pPasswordInput = useRef(null);
  const pGroupIDInput = useRef(null);

  const addNewProfile = event => {
    axios.post('http://localhost:3001/addNewProfile', {
      pType: pType,
      pFirstName: pFirstName,
      pLastName: pLastName,
      pEmail: pEmail,
      pUsername: pUsername,
      pPassword: pPassword,
      pGroupID: pGroupID
    })
      .then(() => { console.log("success") });

    /*
    pTypeInput.current.value = '';
    pFirstNameInput.current.value = '';
    pLastNameInput.current.value = '';
    pEmailInput.current.value = '';
    pUsernameInput.current.value = '';
    pPasswordInput.current.value = '';
    pGroupIDInput.current.value = '';
*/
  }

  /**************************************************************************************************/

  return (
    <div className="App">
      =============================================================================================
      <h1>DB Readwrite test</h1>

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

      ---------------------------------------------------------------------------------------------

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

      =============================================================================================
      <h1>userprofiles DB Readwrite </h1>

      <div className="loginComponents">

        <label>Type</label>
        <input
          ref={pTypeInput}
          type="Text"
          placeholder="Profile Type (Teacher, Student, Dev)"
          onChange={(event) => {
            setPType(event.target.value);
          }}
        />

        <label>First Name</label>
        <input
          ref={pFirstNameInput}
          type="Text"
          placeholder="Firstname here"
          onChange={(event) => {
            setPFirstName(event.target.value);
          }}
        />

        <label>Last Name</label>
        <input
          ref={pLastNameInput}
          type="Text"
          placeholder="Lastname here"
          onChange={(event) => {
            setPLastName(event.target.value);
          }}
        />

        <label>Email</label>
        <input
          ref={pEmailInput}
          type="Text"
          placeholder="Email here"
          onChange={(event) => {
            setPEmail(event.target.value);
          }}
        />

        <label>Username</label>
        <input
          ref={pUsernameInput}
          type="Text"
          placeholder="Username here"
          onChange={(event) => {
            setPUsername(event.target.value);
          }}
        />

        <label>Password</label>
        <input
          ref={pPasswordInput}
          type="Text"
          placeholder="Password here"
          onChange={(event) => {
            setPPassword(event.target.value);
          }}
        />

        <label>Group ID</label>
        <input
          ref={pGroupIDInput}
          type="Text"
          placeholder="Group ID here"
          onChange={(event) => {
            setPGroupID(event.target.value);
          }}
        />

        <button onClick={addNewProfile}>Add New Profile</button>

      </div>

        ---------------------------------------------------------------------------------------------

    </div>
  )
}

export default DevControls