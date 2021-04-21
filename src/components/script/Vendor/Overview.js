import React, { Component } from 'react'
import './Overview.css'
import Productcarousel from './Productcarousel'

export default class Overview extends Component {
    render() {
        return (
            <div>
                <div className="row mt-5">
                    <div className="col-7">
                        <p className="about">About us</p>
                        <p className="trust">Trust in Our Experience</p>
                        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                            tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
                            sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                            recusandae alias error harum maxime adipisci amet laborum. Perspiciatis</p>
                    </div>
                    <div className="col-5">
                    <img className="overimg1" src={process.env.PUBLIC_URL + "/Sweet Corn - Exotic-IMG.jpg"} alt="Card image cap"/>
                    <img className="overimg2" src={process.env.PUBLIC_URL + "/Red chili- Exotic-IMG.jpg"} alt="Card image cap"/>

                    </div>
                </div>
                <div className="mt-5 mr-3"> 
                <Productcarousel product={this.props.product}></Productcarousel>
                </div>
            </div>
        )
    }
}
