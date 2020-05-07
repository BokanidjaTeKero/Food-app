import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { auth } from '../config/Fire';
import { AppContext } from '../contexts/AppContext';
import SearchFilter from './SearchFilter';

const  Header = ({setData}) => {
    const { loader } = useContext(AppContext);
    const { showSearch } = useContext(AppContext);
    const [ filter, setFilter ] = useState( false );

const handleLogout  = (e) => {
    e.preventDefault();

    auth.signOut().then(() => {
        window.location.href='/';
    })
}

const toggleFilter = (e) => {
    e.preventDefault();
    setFilter(!filter)
}

const filterShow = {
    open : { class : ' swing-in-top-fwd' },
    close : { class : ' swing-out-top-bck' }
}

const filterMenu = filter ? filterShow.open : filterShow.close;

    return(
        <div className='Header navbar-fixed'>
            <nav>
                <div className="nav-wrapper">
                { showSearch &&
                    <SearchFilter className="left" setData = { setData } />
                }
                <Link  to="/home" className="brand-logo logged-in">
                    <div className='logo-img'></div>
                </Link>
                <button onClick={(e) => toggleFilter(e)} className="btn-floating btn-small waves-effect waves-light light-green btn account-menu-btn logged-in">
                    <i className="material-icons">menu</i>
                </button>
                <ul className={`account-menu ${filterMenu.class}`}>
                    <li><Link  className='logReg-link' to="/user">MyFavFood</Link></li>
                    <li onClick={(e) => handleLogout(e)} className='logReg-link logout-btn'>Logout</li>
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