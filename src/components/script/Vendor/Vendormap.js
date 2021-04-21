import React, { Component } from 'react';
import './Vendormap.css';
import {connect} from 'react-redux';
import {withRouter,NavLink} from 'react-router-dom';
import { Spinner,Search } from 'reactstrap';
import { HiHeart } from 'react-icons/hi';

class Vendormap extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             flag:false
        }
    }
    
    componentDidUpdate(){
        if(this.props.vendor.subfilter){
            var x = this.props.vendor.vendor.products.filter((el)=>{return el.subcategory==this.props.vendor.subfilter}).length
       for(let i = 0;i<x;i++){
        if(document.getElementById(i).innerHTML.length>39){
            document.getElementById(i).className="card-text font2 spacing text-center"
        }else{
            document.getElementById(i).className="card-text font3 spacing text-center"
        }
       }
                   
    }     
        
    }
    navlink1121=(id)=>{
        this.props.history.push(`/vendor/1/${id}/cid`)
     }
    onadjust1=(i)=>{
        
            if(document.getElementById(i).innerHTML.length>39){
                document.getElementById(i).className="card-text font2 spacing text-center"
            }else{
                document.getElementById(i).className="card-text font3 spacing text-center"
            
        }
        
        
    }
    viewcombo=(id,cid)=>{
        this.props.history.push(`/vendor/1/${id}/${cid}`)
    } 
    render() {
        
        if(this.props.vendor.datastate=="NOT_INITIALIZED" || this.props.vendor.datastate=="FETCHING"){
            return (
                
                <Spinner color="primary" className="ml-5 mt-5" />
           
            );
       }
        else {
           
        return (
            
            <div style={{marginTop:"0rem"}}>
                <div className="ml-2 col-md-12"></div>
            <div className="row center mr-5">
                {this.props.vendor.vendor.products.filter((el)=>{if(this.props.vendor.subfilter==""){return el}
                else{
                    return el.subcategory==this.props.vendor.subfilter
                }})
                
                .map((el,index)=>(
                        <div className="col-md-2 margincard" onLoad={()=>this.onadjust1(index)}>
                            <div className="card colors" style={{width: '14rem'}}>
                            <span className="badger text-center">20%</span>
                            <span className="badger2 text-center">New</span>
                            <img className="card-img-top sizeimg" src={process.env.PUBLIC_URL + "/Red chili- Exotic-IMG.jpg"} alt="Card image cap"/>
                            <span  className="iconimg iconimg2 text-center"><HiHeart /></span>   
                            <div className="card-body colors">
                            <p id={index} onClick={()=>this.navlink1121(el.pid)}>
                            {el.name.length>45?el.name.slice(0,45)+"...":el.name}</p>
                            <p className="card-text font1 spacing text-center">500gm{el.combo?<button onClick={()=>this.viewcombo(el.pid,el.combo)} className="btn mybutton btn-sm">Show Combo</button>:null}</p>
                            <p className="express spacing text-center">Express Delivery:<span className="text-danger"> Available</span></p>
                            <p className="card-text text-center spacing font5"><NavLink className="navcolor text-success" to={`/vendor/${el.id}/id2/cid`}>Fulfilled by {el.vendor.length>19?el.vendor.slice(0,19)+"...":el.vendor}</NavLink></p>
                            </div>

                            <div class="card-footer bg-transparent border-light">
                                <span className="font6">₹ 199.85 </span><span className="font7"><s>₹ 130</s></span>
                                 <button className="btn btn-outline-warning buttoncard btn-sm ml-2">Add to Cart</button>
                            </div>
                            </div>
                            </div>
               
                ))}
            </div>
            </div>

        )
                    }
    }
}
const mapStateToProps=state=>({
    vendor:state.vendor,
})

export default connect(mapStateToProps)(withRouter(Vendormap));