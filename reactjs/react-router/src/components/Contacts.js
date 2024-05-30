import React from 'react'
import { useParams } from 'react-router-dom'

const Contacts = () => {
     const params = useParams()
  return (
    <div>
     <h1>user  Contact number is : {params.number}</h1>
    </div>
  )
}

export default Contacts