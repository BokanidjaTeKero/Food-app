import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className='Header navbar-fixed'>
                <nav>
                    <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">Logo</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to='#'>User</Link></li>
                        <li><Link to="/logreg">Log/Reg</Link></li>
                    </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;