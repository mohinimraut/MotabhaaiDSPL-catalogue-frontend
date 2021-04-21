import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import propTypes from 'prop-types';
import {connect} from 'react-redux';
const PublicRoute=({component:Component,store, ...rest})=>(
    <Route
        {...rest}
        render={props=>
            
                <Component {...props } /> 
            
        }
    />
)

PublicRoute.propTypes={
    auth:propTypes.object.isRequired,
}

const mapStateToProps=state=>({
  store:state.store  
})

export default connect(mapStateToProps)(PublicRoute);