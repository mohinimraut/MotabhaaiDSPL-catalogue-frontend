import React, { Component } from 'react'
import './Productdetails.css';
import { FiTruck } from 'react-icons/fi';
import { GoCreditCard } from 'react-icons/go';
import {connect} from 'react-redux';
import {withRouter,NavLink,Redirect } from 'react-router-dom';

class Productdetails extends Component {
    componentDidMount(){
        console.log(this.props.details2)
    }
    show=(id1,id2)=>{
        this.props.history.push(`/vendor/1/${id1}/${id2}`)
    }
    render() {
        return (
            <div className="mb-5 ml-5">
                <div className="card widthcard">
                    <div className="card-body">
                     <div className="d-flex2">
                        <div className="div2"><img className="imagepro" src={process.env.PUBLIC_URL + "/French Green Beans - Exotic-IMG.jpg"}></img></div>
                        <div className="div3">
                            <p className="fulfill">Fulfilled by {this.props.details[0].vendor}</p>
                            {this.props.details2.length>0?<p className="prodname">{this.props.details2[0].name}</p>:
                            <p className="prodname">{this.props.details[0].name}</p>}
                            <p className="weight">500gm</p>
                            <p className="price1">₹ 199.85 <span className="price2"><s>₹ 300</s></span></p>
                            <button className="btn btn-outline-warning btncart">Add To Cart</button>
                            <p className="edelivery">Express Delivery: <span className="available">Available</span></p>
                            </div>
                            <div className="div4 text-right">
                                <img className="shareicon" src={process.env.PUBLIC_URL + "/share-Icon-green.svg"}></img>
                                <p className="bdg1"><span className="badge badge1">New</span></p>
                                <p className="bdg2"><span className="badge badge2">20%</span></p>
                                {this.props.details2.length>0?null:<button onClick={()=>this.show(this.props.details[0].pid,this.props.details[0].combo)} className="btn buttoncombo">Show Combo</button>}
                            </div>
                            <div className="div5">
                                <div className="card cardpro">
                                    <div className="widthcard2">
                                    <FiTruck className="truck"></FiTruck>
                                    <p className="tr1">Motabhaai</p>
                                    </div>
                                    <p className="tr2">Shopping</p>
                                   
                                </div>
                                <div className="card cardpro2">
                                    <div className="widthcard22">
                                    <GoCreditCard className="truck1"></GoCreditCard>
                                    <p className="tr11">Payment</p>
                                    </div>
                                    <p className="tr22">Secured System</p>
                                   
                                </div>

                            </div>
                    </div>   
                   
                    </div>
                </div>
            </div>

        )
    }
}
const mapStateToProps=state=>({
    
})
export default connect(mapStateToProps)(withRouter(Productdetails));