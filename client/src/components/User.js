import React from 'react'

const User = (props) => {

  return (
    <>
        <h1>Name: {props.firstname + " " + props.lastname}</h1>
        <h1>isTeacher: {props.isTeacher}</h1>
    </>
  )
}

export default User