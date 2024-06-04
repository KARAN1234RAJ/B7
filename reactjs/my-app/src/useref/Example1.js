import { useRef } from 'react'

const Example1 = () => {
  // creating a ref:
  const exampleRef = useRef()
  const obj1 ={}
  obj1.name = "Karan"
  console.log(exampleRef);

  // setting the ref value:
  exampleRef.current = 'Learning about the useRef react hook'

  return (
    // accessing the ref value:

    <p>{exampleRef.current}</p>
   
  )
}
export default Example1;
