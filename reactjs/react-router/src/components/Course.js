import React from "react";
import { NavLink } from "react-router-dom";
// import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

const Course = () => {
  return (
    <div>
    {/* <NavBar/> */}
    <Outlet/>
    <ul>
     <li>
          <NavLink to="/courses/fsd">FSD</NavLink>
          <NavLink to="/courses/ds">DS</NavLink>
     </li>
    </ul>
      <h1>This is Course Page!</h1>
    </div>
  );
};

export default Course;
