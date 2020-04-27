import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

import SearchFilter from './SearchFilter';

const Header = ({ setData, handleLogout }) => {
    
    return (
        <div className='Header navbar-fixed'>
            <nav>
                <div className="nav-wrapper">
                <SearchFilter 
                    className="left logged-in"
                    setData = { setData }
                />
                <Link to="/home" className="brand-logo center logged-in">Logo</Link>
                <ul className="right">
                    <li><Link className='logReg-link logged-in' to="/user">Account</Link></li>
                    <li onClick={( e ) => handleLogout( e )} className='logReg-link logged-in'>Logout</li>
                    <li><Link className='logReg-link logged-out' to="/">Log/Reg</Link></li>
                </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;