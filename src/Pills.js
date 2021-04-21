import React, { Component } from 'react'
import { NavItem, NavLink } from 'react-bootstrap'
import './Pills.css'
import { FaRegHeart } from 'react-icons/fa';

export default class Pills extends Component {
    render() {
        return (
            <div>
  <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
    <li className="nav-item">
      <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</a>
    </li>
  </ul>
  <div className="tab-content" id="pills-tabContent">
    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
      <div className="card" style={{width: '12rem'}}>
        <img className="card-img-top" height="120px" src="straw.jpg" alt="Card image cap" />
        <div className="card-body">
          <p className="card-text font1 spacing text-center">French Green Beans - Exotic</p>
          <p className="card-text font1 spacing text-center">250gm | 500gm | 1kg</p>
          <p className="card-text font1 spacing text-center">$89.89</p>
        </div>
        
        <div class="card-footer bg-transparent border-light">
         <FaRegHeart />   
            <span className="ml-3"><button className="btn btn-outline-warning buttoncard btn-sm ml-4">Add to Cart</button></span>
        </div>
      </div>
    </div>
    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">..jj.</div>
    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">..ll.</div>
  </div>
</div>

        )   
    }
}
