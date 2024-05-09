import About from "./About";
function Home(props) {
  // console.log(props);
  return (
     <>
          <h1>{props.comment}</h1>  
          <About comment={props.abt}/>
     </>
  )
}
export default Home;
