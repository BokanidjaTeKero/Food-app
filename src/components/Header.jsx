import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className='Header'>
                <nav>
                    <div className="nav-wrapper">
                    <a to="#" className="brand-logo">Logo</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/logreg">Log/Reg</Link></li>
                    </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;