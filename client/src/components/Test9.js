import React from "react";
import { useState } from "react";
import Timer from "./Timer";
import axios from "axios";


function Test9() {
  /* Quizzes DB ======================================================*/


  const [QuizList, setQuizList] = useState([]);
  const quizID = 100;

  const getQuizList = event => {

    axios.get('http://localhost:3001/getTime100', {
      params: {
        id: quizID
      }
    })
      .then((response) => {
        setQuizList(response.data)
        //setTime(val.time_seconds);
      });
  }

  /*const getQuiz = */useState(getQuizList);

  const time = 120;

  const timer = useState(<Timer max={time} />);


  return (

    <div className="App">
      <div className="displayComponents">

        <h3>Timer: </h3><div><h3>{timer}</h3></div>

        {QuizList.map((val, Key) => {

          return <div className="displayComponentsList">

            <h3>Quiz ID</h3> <p>{val.id}</p>
            <h3>Quiz Name ID</h3> <p>{val.name}</p>
            <h3>Quiz time: </h3><p>{val.time_second}</p>
          </div>

        })}

      </div>


    </div>
  )

}

export default Test9;