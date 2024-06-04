import { useState } from "react";
import { fullName, ageGender, cradential } from "./AllContext";
import MainComponent from "./components/MainComponent";
function App() {
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("admin@123");
  const [age, setAge] = useState("28");
  const [gender, setGender] = useState("male");
  const [name, setName] = useState("Karan Raj");
  return (
    <>
      <h1>ContextApi</h1>
      <fullName.Provider value={{name,setName}}>
        <cradential.Provider value={{ email, setEmail, password, setPassword }}>
          <ageGender.Provider value={{age,gender}}>
            <MainComponent />
          </ageGender.Provider>
        </cradential.Provider>
      </fullName.Provider>
    </>
  );
}

export default App;
