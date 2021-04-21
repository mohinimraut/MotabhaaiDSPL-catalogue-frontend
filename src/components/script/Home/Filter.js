import React, { Component } from 'react'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { Spinner,Search } from 'reactstrap';
import {OnSort,OnFilter} from './../../Redux/Products/ProductAction';

class Filter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             vendor:[]
        }
    }
    filter=(el)=>{
        this.props.OnFilter(el)
        }

    componentDidMount(){
           
            var mac3=[];
                for(let i=0;i<this.props.vendor.length;i++){
                    mac3[i]=this.props.vendor[i].vendor;
                }
            var mac4 = mac3.filter((el,index)=>{
                return mac3.indexOf(el)===index;
            })
            this.setState({vendor:mac4})

        this.props.OnSort()
    
}
    render() {
        //if(this.props.product.datastate=='FETCHED_SUCCESS'){
        //    this.sorter()
       // }
        if(this.props.product.sorted==false){
            return (
                
                <Spinner color="primary" className="ml-5 mt-5" />
           
            );
       }else{
        return (
            <div>
               {this.state.vendor.map((el,index)=>(
                   <p onClick={()=>this.filter(el)}>{el}</p>
       ))} 
            </div>
        )
       }
        
    }
}
const mapStateToProps=state=>({
    product:state.product,
})

export default connect(mapStateToProps,{OnSort,OnFilter})(withRouter(Filter));