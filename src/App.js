import React from 'react'
import Contact from './Contact'
import About from './About'
import Features from './Features'
import Join from './Join'
import UserForm from './UserForm'

import Navbar from './Navbar'
import Dashboard from './components/script/Dashboard/Dashboard';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { Home } from './Home'
import Navbar2 from './Navbar2'
import Search from './Search'
import Corousel from './Corousel'
import Carousel2 from './Carousel2'
import Multicarousel from './Multicarousel'
import store from './store';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Switch, Route,withRouter ,Redirect} from 'react-router-dom';
import MainPage from './components/script/Home/MainPage'
import Navbarlog from './components/script/Home/Navbarlog'
import Productsdisplay from './components/script/Home/Productsdisplay'
import Vendor from './components/script/Vendor/Vendor'
import Stores from './components/script/Store/Stores'
import PublicRoute from './components/reusable/PublicRoute'
import Floater from './components/script/Dashboard/Floater'
const App=()=> {
    

    const Main=withRouter(({location})=>{
      return(
      <div>
      <Dashboard></Dashboard>
      <Navbarlog></Navbarlog>
      <Floater></Floater>
      <Switch>
        
      {/*<Navbarlog2></Navbarlog2>*/}
      <PublicRoute exact path="/mainpage" component={MainPage}></PublicRoute>
      <PublicRoute exact path="/products/:item" component={Productsdisplay}></PublicRoute>
      <PublicRoute exact path="/vendor/:id/:id2/:cid" component={Vendor}></PublicRoute>
      <PublicRoute exact path="/partners" component={Stores}></PublicRoute>
      </Switch>
      </div>
      )
  })
  
  
    return (
      <Provider store={store}>
      <Router>
        <Main></Main>
      </Router>
      </Provider>
    );
  }



export default App
