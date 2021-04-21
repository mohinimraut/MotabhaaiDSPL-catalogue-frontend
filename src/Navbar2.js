import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import './Navbar2.css'

const Navbar2 = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="" light expand="lg" className="py-0 bg-light2 container-fluid">
        
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto mx-mar" navbar>
           
            <NavItem>
              <NavLink className="font text-dark" href="#">Fruits and vegetables</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="font text-dark" href="#">Staples</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="font text-dark" href="#">Snacks & Branded Foods</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="font text-dark" href="#">Beverages</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="font text-dark" href="#">Personal care</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="font text-dark" href="#">Home Care</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="font text-dark" href="#">Flower Bouquets, Bunches</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="font text-dark" href="#">Electronics</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navbar2;