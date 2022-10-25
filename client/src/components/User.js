import React from 'react'

const User = (props) => {

  return (
    <div>
        <h1>Name: {props.firstname + " " + props.lastname}</h1>
        <h1>isTeacher: {props.isTeacher}</h1>
    </div>
  )
}

export default User