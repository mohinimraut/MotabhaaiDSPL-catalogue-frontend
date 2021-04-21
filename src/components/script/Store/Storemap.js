import React, { Component } from 'react';
import './Storemap.css';
import {connect} from 'react-redux';
import {withRouter,NavLink} from 'react-router-dom';

class Storemap extends Component {
    navlink1121=(id)=>{
        this.props.history.push(`/vendor/1/id2/cid`)

    }
    render() {
        return (
            <div style={{marginTop:"-2rem"}}>
                <div className="ml-2 col-md-12"></div>
            <div className="row center mr-5">
                {this.props.shop.filter((el)=>{if(this.props.store.substore){return el.category==this.props.store.substore}
                                                else{return el}})
                
                .map((el,index)=>(
                        <div className="col-md-2 margincard">
                            <div className="card colors" style={{width: '14rem'}}>
                            
                            <img className="card-img-top sizeimg" src={process.env.PUBLIC_URL + "/Bharucha Dairy-img.jpg"} alt="Card image cap"/>
                            <div className="card-body colors">
                            <div className="d-flexstore"> 
                            <div className="div1store">  
                            <p className="storename" id={index} onClick={()=>this.navlink1121(el.pid)}>
                            {el.name.length>45?el.name.slice(0,45)+"...":el.name}</p>
                            <p className="locationstore">Mira Road 
                            <img className="lociconstore" src={process.env.PUBLIC_URL + "/header-location-Pin.svg"}></img>
                            <span className="distance22">2.5 km</span></p>
                            
                            </div>
                            <div className="div1store2" >
                                <img src={process.env.PUBLIC_URL + "/share-Icon-green.svg"}></img>
                            </div>
                            </div>
                            </div>

                            </div>
                            </div>
               
                ))}
            </div>
            </div>
        )
    }
}
const mapStateToProps=state=>({
    store:state.store
  });
  
  export default connect (mapStateToProps)(withRouter(Storemap));