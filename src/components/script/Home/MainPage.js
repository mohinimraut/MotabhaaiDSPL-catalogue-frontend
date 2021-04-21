import React, { Component } from 'react'

import Dashboard from '../Dashboard/Dashboard'
import Bar from './Bar'
import Navbarlog from './Navbarlog'
import Navbarlog2 from './Navbarlog2'
import Productdisplay from './Productsdisplay'
import CatCarousel from './CatCarousel'
import {connect} from 'react-redux';
import {withRouter,NavLink} from 'react-router-dom';

class MainPage extends Component {
    render() {
        return (
            <div>
                <Navbarlog2></Navbarlog2>  
                <Bar></Bar>
                <CatCarousel></CatCarousel>
            </div>
        )
    }
}
const mapStateToProps=state=>({
    product:state.product,
  })
  
  export default connect(mapStateToProps)(withRouter(MainPage));