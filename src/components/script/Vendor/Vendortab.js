import React, { Component } from 'react'
import Overview from './Overview'
import Vendorfilter from './Vendorfilter'
import Vendormap from './Vendormap'

export default class Vendortab extends Component {
    render() {
        return (
            <div>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="false">catalogue</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="true">
                        Overview
                        </button>
                    </li>
                   
                    </ul>
                    <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div className="row">
                            
                            <div className="col-3">
                            <Vendorfilter vendor={this.props.vendor}></Vendorfilter>
                            </div> 
                            <div className="col-9">                
                            <Vendormap></Vendormap>
                            </div>  
                        </div>
                    </div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <Overview product={this.props.vendor}></Overview>

                    </div>
                    </div>

            </div>
        )
    }
}
