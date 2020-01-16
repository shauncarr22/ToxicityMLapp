import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Nav  = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand">Navbar</a>
            <a class="nav-item active ml-2" ><Link to="/">Home</Link></a>
            <a class="nav-item active ml-2" ><Link to="/features">Features</Link></a>
        </nav>
    )
}

export default Nav