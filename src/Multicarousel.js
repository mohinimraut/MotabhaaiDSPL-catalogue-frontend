import React from "react";
import "./Multicarousel.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from 'react-icons/io';
import Slider from "react-slick";
import { GiFruitBowl } from 'react-icons/gi';
function Arrow(props) {
  console.log("ooooooooyyyyyyyyy",props.type)
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

export default function App() {
  const renderSlides = () =>
    [{icon:<GiFruitBowl/>,item:"fruits"}, {icon:<GiFruitBowl/>,item:"vegetables"}, {icon:<GiFruitBowl/>,item:"Home care"},
    {icon:<GiFruitBowl/>,item:"Grocery"}, {icon:<GiFruitBowl/>,item:"Dairy"}, {icon:<GiFruitBowl/>,item:"Bakery"} ,
    {icon:<GiFruitBowl/>,item:"Hardware"}, {icon:<GiFruitBowl/>,item:"Staples"}, {icon:<GiFruitBowl/>,item:"Beverages"}, 
    {icon:<GiFruitBowl/>,item:"Plants"}, {icon:<GiFruitBowl/>,item:"Sweets"}].map(num => (
      <div>
        <h1 className="carousel-card ml-2">{num.icon}</h1>
        <p>{num.item}</p>
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
        slidesToShow= {7}
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
