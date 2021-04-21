import React, { Component } from 'react'
import './Pills2.css'
import { FaRegHeart } from 'react-icons/fa';
import Productmap from './Productmap';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class Pills2 extends Component {
    render() {
        return (
            <div>
  <ul className="ml-4 nav nav-pills mb-3" id="pills-tab" role="tablist">
    <li className="nav-item pill-1">
      <a className="nav-link active " id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Top Sale</a>
    </li>
    
  </ul>




  <div className="tab-content" id="pills-tabContent">
    <div className="tab-pane fade show active mr-4" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
      <Productmap id={"t"}/>
    </div>
   
  </div>
</div>

        )   
    }
}
const mapStateToProps=state=>({
  product:state.product,
})

export default Pills2;