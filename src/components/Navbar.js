import React from 'react'

import {Outlet} from 'react-router-dom'

import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="nav">
       <Link to="/"><h4>Home</h4></Link>
      <Link to="/about"><h4>About</h4></Link>
      <Link to="/contact"><h4>Contact me</h4></Link>
        <Outlet />
    </div>
  )
}

export default Navbar
 