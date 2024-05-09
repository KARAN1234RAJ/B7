import Counter from "./components/useState/Counter";
import { useState } from "react";
import Details from "./components/useState/Bhaktraj";
function App() {
  const [age, setAge] = useState(23);
  return (
    <>
      <h1>this is App Component</h1>

      <Counter/>
      <Details age={age} setAge={setAge} />
    </>
  );
}

export default App;
