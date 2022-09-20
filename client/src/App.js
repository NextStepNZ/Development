import "./App.css";
import { useState } from "react";
import Axios from 'axios'
import axios from "axios";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  /*
  const displayInfo = () => {
    console.log(username + " " + password);
  };
  */

  const addNewUser = () => {
    axios.post('http://localhost:3001/addUser', {
      username: username, 
      password: password
    }).then(() => {
      console.log("success");
    })
  }

  return (
    <div className="App">
      <h1>Next Step Landing Page</h1>

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
        <button onClick={addNewUser}>Add User and Password</button>
      </div>
    </div>
  );
}

export default App;
