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

    pTypeInput.current.value = '';
    pFirstNameInput.current.value = '';
    pLastNameInput.current.value = '';
    pEmailInput.current.value = '';
    pUsernameInput.current.value = '';
    pPasswordInput.current.value = '';
    pGroupIDInput.current.value = '';
  }

  const getProfileList = () => {
    axios.get('http://localhost:3001/getProfileList').then((response) => {
      console.log(response)
      setProfileList(response.data)
    });
  }

  const deleteAllProfiles = () => {
    axios.post('http://localhost:3001/deleteAllProfiles').then((response) => {
      console.log(response)
      getProfileList()
    })
  }

  /* Group DB =======================================================*/

  const [gOwnerID, setGOwnerID] = useState("");
  const [gName, setGName] = useState("");
  const [gAssignedQuiz, setGAssignedQuiz] = useState("")

  const [groupList, setGroupList] = useState([]);

  const gOwnerIDInput = useRef(null);
  const gNameInput = useRef(null);
  const gAssignedQuizInput = useRef(null);

  const addNewGroup = event => {
    axios.post('http://localhost:3001/addNewGroup', {
      gOwnerID: gOwnerID,
      gName: gName,
      gAssignedQuiz: gAssignedQuiz
    })
      .then(() => console.log("success"));

    gOwnerIDInput.current.value = '';
    gNameInput.current.value = '';
    gAssignedQuizInput.current.value = '';
  }

  const getGroupList = () => {
    axios.get('http://localhost:3001/getGroupList').then((response) => {
      console.log(response)
      setGroupList(response.data)
    });
  }

  const deleteAllGroups = () => {
    axios.post('http://localhost:3001/deleteAllGroups').then((response) => {
      console.log(response)
      getGroupList()
    })
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

      <div className="displayComponents">
        <div>
          <button onClick={getProfileList}> Show all Data </button>
          <button onClick={deleteAllProfiles}> Delete all data</button>
        </div>
        {profileList.map((val, key) => {
          return <div className="displayComponentsList">
            <h3>Type:</h3> <p>{val.Type}</p>
            <h3>First Name:</h3> <p>{val.FirstName}</p>
            <h3>Last Name:</h3> <p>{val.LastName}</p>
            <h3>Email:</h3> <p>{val.Email}</p>
            <h3>Username:</h3> <p>{val.Username}</p>
            <h3>Password:</h3> <p>{val.Password}</p>
            <h3>GroupID:</h3> <p>{val.GroupID}</p>
          </div>
        })}

      </div>

      =============================================================================================

      <h1>Group DB Readwrite</h1>

      <div className="loginComponents">

        <label>Group OwnerID</label>
        <input
          ref={gOwnerIDInput}
          type="Text"
          placeholder="Group owner ID here INT ONLY"
          onChange={(event) => {
            setGOwnerID(event.target.value);
          }}
        />

        <label>Group Name</label>
        <input
          ref={gNameInput}
          type="Text"
          placeholder="Group name here"
          onChange={(event) => {
            setGName(event.target.value);
          }}
        />

        <label>Assigned Quizs</label>
        <input
          ref={gAssignedQuizInput}
          type="Text"
          placeholder="AssignedQuizzes"
          onChange={(event) => {
            setGAssignedQuiz(event.target.value);
          }}
        />

        <button onClick={addNewGroup}>Add Group</button>

      </div>
      ---------------------------------------------------------------------------------------------
      <div className="displayComponents">
        <div>
          <button onClick={getGroupList}> Show all Groups </button>
          <button onClick={deleteAllGroups}> Delete all Groups</button>
        </div>

        {groupList.map((val, Key) => {
          return <div className="displayComponentsList">
            <h3>Group ID</h3> <p>{val.id}</p>
            <h3>Owner ID</h3> <p>{val.OwnerID}</p>
            <h3>Name</h3> <p>{val.Name}</p>
            <h3>Assigned Quiz</h3> <p>{val.AssignedQuizes}</p>
          </div>
        })}

      </div>

    </div>
  )
}

export default DevControls