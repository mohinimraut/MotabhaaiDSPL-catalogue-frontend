import React, { Component } from 'react'
import Dashboard from './components/script/Dashboard/Dashboard'
import Navbar from './Navbar'
import Navbar2 from './Navbar2'
import Search from './Search'
import Multicarousel from './Multicarousel'
import Sidebar from './Sidebar'

export default class Home2 extends Component {
    render() {
        return (
            <div>
                <Dashboard></Dashboard>
                <Navbar></Navbar>
                <Navbar2></Navbar2>
                <Search></Search>
                <Multicarousel></Multicarousel>
                <Sidebar></Sidebar>
            </div>
        )
    }
}
