import React from 'react'
import './App.css';
import header from '../src/images/Group 40.png';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { NavLink } from 'react-router-dom';
import { ImSearch } from 'react-icons/im';
import { GrCart } from 'react-icons/gr';
import { FaRegHeart } from 'react-icons/fa';


function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-xl navbar-light py-2 container-fluid">
    <div className="mx-5">
    <div className="row mx-4">
    <div className="col-sm">

    <NavLink className="navbar-brand" to="/"><img src={header} id= "headerimg" class="img-fluid"
     alt="Responsive img" style={{width:"60%",height:"100%"}}/></NavLink>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button> */}
     </div> 
     <div className="col">

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mt-3 ">

     <li className="nav-item">
      <NavLink className="navlinkstyle" exact activeClassName="active_class" aria-current="page" to="/home">Home</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="navlinkstyle" exact activeClassName="active_class" aria-current="page" to="/dashboard">About</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="navlinkstyle" exact activeClassName="active_class" aria-current="page" to="/aboutT">Features</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="navlinkstyle" exact activeClassName="active_class" to="/featuresT">Join Us</NavLink>
    </li> 


    </ul>
      
    </div>
   </div>
   <div className="col-sm ">
     <div className="text-right">
     <ImSearch className="h4 colour mx-2 mt-2"></ImSearch> 
     <GrCart className="h4 colour mx-2  mt-2"></GrCart> 
     <FaRegHeart className="h4 colour mx-2  mt-2"></FaRegHeart>
     <button className="btn btn-outline-secondary btn-lg colour mx-2">Login</button>
     </div>
   </div>

   </div>
   </div>

  </nav>
    </>
  )
}

export default Navbar;
