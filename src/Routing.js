
import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';

import About from './components/About'
import Content from './components/Content'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Login from './components/Login'

const Routing  = () => (

    <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/content" component={Content}/>
            <Route path="/login" component={Login}/>
        </Switch>
    </Router>
)

export default Routing