import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { auth } from '../config/Fire';
import { AppContext } from '../contexts/AppContext';
import SearchFilter from './SearchFilter';

const  Header = ({setData}) => {
    const { loader } = useContext(AppContext);
    const { showSearch } = useContext(AppContext);

const handleLogout  = (e) => {
    e.preventDefault();

    auth.signOut().then(() => {
        window.location.href='/';
    })
}
    return(
        <div className='Header navbar-fixed'>
            <nav>
                <div className="nav-wrapper">
                { showSearch &&
                    <SearchFilter className="left only-show-on-home-page" setData = { setData } />
                }
                <Link  to="/home" className="brand-logo center logged-in">
                    <div className='logo-img'></div>
                </Link>
                <ul className="right">
                    <li><Link  className='logReg-link logged-in' to="/user">MyFavFood</Link></li>
                    <li onClick={(e) => handleLogout(e)} className='logReg-link logout-btn logged-in'>Logout</li>
                </ul>
                </div>
            </nav>
            { loader &&
            <div className='loader-container'>
                <div className='loader'></div>
            </div>
            }
            
        </div>
    )
}

export default Header;