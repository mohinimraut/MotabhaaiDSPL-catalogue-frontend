import React from "react";
import "./Navbarlog.css";
import header from "../../../../src/images/Group 40.png";

import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { NavLink } from "react-router-dom";
import { ImSearch } from "react-icons/im";
import { GrCart } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import { IoPersonCircle } from "react-icons/io5";
import { Navbar } from "react-bootstrap";
function Navbarlog() {
  return (
    <>
      <Navbar className="navbar navbar-expand-lg navbar-light py-2 container-fluid">
        <div className="container-fluid">
          <div className="row  mx-5">
            <div className="col-3">
              <NavLink className="navbar-brand" to="/">
                <img
                  src={header}
                  id="headerimg"
                  class="img-fluid"
                  alt="Responsive img"
                  // style={{ width: "80%", height: "80%" }}
                />
              </NavLink>
            </div>
            <div className="col-1">
              <MdPlace className="h3 colour mx-2  mt-2">
                <p>Mira Road</p>
              </MdPlace>
            </div>
            <div className="col-5">
              <table id="searchtable">
                <tbody>
                  <tr>
                    <td className="align-baseline visible12">baseline</td>
                    <td className="align-top visible12">top</td>
                    <td className="align-middle">
                      <div className="form-group">
                        <div class="d-flex justify-content-center ml-5">
                          <select
                            className="selectmenu"
                            name="category"
                            id="cars"
                          >
                            <option>Mumbai</option>
                            <option value="Fruits & Vegetables">
                              Fruits & Vegetables
                            </option>
                            <option value="Staples">Staples</option>
                            <option value="Snacks & Branded Foods">
                              Snacks & Branded Foods
                            </option>
                            <option value="Dairy & Bakery   ">
                              Dairy & Bakery
                            </option>
                            <option value="Beverages">Beverages</option>
                            <option value="Home Care">Home Care</option>
                            <option value="Flower Bouquets, Bunches">
                              Flower Bouquets, Bunches
                            </option>
                            <option value="Eletrical">Eletrical</option>
                          </select>
                          <input
                            name="search"
                            type="text"
                            className="inputcss"
                            placeholder="Search for Products..."
                          ></input>
                          <button className="buttoncss">
                            <ImSearch className="h6 colour mx-2 mt-2"></ImSearch>
                            Search
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="align-bottom visible12">bottom</td>
                    <td className="align-text-top visible12">text-top</td>
                    <td className="align-text-bottom visible12">text-bottom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-lg-3">
              <div className=" row text-right">
                <div className="col" id="cartid">
                  <GrCart className="h4 colour mx-2  mt-2"></GrCart> <br />
                  <p> Cart </p>
                </div>
                <div className="col" id="cartwishlist">
                  <FaRegHeart className="h4 colour mx-2  mt-2"></FaRegHeart>
                  <br />
                  <p>Wishlist</p>
                </div>
                <div className="col" id="cartlogin">
                  <IoPersonCircle className="h4 colour mx-2  mt-2"></IoPersonCircle>
                  <br />
                  <p>Sign In</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Navbar>
    </>
  );
}

export default Navbarlog;
