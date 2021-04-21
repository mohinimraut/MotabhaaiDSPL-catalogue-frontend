import React, { Component } from 'react'
import './Sliderselect.css'
import 'jquery/dist/jquery.js';
import $ from 'jquery';
import 'ion-rangeslider/css/ion.rangeSlider.min.css';
import 'ion-rangeslider/js/ion.rangeSlider.min.js';
import {OnPriceHigh,OnPriceLow} from './../../Redux/Products/ProductAction';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';


class Sliderselect extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       low:"",
       high:""
    }
  }
  
  componentDidMount(){
    var inputLeft = document.getElementById("input-left");
    var inputRight = document.getElementById("input-right");
    
    var thumbLeft = document.querySelector(".slider > .thumb.left");
    var thumbRight = document.querySelector(".slider > .thumb.right");
    var range = document.querySelector(".slider > .range");
    
    function setLeftValue() {
      var _this = inputLeft,
        min = parseInt(_this.min),
        max = parseInt(_this.max);
    
      _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);
    
      var percent = ((_this.value - min) / (max - min)) * 100;
    
      thumbLeft.style.left = percent + "%";
      range.style.left = percent + "%";
    }
    setLeftValue();
    
    function setRightValue() {
      var _this = inputRight,
        min = parseInt(_this.min),
        max = parseInt(_this.max);
    
      _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);
    
      var percent = ((_this.value - min) / (max - min)) * 100;
    
      thumbRight.style.right = (100 - percent) + "%";
      range.style.right = (100 - percent) + "%";
    }
    setRightValue();
    
    inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue);

inputLeft.addEventListener("mouseover", function() {
	thumbLeft.classList.add("hover");
});
inputLeft.addEventListener("mouseout", function() {
	thumbLeft.classList.remove("hover");
});
inputLeft.addEventListener("mousedown", function() {
	thumbLeft.classList.add("active");
});
inputLeft.addEventListener("mouseup", function() {
	thumbLeft.classList.remove("active");
});

inputRight.addEventListener("mouseover", function() {
	thumbRight.classList.add("hover");
});
inputRight.addEventListener("mouseout", function() {
	thumbRight.classList.remove("hover");
});
inputRight.addEventListener("mousedown", function() {
	thumbRight.classList.add("active");
});
inputRight.addEventListener("mouseup", function() {
	thumbRight.classList.remove("active");
});

  }

handle1=(e)=>{
    this.props.OnPriceLow(document.getElementById("input-left").value)
}
handle2=(e)=>{
  this.props.OnPriceHigh(document.getElementById("input-right").value)

}
  render() {
    return (
      
<div className="middle">
  <div className="multi-range-slider">
    <input type="range" id="input-left" name="low" onClick={this.handle1} defaultValue={25} min={0} max={100} />
    <input type="range" id="input-right" name="high" onClick={this.handle2} defaultValue={75} min={0} max={100} />

    <div className="slider">
      <div className="track" />
      <div className="range" />
      <div className="thumb left" />
      <div className="thumb right" />
    </div>
  </div>
</div>

    )
  }
}

const mapStateToProps=state=>({
  product:state.product,
})
export default connect (mapStateToProps, {OnPriceHigh,OnPriceLow})(withRouter(Sliderselect));