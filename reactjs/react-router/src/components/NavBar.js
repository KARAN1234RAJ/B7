import React from 'react'
import { NavLink } from 'react-router-dom'
// import { Link } from 'react-router-dom';
import './navbar.css';

const NavBar = () => {
  return (
    <div>
     {/* <ul>
        <li> <Link to="/">Home</Link> </li>
        <li><Link to="/contact">Contact</Link> </li>
        <li> <Link to="/growTech">GrowTech</Link></li>
        <li> <Link to="/about">About</Link></li>
      </ul> */}
      <ul>
        <li> <NavLink to="/">Home</NavLink> </li>
        <li><NavLink to="/contact">Contact</NavLink> </li>
        <li> <NavLink to="/growTech">GrowTech</NavLink></li>
        <li> <NavLink to="/about">About</NavLink></li>
        <li> <NavLink to="/courses">Course</NavLink></li>

      </ul>
    </div>
  )
}

export default NavBar