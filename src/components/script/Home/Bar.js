import React, { Component } from 'react';
import './Bar.css';
import {onSearch,OnSelector} from './../../Redux/Products/ProductAction';
import {withRouter} from 'react-router-dom'; 
import {connect} from 'react-redux';
import Menu from './Menu';

class Bar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             search:"",
             category:"",
             lat:null,
             long:null
        }
    }
    componentDidMount(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition);
          } else { 
            alert("Geolocation is not supported by this browser.")
          }
        }
    
    
 showPosition=(position)=> {
    this.setState ({lat:position.coords.latitude,
                    long:position.coords.longitude})
  }
    handle=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit=()=>{
        const obj={
            search:this.state.search,
            categories:this.state.category,
            lat:this.state.lat,
            long:this.state.long
        }
            this.props.OnSelector("");
            this.props.onSearch(obj);
        
    }
    render() {
        return (
            <div className="container-fluid mt-2">
                <div className="row m-mar2 mt-4">

                <div className="col-3">
                    <Menu />

                    </div>
                    <div className="col-lg-9 marg">

                    <div className="card text-dark">
                            <img className="card-img1" src="banner-img.jpg" alt="Card image" />
                            
                            </div>

                            </div>
                    
                    </div>


                    </div>
            
        )
    }
}
const mapStateToProps=state=>({
    product:state.product,
});

export default connect (mapStateToProps, {onSearch,OnSelector})(withRouter(Bar));