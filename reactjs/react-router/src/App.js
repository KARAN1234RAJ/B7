import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import GrowTech from "./components/GrowTech";
import Aspirants from "./components/Aspirants";
import AspirantsDetails from "./components/AspirantsDetails";
import Contacts from "./components/Contacts";
import Course from "./components/Course";
import FSD from "./components/FSD";
import DataScience from "./components/DataScience";
import MainHome from "./components/MainHome";
function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<h1>Welcome To React Router-Dom</h1>} /> */}
        <Route path="/" element={<MainHome />}>
          <Route index element={<Home />} />
          <Route path="/growTech" element={<GrowTech />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/:number" element={<Contacts />} />
          <Route path="/aspirents" element={<Aspirants />} />
          {/* <Route path="/aspirents/1" element={<AspirantsDetails />} />
        <Route path="/aspirents/2" element={<AspirantsDetails />} />
        <Route path="/aspirents/3" element={<AspirantsDetails />} />
        <Route path="/aspirents/4" element={<AspirantsDetails />} />
        <Route path="/aspirents/5" element={<AspirantsDetails />} />
        <Route path="/aspirents/6" element={<AspirantsDetails />} /> */}
          <Route path="/aspirents/:id" element={<AspirantsDetails />} />
          <Route path="/courses" element={<Course />}>
            <Route path="fsd" element={<FSD />} />
            <Route path="ds" element={<DataScience />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
