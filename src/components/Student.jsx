import React from 'react'

function Student(props) {
  return (
    <div>
        <h1>Name : {props.name}</h1>
        <p>Age : {props.age}</p>
        <p>Faculty : {props.Faculty}</p>
    </div>
  )
}

export default Student