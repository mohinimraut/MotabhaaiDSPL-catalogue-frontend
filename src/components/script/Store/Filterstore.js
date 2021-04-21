import React, { Component } from 'react'
import { Spinner,Search } from 'reactstrap';
import {connect} from 'react-redux';
import {withRouter,NavLink} from 'react-router-dom';
import {OnSubstore} from './../../Redux/Stores/StoreAction';
import './Storefilter.css';

class Filterstore extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             category:[],
             subcat:[],
             flag:false
        }
    }
    onsub=(data,id)=>{
        this.props.OnSubstore(data);
        for(let i=0;i<this.state.subcat.length;i++){
            document.getElementById(`store${i}`).style.color="black"
        }
        document.getElementById(`store${id}`).style.color="orange"
    }
    counter11=()=>{
        var mac5=[];
        for(let i=0;i<this.props.store.store.length;i++){
            mac5[i]=this.props.store.store[i].category;
        }
        
        var mac6 = [];
        mac6 =  mac5.reduce((obj, e) => {
            obj[e] = (obj[e] || 0) + 1;
            return obj;
            }, {});
        return mac6
    }       
   async componentDidMount(){
        
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
      
    render() {
        if(this.state.flag==false){
            return (
                
                    <Spinner color="primary" className="ml-5 mt-5" />
                            
            );
       }
        else if(this.state.flag==true) {
        return (
            <div className="card sizer11">
                <p>{this.state.category}</p>
               {this.state.subcat.map((el,index)=>(
                   <p id={`store${index}`} onClick={()=>this.onsub(el.type,index)}>{el.type}      ({el.count})</p>
               ))}
                
            </div>
        )
    
}
    }
}
const mapStateToProps=state=>({
    store:state.store,
  });
  
  export default connect (mapStateToProps, {OnSubstore})(withRouter(Filterstore));