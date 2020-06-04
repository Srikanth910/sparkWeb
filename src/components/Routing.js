import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Forgotpassword from './Forgotpassword';
import Login from './login';

export default class Routing extends Component {
    render() {
        return (
           <Router>
               <Route  path="/Login" component={login}/>
               <Route  path="/Forgotpassword" component={Forgotpassword}/>
           </Router>
        )
    }
}
