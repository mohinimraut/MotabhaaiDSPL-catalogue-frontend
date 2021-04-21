import { formatCountdown } from 'antd/lib/statistic/utils'
import React, { Component } from 'react'
import './Productdisplay.css'
import {SidebarData2} from './SidebarData2'
import { IoIosArrowForward } from 'react-icons/io';
import Pills2 from './Pills2'
import Sliderselect from './Sliderselect'
import {onSearch} from './../../Redux/Products/ProductAction';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Menu from './Menu';
import { Spinner,Search } from 'reactstrap';
import Filter from './Filter';

class Productdisplay extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             temp:"",
             flag:"",
             temp2:"",
             vendor:[]
        }
    }
    

    componentDidMount(){
        //this.props.OnSelector("");
        //this.props.OnFilter();
        this.props.onSearch(this.props.match.params.item);
    }
    
   // _onbuttonclick=()=>{
        //this.setState({count: this.state.count + Number});
    //    alert("Number");
   // }
    render() {
        if(this.props.product.datastate=="NOT_INITIALIZED" || this.props.product.datastate=="FETCHING"){
            return (
                <div className="container-fluid">
                    <div className="row mar8">
                        <div className="col-3">
                            <Menu select={"hi"}></Menu>
                            <Spinner color="primary" className="ml-5 mt-5" />
                            </div>
                               
                        <div className="col-9">
                        <Spinner color="primary" className="ml-5 mt-5" />
                        </div>
                        
                    </div>
            </div>
           
            );
       }
        else {
        
        return (

            <div className="container-fluid">
                    <div className="row mar8">
                        <div className="col-3">
                        <Menu select={"hi"}></Menu>
                            <Filter vendor={this.props.product.product}></Filter>
                            </div>
                               
                        <div className="col-9">
                            <Pills2></Pills2>
                        </div>
                        
                    </div>
            </div>
        )
    }}
}


const mapStateToProps=state=>({
    product:state.product,
})
export default connect(mapStateToProps,{onSearch})(withRouter(Productdisplay));
