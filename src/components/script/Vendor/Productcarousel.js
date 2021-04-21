import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { HiHeart } from 'react-icons/hi';

function Arrow(props) {
  
  let className = props.type === "prev" ? "prevArrow":"nextArrow";
  className += " arrow";
  console.log("className",className)
  const char = props.type === "next" ? "›" : "‹";
  return (
    <span className={className} onClick={props.onClick}>
      {char}
    </span>
  );
}

function customPaging(i) {
  return <span>{i + 1}</span>;
}

function appendDots(dots) {
  return (
    <div style={{ backgroundColor: "#eee" }}>
      <ul style={{ margin: "3px" }}> {dots} </ul>
    </div>
  );
}

export default function App(props) {
  const renderSlides = () =>
    props.product.map((el,index) => (
      <div>
        <div className="col-md-2 margincard1">
                            <div className="card colors" style={{width: '14rem'}}>
                            <span className="badger text-center">20%</span>
                            <span className="badger2 text-center">New</span>
                            <img className="card-img-top sizeimg" src={process.env.PUBLIC_URL + "/Red chili- Exotic-IMG.jpg"} alt="Card image cap"/>
                            <span  className="iconimg iconimg2 text-center"><HiHeart /></span>   
                            <div className="card-body colors">
                            <p id={index} >
                            {el.name.length>45?el.name.slice(0,45)+"...":el.name}</p>
                            <p className="card-text font1 spacing text-center">500gm{el.combo?<button  className="btn mybutton btn-sm">Show Combo</button>:null}</p>
                            <p className="express spacing text-center">Express Delivery:<span className="text-danger"> Available</span></p>
                            <p className="card-text text-center spacing font5">Fulfilled by {el.vendor.length>19?el.vendor.slice(0,19)+"...":el.vendor}</p>
                            </div>

                            <div class="card-footer bg-transparent border-light">
                                <span className="font6">₹ 199.85 </span><span className="font7"><s>₹ 130</s></span>
                                 <button className="btn btn-outline-warning buttoncard btn-sm ml-2">Add to Cart</button>
                            </div>
                            </div>
                            </div>
      </div>
    ));

  return (
    <div className="container App"> 
      <Slider
        nextArrow={<Arrow type="next" />}
        prevArrow={<Arrow type="prev" />}
        dots={false}
        customPaging={customPaging}
        appendDots={appendDots}
        infinite= {true}
        speed= {100}
        slidesToShow= {5}
        slidesToScroll= {1}
        arrows={true}
        autoplay={false}
        autoplaySpeed={1000}
      >
        {renderSlides()}
      </Slider>
    </div>
  );
}
