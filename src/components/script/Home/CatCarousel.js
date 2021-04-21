import React from "react";
import "./CatCarousel.css";

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
    [{icon:<img className="carouselicons" src="Fruits&-Vegetables-icn-big.svg"></img>,item:"fruits"},
     {icon:<img className="carouselicons2" src="Flower-Bouquets,-Bunches-icn-big.svg"></img>,item:"Flower, Bouquets, Bunches"}, 
    {icon:<img className="carouselicons2" src="home-care-icn-big.svg"></img>,item:"Home care"},
    {icon:<GiFruitBowl/>,item:"Grocery"}, {icon:<GiFruitBowl/>,item:"Dairy"},
     {icon:<img className="carouselicons2" src="Snacks-&-Branded-Foods-icn-big.svg"></img>,item:"Snacks & Branded Foods"} ,
    {icon:<GiFruitBowl/>,item:"Hardware"}, {icon:<img className="carouselicons2" src="Staples-icn-big.svg"></img>,item:"Staples"}, {icon:<GiFruitBowl/>,item:"Beverages"}, 
    {icon:<GiFruitBowl/>,item:"Plants"}, {icon:<img className="carouselicons2" src="Personal-Care-icn-big.svg"></img>,item:"Personal Care"}].map(num => (
      <div>
        <h1 className="carousel-card ml-2">{num.icon}</h1>
        <p className="text-dark">{num.item}</p>
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
