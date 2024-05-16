import React from 'react'
import Style from './style1.module.css'

const Example2 = () => {
  return (
   <>
     <h1 className={Style.heading}>Example2 </h1>
     <p className={Style.para}>Some thing about Example2</p>
     <h2 className={Style["sub-heading"]}> This is subHeading</h2>
   </>
  )
}

export default Example2