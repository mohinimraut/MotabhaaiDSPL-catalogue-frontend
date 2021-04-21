import React, { Component } from 'react';
import './Menu.css';
import { BsBarChartFill } from 'react-icons/bs';
import {SidebarData2} from './SidebarData2';
import { IoIosArrowForward } from 'react-icons/io';
import {OnSelector,OnType} from './../../Redux/Products/ProductAction';
import {connect} from 'react-redux';
import {withRouter,NavLink} from 'react-router-dom';
class Menu extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             type:""
        }
    }
    
componentDidMount(){
 if(this.props.select=="hi"){
    document.getElementById("header55").className="card header29 mb-3"

 }
 else{
    document.getElementById("header55").className="card header mb-3"

 }
 if(this.props.product.type=="herbs"){
    if(document.getElementById("p0").innerHTML==""){
    document.getElementById("p0").innerHTML="-Herbs and Seasoning";
    document.getElementById("q0").innerHTML="-Leafy vegetables";
    document.getElementById("r0").innerHTML="-Root Vegetables";
    document.getElementById("s0").innerHTML="-Seasonal";
    document.getElementById("t0").innerHTML="-Exotic";
    document.getElementById("u0").innerHTML="-Cuts & Sprouts";
    document.getElementById("v0").innerHTML="-Cut & Peeled Veggies";
    document.getElementById("w0").innerHTML="-Cut Fruit, Tender Coconut";
    document.getElementById("x0").innerHTML="-Fresh Salads & Sprouts";
    document.getElementById("y0").innerHTML="-Recipe Packs";


    document.getElementById("i0").style.transform="rotate(90deg)"
    document.getElementById("p0").style.color="orange"

    }

else {
    document.getElementById("p0").innerHTML="";
    document.getElementById("q0").innerHTML="";
    document.getElementById("r0").innerHTML="";
    document.getElementById("s0").innerHTML="";
    document.getElementById("t0").innerHTML="";
    document.getElementById("u0").innerHTML="";
    document.getElementById("v0").innerHTML="";
    document.getElementById("w0").innerHTML="";
    document.getElementById("x0").innerHTML="";
    document.getElementById("y0").innerHTML="";
    document.getElementById("i0").style.transform="rotate(0deg)"
}
}
}
    activeclass=(id)=>{
        if(id=="-Herbs and Seasoning"){
            this.props.OnSelector("cat");
            this.props.OnType("herbs")
            this.props.history.push(`/products/herbs`)
            document.getElementById("p0").style.color="orange"

        }else if(id=="-Leafy vegetables"){
            this.props.OnSelector("cat");
            this.props.OnType("vege")
            this.props.history.push(`/products/vege`)
            document.getElementById("q0").style.color="orange"

        }
}
    onclick=(id)=>{
        if(`d${id}`=="d0"){
            if(document.getElementById("p0").innerHTML==""){
            document.getElementById("p0").innerHTML="-Herbs and Seasoning";
            document.getElementById("q0").innerHTML="-Leafy vegetables";
            document.getElementById("r0").innerHTML="-Root Vegetables";
            document.getElementById("s0").innerHTML="-Seasonal";
            document.getElementById("t0").innerHTML="-Exotic";
            document.getElementById("u0").innerHTML="-Cuts & Sprouts";
            document.getElementById("v0").innerHTML="-Cut & Peeled Veggies";
            document.getElementById("w0").innerHTML="-Cut Fruit, Tender Coconut";
            document.getElementById("x0").innerHTML="-Fresh Salads & Sprouts";
            document.getElementById("y0").innerHTML="-Recipe Packs";


            document.getElementById("i0").style.transform="rotate(90deg)"
            }
        
        else {
            document.getElementById("p0").innerHTML="";
            document.getElementById("q0").innerHTML="";
            document.getElementById("r0").innerHTML="";
            document.getElementById("s0").innerHTML="";
            document.getElementById("t0").innerHTML="";
            document.getElementById("u0").innerHTML="";
            document.getElementById("v0").innerHTML="";
            document.getElementById("w0").innerHTML="";
            document.getElementById("x0").innerHTML="";
            document.getElementById("y0").innerHTML="";
            document.getElementById("i0").style.transform="rotate(0deg)"
        }
    }
   else if(`d${id}`=="d1"){
        if(document.getElementById("p1").innerHTML==""){
        document.getElementById("p1").innerHTML="-atta, flours and sooji";
        document.getElementById("q1").innerHTML="-dals and pulses";
        document.getElementById("r1").innerHTML="-rice and rice products";
        document.getElementById("s1").innerHTML="-edible oils";
        document.getElementById("t1").innerHTML="-masalas and spices";
        document.getElementById("u1").innerHTML="-salt, sugar and jaggery";
        document.getElementById("v1").innerHTML="-Wheat and Soy";
        document.getElementById("w1").innerHTML="-Grains";
        document.getElementById("x1").innerHTML="-Dry fruits and Nuts";


        document.getElementById("i1").style.transform="rotate(90deg)"
        }
    
    else {
        document.getElementById("p1").innerHTML="";
        document.getElementById("q1").innerHTML="";
        document.getElementById("r1").innerHTML="";
        document.getElementById("s1").innerHTML="";
        document.getElementById("t1").innerHTML="";
        document.getElementById("u1").innerHTML="";
        document.getElementById("v1").innerHTML="";
        document.getElementById("w1").innerHTML="";
        document.getElementById("x1").innerHTML="";
        document.getElementById("i1").style.transform="rotate(0deg)"
    }
}
else if(`d${id}`=="d2"){
    if(document.getElementById("p2").innerHTML==""){
    document.getElementById("p2").innerHTML="-Biscuits & Cookies";
    document.getElementById("q2").innerHTML="-Noodle, Pasta, Vermicelli";
    document.getElementById("r2").innerHTML="-Breakfast Cereals";
    document.getElementById("s2").innerHTML="-Snacks & Namkeen";
    document.getElementById("t2").innerHTML="-Chocolates & Candies";
    document.getElementById("u2").innerHTML="-Ready To Cook & Eat";
    document.getElementById("v2").innerHTML="-Frozen Veggies & Snacks";
    document.getElementById("w2").innerHTML="-Spreads, Sauces, Ketchup";
    document.getElementById("x2").innerHTML="-Indian Sweets";
    document.getElementById("y2").innerHTML="-Pickles & Chutney";

    document.getElementById("i2").style.transform="rotate(90deg)"
    }

else {
    document.getElementById("p2").innerHTML="";
    document.getElementById("q2").innerHTML="";
    document.getElementById("r2").innerHTML="";
    document.getElementById("s2").innerHTML="";
    document.getElementById("t2").innerHTML="";
    document.getElementById("u2").innerHTML="";
    document.getElementById("v2").innerHTML="";
    document.getElementById("w2").innerHTML="";
    document.getElementById("x2").innerHTML="";
    document.getElementById("y2").innerHTML="";

    document.getElementById("i2").style.transform="rotate(0deg)"
}
}
else if(`d${id}`=="d3"){
    if(document.getElementById("p3").innerHTML==""){
    document.getElementById("p3").innerHTML="-Toast and Khari";
    document.getElementById("q3").innerHTML="-Cakes and Muffins";
    document.getElementById("r3").innerHTML="-Pastries and Bagels";
    document.getElementById("s3").innerHTML="-Breads and Buns";
    document.getElementById("t3").innerHTML="-Baked Cookies";
    document.getElementById("u3").innerHTML="-Bakery Snacks";
    document.getElementById("v3").innerHTML="-Batters and Mixes";
    document.getElementById("w3").innerHTML="-Paneer and Tofu";
    document.getElementById("x3").innerHTML="-Ghee and butter";
    document.getElementById("y3").innerHTML="-Panini, Focaccia, Pita";
    document.getElementById("z3").innerHTML="-Extracts & Flavouring";


    document.getElementById("i3").style.transform="rotate(90deg)"
    }

else {
    document.getElementById("p3").innerHTML="";
    document.getElementById("q3").innerHTML="";
    document.getElementById("r3").innerHTML="";
    document.getElementById("s3").innerHTML="";
    document.getElementById("t3").innerHTML="";
    document.getElementById("u3").innerHTML="";
    document.getElementById("v3").innerHTML="";
    document.getElementById("w3").innerHTML="";
    document.getElementById("x3").innerHTML="";
    document.getElementById("y3").innerHTML="";
    document.getElementById("z3").innerHTML="";

    document.getElementById("i3").style.transform="rotate(0deg)"
}
}
else if(`d${id}`=="d4"){
    if(document.getElementById("p4").innerHTML==""){
    document.getElementById("p4").innerHTML="-Tea";
    document.getElementById("q4").innerHTML="-Coffee";
    document.getElementById("r4").innerHTML="-Fruit juices";
    document.getElementById("s4").innerHTML="-Energy & Soft Drinks";
    document.getElementById("t4").innerHTML="-Health Drink & Supplement";
    document.getElementById("u4").innerHTML="-Soda & Flavoured Water";
   
    document.getElementById("i4").style.transform="rotate(90deg)"
    }

else {
    document.getElementById("p4").innerHTML="";
    document.getElementById("q4").innerHTML="";
    document.getElementById("r4").innerHTML="";
    document.getElementById("s4").innerHTML="";
    document.getElementById("t4").innerHTML="";
    document.getElementById("u4").innerHTML="";
   

    document.getElementById("i4").style.transform="rotate(0deg)"
}
}
else if(`d${id}`=="d5"){
    if(document.getElementById("p5").innerHTML==""){
    document.getElementById("p5").innerHTML="-Detergents";
    document.getElementById("q5").innerHTML="-Dishwash";
    document.getElementById("r5").innerHTML="-All Purpose Cleaners";
    document.getElementById("s5").innerHTML="-Fresheners & Repellents";
    document.getElementById("t5").innerHTML="-Mops, Brushes & Scrubs";
    document.getElementById("u5").innerHTML="-Electrical";
    document.getElementById("v5").innerHTML="-Disposables";
    document.getElementById("w5").innerHTML="-Pooja Needs";
    document.getElementById("x5").innerHTML="-Shoe Care";
    document.getElementById("y5").innerHTML="-Bathroom & Laundry Accessories";
    document.getElementById("z5").innerHTML="-Covid Essentials";


    document.getElementById("i5").style.transform="rotate(90deg)"
    }

else {
    document.getElementById("p5").innerHTML="";
    document.getElementById("q5").innerHTML="";
    document.getElementById("r5").innerHTML="";
    document.getElementById("s5").innerHTML="";
    document.getElementById("t5").innerHTML="";
    document.getElementById("u5").innerHTML="";
    document.getElementById("v5").innerHTML="";
    document.getElementById("w5").innerHTML="";
    document.getElementById("x5").innerHTML="";
    document.getElementById("y5").innerHTML="";
    document.getElementById("z5").innerHTML="";

    document.getElementById("i5").style.transform="rotate(0deg)"
}
}
else if(`d${id}`=="d6"){
    if(document.getElementById("p6").innerHTML==""){
    document.getElementById("p6").innerHTML="-Other Flowers";
    document.getElementById("q6").innerHTML="-Flower Bouquets, Bunches";
    document.getElementById("r6").innerHTML="-Marigold";
    
    document.getElementById("i6").style.transform="rotate(90deg)"
    }

else {
    document.getElementById("p6").innerHTML="";
    document.getElementById("q6").innerHTML="";
    document.getElementById("r6").innerHTML="";
    
    document.getElementById("i6").style.transform="rotate(0deg)"
}
}
else if(`d${id}`=="d7"){
    if(document.getElementById("p7").innerHTML==""){
    document.getElementById("p7").innerHTML="-Hair Care";
    document.getElementById("q7").innerHTML="-Oral Care";
    document.getElementById("r7").innerHTML="-Skin Care";
    document.getElementById("s7").innerHTML="-Bath & Hand Wash";
    document.getElementById("t7").innerHTML="-Body Wash & Bathing Accessories";
    document.getElementById("u7").innerHTML="-Feminine Hygiene";
    document.getElementById("v7").innerHTML="-Men's Grooming";
    document.getElementById("w7").innerHTML="-Deo & Fragrances";
    document.getElementById("x7").innerHTML="-Health & Wellness";
    document.getElementById("y7").innerHTML="-Makeup";

    document.getElementById("i7").style.transform="rotate(90deg)"
    }

else {
    document.getElementById("p7").innerHTML="";
    document.getElementById("q7").innerHTML="";
    document.getElementById("r7").innerHTML="";
    document.getElementById("s7").innerHTML="";
    document.getElementById("t7").innerHTML="";
    document.getElementById("u7").innerHTML="";
    document.getElementById("v7").innerHTML="";
    document.getElementById("w7").innerHTML="";
    document.getElementById("x7").innerHTML="";
    document.getElementById("y7").innerHTML="";

    document.getElementById("i7").style.transform="rotate(0deg)"
}
}
else if(`d${id}`=="d8"){
    if(document.getElementById("p8").innerHTML==""){
    document.getElementById("p8").innerHTML="-Power Tools";
    document.getElementById("q8").innerHTML="-Pumps and Motors";
    document.getElementById("r8").innerHTML="-Power generations & transformers";
    document.getElementById("s8").innerHTML="-Wires & cables";
    document.getElementById("t8").innerHTML="-Switches & sockets";
    document.getElementById("u8").innerHTML="-Circuits breakers & fuses";
    document.getElementById("v8").innerHTML="-Distribution Boards";
    document.getElementById("w8").innerHTML="-Relays & contractors";
    document.getElementById("x8").innerHTML="-Capacitors";
    document.getElementById("y8").innerHTML="-Energy meters";
    document.getElementById("z8").innerHTML="-Industrials Switches & controls";
    document.getElementById("a8").innerHTML="-Power supplies";
    document.getElementById("b8").innerHTML="-Safety & Disconnect switches";
    document.getElementById("c8").innerHTML="-Appliances and utilities";
    document.getElementById("h8").innerHTML="-Fans";
    document.getElementById("e8").innerHTML="-Gas stoves & hot plates / Hobs";
    document.getElementById("f8").innerHTML="-Grinders & Juice extractors";
    document.getElementById("g8").innerHTML="-Gardening & landscaping";

    document.getElementById("i8").style.transform="rotate(90deg)"
    }

else {
    document.getElementById("p8").innerHTML="";
    document.getElementById("q8").innerHTML="";
    document.getElementById("r8").innerHTML="";
    document.getElementById("s8").innerHTML="";
    document.getElementById("t8").innerHTML="";
    document.getElementById("u8").innerHTML="";
    document.getElementById("v8").innerHTML="";
    document.getElementById("w8").innerHTML="";
    document.getElementById("x8").innerHTML="";
    document.getElementById("y8").innerHTML="";
    document.getElementById("z8").innerHTML="";
    document.getElementById("a8").innerHTML="";
    document.getElementById("b8").innerHTML="";
    document.getElementById("c8").innerHTML="";
    document.getElementById("h8").innerHTML="";
    document.getElementById("e8").innerHTML="";
    document.getElementById("f8").innerHTML="";
    document.getElementById("g8").innerHTML="";

    document.getElementById("i8").style.transform="rotate(0deg)"
}
}
    }

    render() {
        return (
            <div>
                <div className="card header mb-3" id="header55">
                    <div className="card-header py-1">Shop By Categories{this.props.select=="hi"?null:<img className="caticon" src="Shop-By-Categories-icn.svg"></img>} </div>
                    <div className="card-body bg-light text-dark ">
                        {SidebarData2.map((el,index)=>(
                                <div className="sizer" >
                                    
                                <p onClick={()=>this.onclick(index)} id={`d${index}`}>
                                    {this.props.select=="hi"?null:<img className="iconssvg" src={el.icon}></img>}{el.title}
                                <IoIosArrowForward id={`i${index}`}  /></p>
                                <p id={`p${index}`} onClick={()=>this.activeclass(document.getElementById(`p${index}`).innerHTML)}></p>

                                <p id={`q${index}`} onClick={()=>this.activeclass(document.getElementById(`q${index}`).innerHTML)}></p>
                                <p id={`r${index}`} onClick={()=>this.activeclass(index+2)}></p>
                                <p id={`s${index}`} onClick={()=>this.activeclass(index+3)} ></p>
                                <p id={`t${index}`} onClick={()=>this.activeclass(index+4)}></p>
                                <p id={`u${index}`} onClick={()=>this.activeclass(index+5)}></p>
                                <p id={`v${index}`} onClick={()=>this.activeclass(index+6)} ></p>
                                <p id={`w${index}`} onClick={()=>this.activeclass(index+7)}></p>
                                <p id={`x${index}`} onClick={()=>this.activeclass(index+8)}></p>
                                <p id={`y${index}`} onClick={()=>this.activeclass(index+9)} ></p>
                                <p id={`z${index}`} onClick={()=>this.activeclass(index+10)}></p>
                                <p id={`a${index}`} onClick={()=>this.activeclass(index+11)}></p>
                                <p id={`b${index}`} onClick={()=>this.activeclass(index+12)} ></p>
                                <p id={`c${index}`} onClick={()=>this.activeclass(index+13)}></p>
                                <p id={`h${index}`} onClick={()=>this.activeclass(index+14)}></p>
                                <p id={`e${index}`} onClick={()=>this.activeclass(index+15)} ></p>
                                <p id={`f${index}`} onClick={()=>this.activeclass(index+16)}></p>
                                <p id={`g${index}`} onClick={()=>this.activeclass(index+17)}></p>
                                </div>
                            ))}
                    </div>
                    </div>
            </div>
        )
    }
}
const mapStateToProps=state=>({
    product:state.product,
})
export default connect(mapStateToProps,{OnSelector,OnType})(withRouter(Menu));