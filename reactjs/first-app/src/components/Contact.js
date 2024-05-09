import React from 'react'

const Contact = (props) => {
  return (
    <div>
  <h2>My name is : {props.name}</h2>
  <h3>I am currently living {props.location}</h3>
    </div>
  )
}

export default Contact