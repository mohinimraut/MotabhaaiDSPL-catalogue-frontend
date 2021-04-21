import React, { Component } from 'react'
import './Dashboard.css';
import { FiPhone } from 'react-icons/fi';

export default class Dashboard extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-light1 py-0 container-fluid">
                <div className="container-fluid mx-4">
              <div className="text-white py-2 mb-1 ml-5 font">Free shipping on all orders over rs 100</div>
              <div className="text-white mr-5 font"><FiPhone></FiPhone> call +(9990) 132 119 999</div>
              </div>
                </nav>

        )
    }
}
