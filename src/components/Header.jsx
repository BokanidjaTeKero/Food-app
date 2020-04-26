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
                    className="left"
                    setData = { setData }
                />
                <Link to="/home" className="brand-logo center">Logo</Link>
                <ul className="right">
                    <li><Link className='logReg-link' to="/user">Account</Link></li>
                    <li onClick={( e ) => handleLogout( e )} className='logReg-link'>Logout</li>
                    <li><Link className='logReg-link' to="/">Log/Reg</Link></li>
                </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;