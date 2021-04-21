import React, { Component } from 'react'
import {connect} from 'react-redux';
import {withRouter,NavLink} from 'react-router-dom';
import {onVendor} from './../../Redux/Vendor/VendorAction';
import { Spinner,Search } from 'reactstrap';
import './Vendor.css'
import Vendormap from './Vendormap';
import Vendorfilter from './Vendorfilter';
import Productdetails from './Productdetails';
import Vendortab from './Vendortab';

class Vendor extends Component {
constructor(props) {
    super(props)

    this.state = {
        productid:""
         
    }
}
componentDidMount(){
    this.props.onVendor(this.props.match.params.id)

}

    render() {
        if(this.props.vendor.datastate=="NOT_INITIALIZED" || this.props.vendor.datastate=="FETCHING"){
            return (
                
                    <Spinner color="primary" className="ml-5 mt-5" />
                            
            );
       }
        else {
        return (
            <div className="container-fluid">
                <div className="row margin">
                 <div className="col-9">   
                <div className="d-flex">
                 <div className="div1">   
                <img className="vendorlogo" src={process.env.PUBLIC_URL + "/vendor-logo.jpg"}></img>
                </div>
                <div className="div1">
                    <p className="vendorname">{this.props.vendor.vendor.name} Fruits & Vegetables</p>
                    <p className="address">{this.props.vendor.vendor.address}</p>
                </div>
                </div>
                </div>
                <div className="col-3">
                    <div className="rightdetails">  
                        <p className="member">Member Since :{this.props.vendor.vendor.mem}</p>
                        <p className="email">Email: {this.props.vendor.vendor.email}</p>
                        <p className="phone"><img className="callicon" src={process.env.PUBLIC_URL + "/call-icn.svg"}></img>+{this.props.vendor.vendor.no} +99999999999</p>
                        <p className="venall"><img className="venicons1" src={process.env.PUBLIC_URL + "/gmail-vendor-white-icn.svg"}></img> 
                           <img className="venicons1" src={process.env.PUBLIC_URL + "/gmail-vendor-white-icn.svg"}></img>
                           <img className="venicons1" src={process.env.PUBLIC_URL + "/gmail-vendor-white-icn.svg"}></img>
                           <img className="venicons1" src={process.env.PUBLIC_URL + "/gmail-vendor-white-icn.svg"}></img>
                           <img className="venicons1" src={process.env.PUBLIC_URL + "/gmail-vendor-white-icn.svg"}></img>
                           <img className="venicons" src={process.env.PUBLIC_URL + "/gmail-vendor-white-icn.svg"}></img></p>
                    </div>

                </div>
                <hr className="line"></hr>
                
                    {this.props.match.params.id2=="id2"?null:
                   <Productdetails 
                   details={this.props.vendor.vendor.products.filter((el)=>{return el.pid==this.props.match.params.id2 })}
                   details2={this.props.vendor.vendor.combos.filter((el)=>{
                       if(this.props.match.params.cid!="cid"){
                           return el.id==this.props.match.params.cid
                       }
                    })}
                    
                  />}
                    
                </div>
                <div className="margintab">
                <Vendortab vendor={this.props.vendor.vendor.products}></Vendortab>
                </div>
            </div>
        )
    }
}
}
const mapStateToProps=state=>({
  vendor:state.vendor,
});

export default connect (mapStateToProps, {onVendor})(withRouter(Vendor));