import React, { useState } from 'react'

const Counter = () => {
  const [value,setValue]= useState(0)
  const increval=()=>{setValue(value+1)}
  const decreval=()=>{setValue(value-1)}
  const zeroval=()=>{setValue(0)}
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={()=>{increval()}}>+</button>
      <button onClick={()=>{zeroval()}}>0</button>
      <button onClick={()=>{decreval()}}>-</button>
    </div>
  )
}

export default Counter