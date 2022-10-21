import React from "react";
import { useState } from "react";
import axios from "axios";


function Test9() {
/* Quizzes DB ======================================================*/


const [QuizList, setQuizList] = useState([]);
const quizID = 100;

const getQuizList = event => {

  axios.get('http://localhost:3001/getQuizList').then((response)=>{
    console.log(quizID)
    setQuizList(response.data)
  });
}


return (
  <div className="App">
    <div className="displayComponents">
      <div>
        <button onClick={getQuizList}> Show all Quizzes </button>
      </div>

      {QuizList.map((val, Key) => {
        if(val.id == quizID)
        {
          console.log("ID match")
        }
        return <div className="displayComponentsList">
          <h3>Quiz ID</h3> <p>{val.id}</p>
          <h3>Quiz Name ID</h3> <p>{val.name}</p>
          <h3>Quiz time: </h3><p>{val.time_seconds}</p>
        </div>
      })}

    </div>


  </div>
)

}

export default Test9;