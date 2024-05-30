import React from 'react'
import { useParams } from 'react-router-dom'

const AspirantsDetails = () => {
     const param = useParams()
     console.log(param.id);
  return (
    <div>
     <h1>Aspirants name is {param.id} </h1>
    </div>
  )
}

export default AspirantsDetails