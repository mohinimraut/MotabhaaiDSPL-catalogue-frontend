import React, { Component } from 'react'
import {connect} from 'react-redux';
import {withRouter,NavLink} from 'react-router-dom';
import {OnStore} from './../../Redux/Stores/StoreAction';
import { Spinner,Search } from 'reactstrap';
import Storemap from './Storemap';
import Filterstore from './Filterstore';

 class Stores extends Component {
     componentDidMount(){
        this.props.OnStore()
     }
    render() {
        if(this.props.store.datastate=="NOT_INITIALIZED" || this.props.store.datastate=="FETCHING"){
            return (
                
                    <Spinner color="primary" className="ml-5 mt-5" />
                            
            );
       }
        else {
        return (
            <div>
                <div className="row mt-5">
                    
                    <div className="col-3">
                        <Filterstore></Filterstore>
                    </div>
                    <div className="col-9">
                    <Storemap shop={this.props.store.store}></Storemap>
                        
                    </div>
                </div>
            </div>
        )
    }
}
}
const mapStateToProps=state=>({
    store:state.store,
  });
  
  export default connect (mapStateToProps, {OnStore})(withRouter(Stores));