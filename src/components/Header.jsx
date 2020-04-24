import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

import SearchFilter from './SearchFilter';

const Header = ({ setData, userData }) => {
    
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
                    <li><Link 
                        className='logReg-link' 
                        to="/logreg"
                    >Log/Reg</Link></li>
                    { userData  && 
                        <li><Link className='logReg-link' to="/user">{ userData.name }</Link></li>
                    }
                    
                    <li><Link className='logReg-link' to="/logoff">Logoff</Link></li>
                </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;