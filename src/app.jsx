import React, {Component} from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import Home from './components/home.jsx';
import Nav from './components/Navbar.jsx';
import About from './components/about.jsx'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {};
    }
    render() {
        return (
           <BrowserRouter>
            <Nav />
               <Route exact path="/" component={Home}/>
               <Route path='/About' component={About}/>
           </BrowserRouter>
        )
    }
}

export default App;