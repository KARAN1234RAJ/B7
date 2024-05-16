import React, { useState } from 'react'


const TwowayData = () => {
     const[text, setText]=useState("")
  return (
    <div>
      <form>
        <input
          type='text'
          value={text}
          onChange={(e)=>setText(e.target.value)}
        />
      </form>
      <h1>{text}</h1>
    </div>
  )
}

export default TwowayData