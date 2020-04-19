import React, { Component } from 'react'
import './SearchFilter.css';

import axios from 'axios';

class SearchFilter extends Component {

    state = {

    }


render() {
    
    return (
        <div className='SearchFilter'>
            <div className="searchFilter-container">
                <input className='search-input' type="search" placeholder="Search term" value={ this.state.logEmail } onChange={ this.handleChange } />
                <button className="btn-floating btn-small waves-effect waves-light light-green btn"><i className="material-icons">settings</i></button>
                <button className="btn-floating btn-small waves-effect waves-light light-green btn"><i className="material-icons">search</i></button>
            </div>
            <form className='filter-form' action='#'>
                <p>
                <label>
                    <input id="indeterminate-checkbox" type="checkbox" />
                    <span>Indeterminate Style</span>
                </label>
                </p>
            </form>
        </div>
        )
    }
}

export default SearchFilter;