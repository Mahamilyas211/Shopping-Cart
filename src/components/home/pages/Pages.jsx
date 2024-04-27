import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
    
  } from "react-router-dom";
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import Home from '../Home';
import Details from '../details/Details';
import Registration from '../registration/Registration';

const Pages = () => {
  return (
    <>
    <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/cart/:id'>
            <Details />
          </Route>
          
          <Route exact path='/registration'>
            <Registration /> {/* Add the registration page route */}
          </Route>
          
        </Switch>
        <Footer />
      </Router>
        </>
  )
}

export default Pages