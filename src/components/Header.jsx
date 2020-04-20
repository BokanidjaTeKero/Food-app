import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

import SearchFilter from './SearchFilter';

const Header = ({ setData }) => {
    
    return (
        <div className='Header navbar-fixed'>
            <nav>
                <div className="nav-wrapper">
                <SearchFilter 
                    className="left"
                    setData = { setData }
                />
                <Link to="/" className="brand-logo center">Logo</Link>
                <ul className="right">
                    {/* <li><Link to="/">Home</Link></li>
                    <li><Link to='#'>User</Link></li> */}
                    <li><Link className='logReg-link' to="/logreg">Log/Reg</Link></li>
                </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;