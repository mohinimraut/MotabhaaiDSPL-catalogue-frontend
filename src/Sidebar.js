import { formatCountdown } from 'antd/lib/statistic/utils'
import React, { Component } from 'react'
import './Sidebar.css'
import {SidebarData} from './SidebarData'
import { IoIosArrowForward } from 'react-icons/io';
import {NavLink} from 'react-router-dom';
import Pills from './Pills'

export default class Sidebar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             temp:""
        }
    }
    activeclass=(id)=>{
        if(id==0){
        document.getElementById(`p${id}`).style.color="orange"
        document.getElementById(`q${id}`).style.color="black"
        document.getElementById(`r${id}`).style.color="black"
        }
       else if(id==1){
            document.getElementById(`p${id-1}`).style.color="black"
            document.getElementById(`q${id-1}`).style.color="orange"
            document.getElementById(`r${id-1}`).style.color="black"
            }
            else{
                document.getElementById(`p${id-2}`).style.color="black"
                document.getElementById(`q${id-2}`).style.color="black"
                document.getElementById(`r${id-2}`).style.color="orange" 
            }

    }
    onclick=(id)=>{
        if(`d${id}`=="d0"){
            if(document.getElementById("p0").innerHTML==""){
            document.getElementById("p0").innerHTML="-Only herbs fdfdfdfdf";
            document.getElementById("q0").innerHTML="-Only herbs season";
            document.getElementById("r0").innerHTML="-Only herbs vary";
            document.getElementById("i0").style.transform="rotate(90deg)"
            }
        
        else {
            document.getElementById("p0").innerHTML="";
            document.getElementById("q0").innerHTML="";
            document.getElementById("r0").innerHTML="";
            document.getElementById("i0").style.transform="rotate(0deg)"
        }
    }

    }
    render() {
        return (
            <div className="container-fluid">
                    <div className="row mar8">
                        <div className="col-2">
                            {SidebarData.map((el,index)=>(
                                <div className="sizer" >
                                <p onClick={()=>this.onclick(index)} id={`d${index}`}>{el.title}{el.subNav?
                                <IoIosArrowForward id={`i${index}`}  />:""}</p>
                                <p id={`p${index}`} onClick={()=>this.activeclass(index)} ></p>
                                <p id={`q${index}`} onClick={()=>this.activeclass(index+1)}></p>
                                <p id={`r${index}`} onClick={()=>this.activeclass(index+2)}></p>
                                </div>
                            ))}
                        </div>
                        <div className="col-10">
                        <Pills></Pills>
                        </div>
                        
                    </div>
            </div>
        )
    }
}
