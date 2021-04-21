import React, { Component } from 'react'
import { Spinner,Search } from 'reactstrap';
import {connect} from 'react-redux';
import {withRouter,NavLink} from 'react-router-dom';
import {OnSub} from './../../Redux/Vendor/VendorAction';
import './Vendorfilter.css'
class Vendorfilter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             category:[],
             subcat:[],
             flag:false
        }
    }
    onsub=(data)=>{
        this.props.OnSub(data);
    }
   async componentDidMount(){
        var mac3=[];
                for(let i=0;i<this.props.vendor.vendor.products.length;i++){
                    mac3[i]=this.props.vendor.vendor.products[i].category;
                }
            var mac4 = mac3.filter((el,index)=>{
                return mac3.indexOf(el)===index;
            })
            this.setState({category:mac4})
            var flag =[]
           flag = await this.counter11()
          if(flag){
            var k = Object.keys(flag);
            var v = Object.values(flag);
              console.log(v)  
              console.log(k)
              console.log(flag)
              for(let j=0;j<v.length;j++){
                this.state.subcat[j]={"type":"","count":""};
              }
              for(let i=0;i<v.length;i++){
                  this.state.subcat[i].type=k[i];
                  this.state.subcat[i].count=v[i];
              }
              if(this.state.subcat.length>0){
                this.setState({flag:true});
              }
          }
               }
    counter11=()=>{
        var mac5=[];
        for(let i=0;i<this.props.vendor.vendor.products.length;i++){
            mac5[i]=this.props.vendor.vendor.products[i].subcategory;
        }
        
        var mac6 = [];
        mac6 =  mac5.reduce((obj, e) => {
            obj[e] = (obj[e] || 0) + 1;
            return obj;
            }, {});
        return mac6
    }           
    render() {
        if(this.state.flag==false){
            return (
                
                    <Spinner color="primary" className="ml-5 mt-5" />
                            
            );
       }
        else if(this.state.flag==true) {
        return (
            <div className="card sizer1">
                <p>{this.state.category}</p>
               {this.state.subcat.map((el,index)=>(
                   <p onClick={()=>this.onsub(el.type)}>{el.type}      {el.count}</p>
               ))}
                
            </div>
        )
    
}
    }
}
const mapStateToProps=state=>({
    vendor:state.vendor,
  });
  
  export default connect (mapStateToProps, {OnSub})(withRouter(Vendorfilter));