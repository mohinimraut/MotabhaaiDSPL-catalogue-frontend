import React, { Component } from 'react';
//import '../../../App.css';
import './Navbarlog.css'
import header from '../../../../src/images/Group 40.png'
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../../../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { NavLink } from 'react-router-dom';
import { ImSearch } from 'react-icons/im';
import { GrCart } from 'react-icons/gr';
import { FaRegHeart } from 'react-icons/fa';
import { IoPersonCircle } from "react-icons/io5";
import { BiSearchAlt2 } from "react-icons/bi";
import { GoLocation } from 'react-icons/go';
import {onSearch,OnSelector,OnFilter} from './../../Redux/Products/ProductAction';
import {withRouter} from 'react-router-dom'; 
import {connect} from 'react-redux';
import $ from 'jquery';

class Navbarlog extends Component {
  constructor(props) {
      super(props)
  
      this.state = {
           search:"",
           category:"",
           lat:null,
           long:null
      }
  }
  
  handle=(e)=>{
    this.setState({[e.target.name]:e.target.value});
}
 onSubmit=()=>{
  //  const obj={
  //      search:this.state.search,
  //      categories:this.state.category,
   //     lat:this.state.lat,
   //     long:this.state.long
   // }
        this.props.OnSelector("");
    //   this.props.OnFilter();
        this.props.onSearch();

    
}
modal=()=>{
  $('.modal-backdrop').hide();
  
  
}
modal2=()=>{
  $('.modal-backdrop').show();
  
}
modal5=()=>{
  alert("hi")
}
dismiss=()=>{
  $('#exampleModal2').modal('hide');
}
render(){
  
  return (
    <>
    <nav className="navbar navbar-expand-xl navbar-light22 py-2 container-fluid">
    <div className="mx-5">
    <div className="row mx-4 mt-2">
    <div className="col-2">

    <NavLink className="navbar-brand font11 img-fluid" to="/"><img src={header}
     alt="Responsive img" style={{width:"130%",height:"70%"}}/><GoLocation className="ig"></GoLocation>
     <span className="location">  Select Location</span></NavLink>
      

     </div> 
     <div className="col-8">

     <div className="form-group marginlist">

                                        <div class="d-flex justify-content-center">

                                        <select className="selectmenu" name="category" id="cars" onChange={this.handle}>
                                                    <option value="Fruits & Vegetables">Mumbai</option> 
                                                    <option value="Staples">Patna</option>      
                                                    <option value="Snacks & Branded Foods">Chennai</option>       
                                                    <option value="Dairy & Bakery">Kochi</option>
                                                    

                                                </select>
                                            <input onChange={this.handle} name="search" type="text" className="inputcss1" list="listid">
                                            </input>
                                        <div className="datali">
                                              <datalist id="listid" >
                                              <option value="value1" ></option>
                                              <option value="value1"></option>
                                              <option value="value1"></option>
                                              <option value="value1"></option>

                                              </datalist>
                                              </div>  

                                            <NavLink onClick={this.onSubmit} className="buttoncss" to={`/products/${this.state.search}`}  ><BiSearchAlt2 className="searchicon"/>   Search</NavLink>
                                            </div>
                                        </div>

   </div>
   <div className="col-2">
              <div className=" row text-right marginrow">
                <div className="col">
                  <GrCart className="h4 mx-2 icon1 mt-2"></GrCart><span className="badgecart text-center">0</span> <br />
                  <p className="allfont"> Cart </p>
                </div>
                <div className="col" >
                  <FaRegHeart className="h4 mr-3 icon2  mt-2"></FaRegHeart><span className="badgewish text-center">0</span>
                  <br />
                  <p className="allfont">Wishlist</p>
                </div>
                <div className="col" >
                  <IoPersonCircle data-toggle="modal" data-target="#exampleModal2" onClick={this.modal} className="h4 icon3 mr-3  mt-2"></IoPersonCircle>
                  <br />
                  <p className="allfont">Sign In</p>
                </div>
              </div>
   </div>

   </div>
   </div>

  </nav>

 

<div class="modal fade" id="exampleModal2" tabindex="-1"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content1">
      <div class="modal-header1">
        <h5 class="modal-title1" id="exampleModalLabel">Get Started Now</h5>
        <button type="button" class="close" onClick={this.modal5} data-dismiss="modal" aria-label="Close">
          
        </button>
      </div>
      <div class="modal-body1">
        <p className="logininfo">Please Log in to go to your profile</p>
        <button className="btn buttonlogin">Login</button>
        <p className="account1">Don't have an account?<span  data-toggle="modal" data-target="#exampleModal3" onClick={this.dismiss} className="signup1" >Sign Up</span></p>
        <p className="sellersp2"><img className="sellersp" src={process.env.PUBLIC_URL + "/header-sell on motabhai-icn.svg"}></img><span className="sellersp1">Become a Seller</span></p>
        <p className="sellersp2"><img className="sellersp" src={process.env.PUBLIC_URL + "/header-sell on motabhai-icn.svg"}></img><span className="sellersp1">Privacy Policy</span></p>
        <p className=""><img className="sellersp" src={process.env.PUBLIC_URL + "/header-sell on motabhai-icn.svg"}></img><span className="sellersp1">Terms & conditions</span></p>

      </div>
     
    </div>
  </div>
</div>


<div class="modal fade" id="exampleModal3"  tabindex="-1"  role="dialog" aria-labelledby="exampleModalLabel"  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content2">
      <div class="modal-header2">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body2">
        ...
      </div>
     
    </div>
  </div>
</div>

    </>
  )
}
}

const mapStateToProps=state=>({
  product:state.product,
});

export default connect (mapStateToProps, {onSearch,OnSelector,OnFilter})(withRouter(Navbarlog));