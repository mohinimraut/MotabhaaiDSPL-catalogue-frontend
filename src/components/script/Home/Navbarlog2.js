import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import './Navbarlog2.css'
import {connect} from 'react-redux';
import {withRouter,NavLink} from 'react-router-dom';

const Navbarlog2 = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="" expand="lg" className="py-0 bg-light2 margintp container-fluid">
        
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto mx-mar" navbar>
            
          <NavItem>
              <NavLink className="font111 text-dark" to="#">Categories <img src="header-categories-icn.svg"></img></NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="font text-dark" to="#">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="font text-dark" to="#">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="font text-dark" to="/partners">Stores</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="font text-dark" to="#">Product Features</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="font text-dark" to="#">Offers</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="font text-dark" to="#">Returns & Orders</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className=" malt1" to="#"><img className="expicon" src="header-express-icn.svg"></img>
              Express Delivery Partners</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="malt2" to="#"><img className="motaicon" src="header-sell on motabhai-icn.svg"></img>
              Sell On Motabhaai</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

const mapStateToProps=state=>({
  product:state.product,
})

export default connect(mapStateToProps)(withRouter(Navbarlog2));