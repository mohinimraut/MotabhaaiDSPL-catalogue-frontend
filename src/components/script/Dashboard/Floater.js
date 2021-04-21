import React, { Component } from 'react';
import './Floater.css';
import { Modal, Button } from 'antd';
import $ from 'jquery';

export default class Floater extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            visible:false,
            confirmLoading:false,
            modalText:"content",
            value:1
        }
    }
    
    
    handleOk = () => {
        this.setState({modalText:'The modal will be closed after two seconds'});
        this.setState({confirmLoading:true})
        setTimeout(() => {
        this.setState({visible:false});
        this.setState({confirmLoading:false});
        }, 2000);
      }
    
      handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({visible:false})      
    }
    myalert=(hi)=>{
        alert(hi)
    }
    cart=(hi)=>{
        $('.modal-backdrop').hide();
    }
    incr=()=>{
        var x =Number(document.getElementById('io12').value)+1;
        document.getElementById('io12').value=x;
        document.getElementById('pf').innerHTML=129.25*x
    }
    decr=()=>{
        if(document.getElementById('io12').value>1){
        var m =Number(document.getElementById('io12').value)-1;
        document.getElementById('io12').value=m;
        document.getElementById('pf').innerHTML=129.25*m

        }
    }
    
    render() {
        return (
                <>
                <div className="box55" onClick={()=>this.cart("hi")} data-toggle="modal" data-target="#exampleModal" >
                    <img className="iconsticky" src={process.env.PUBLIC_URL + "/sticky-cart-icn.svg"}></img>
                    <p className="item">item</p>
                    <p className="stickyprice">$ 256</p>
                    
                </div>
                
                <div className="modal fade" id="exampleModal"  tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <img className="carticon2" src={process.env.PUBLIC_URL + "/header-cart-icn.svg"}></img>
                            <span className="badgecart2">5</span>
                            <p className="textfield">5 items aded to cart</p>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><img className="cross" src={process.env.PUBLIC_URL + "/close-button-icn.svg"}></img></span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="d-flex3">
                                <div className="divcart1">
                                    <img className="imagecart22" src={process.env.PUBLIC_URL + "/Clementines - Exotic-IMG.jpg"}></img>
                                    
                                </div>
                                <div className="divcart2">
                                    <p className="namecart22">Cherry - Exotic<span className="qtycart">500 gm</span></p>
                                    <p className="stockcart">Only 2 left in stock - order soon</p>
                                    <p className="vendorcart33">Fulfilled by:<span className="vendorcart22"> Chunilal Fruits & Vegetables</span></p>
                                    <p className="buttonscart22"><span  onClick={()=>this.myalert("hi")}>Delete</span>  <span>|</span> <span>Save for later</span></p>
                                </div>
                                <div className="divcart3">
                                    <p className="pricecart22">₹ 129.25</p>
                                    <button className="btn buttoncart33" onClick={this.decr}>-</button><input className="inputcart22" id="io12" value={1}></input><button onClick={this.incr} className="btn buttoncart44">+</button>
                                    <p><p className="rupee" id="jjh">₹</p><p id="pf" className="finalprice"> 129.25 </p></p>
                                </div>
                                <div className="divcart4">
                                    <img className="secondclose" src={process.env.PUBLIC_URL + "/close-button-icn.svg"}></img>
                                    </div>

                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn buttoncheckout" data-dismiss="modal">Checkout
                            <span className="chkpice">₹ 235</span></button>
                            
                        </div>
                        </div>
                    </div>
                    </div>
                </>
        )
    }
}
