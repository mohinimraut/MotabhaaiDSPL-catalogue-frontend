import React, { Component } from 'react';
import './Search.css';
export default class Search extends Component {
    render() {
        return (
            <div className="container-fluid mt-2">
                <div className="row m-mar2 mt-4">
                    <div className="col-8">

                    <div className="card text-dark">
                            <img className="card-img" src="online.jpg" height="500" alt="Card image" />
                            <div className="card-img-overlay">
                            <table style={{height: 450}}>
                                    <tbody>
                                        <tr>
                                        <td className="align-baseline visible12">baseline</td>
                                        <td className="align-top visible12">top</td>
                                        <td className="align-middle">
                                        <div className="form-group">
                                        <div class="d-flex justify-content-center ml-5">
                                        <select className="selectmenu" name="cars" id="cars">
                                                    <option value="volvo">Volvo</option> 
                                                    <option value="saab">Saab</option>      
                                                    <option value="mercedes">Mercedes</option>       
                                                    <option value="audi">Audi</option>
                                                </select>
                                            <input type="text" className="inputcss" name="name">
                                                
                                            </input>
                                            <button className="buttoncss">Search</button>
                                            </div>
                                        </div>
                                        </td>
                                        <td className="align-bottom visible12">bottom</td>
                                        <td className="align-text-top visible12">text-top</td>
                                        <td className="align-text-bottom visible12">text-bottom</td>
                                        </tr>
                                    </tbody>
                            </table>

                            </div>
                            </div>

                            </div>
                    <div className="col-4">
                    <div className="card p-4 text-ce back">
                        <blockquote className="blockquote mb-0 ml-5">
                            <p className="visible12"></p>
                            <h4 className="font-weight-bold text-danger">Free Delivery</h4>
                            <h4 className="text-danger">with selected items</h4>
                            <button className="buttoncss2">Save Now</button>  
                            <p className="visible12">xcxcxcxcxcxcxcxcxfdfdfdfdfdfdfdfdfdfdfdfdffd</p>                          
                    </blockquote>
                    </div>
                    <div className="card p-4 text-ce back mt-3">
                        <blockquote className="blockquote mb-0 ml-5">
                            <p className="visible12"></p>
                            <h4 className="font-weight-bold text-danger">Free Delivery</h4>
                            <h4 className="text-danger">with selected items</h4>
                            <button className="buttoncss2">Save Now</button>  
                            <p className="visible12">xcxcxcxcxcxcxcxcxfdfdfdfdfdfdfdfdfdfdfdfdffd</p>                          
                    </blockquote>
                    </div> 

                    </div>
                    </div>


                    </div>
            
        )
    }
}
