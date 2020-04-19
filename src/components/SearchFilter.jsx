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
            <div className='forms-container'>
                <div className='forms-contents'>
                    {/* <div className='calories-element'>
                        <p>Calories</p>
                        <form className='calories-form' action='#'>
                            <label>
                                <span>From</span>
                                <input className="calories-input" type="number" />
                            </label>
                            <label>
                                <span>To</span>
                                <input className="calories-input" type="number" />
                            </label>
                        </form>
                    </div> */}
                    <div className='forms-content'>

                    <div className='calories-element'>
                        <p>Calories</p>
                        <form className='calories-form' action='#'>
                            <label>
                                <span>From</span>
                                <input className="calories-input" type="number" />
                            </label>
                            <label>
                                <span>To</span>
                                <input className="calories-input" type="number" />
                            </label>
                        </form>
                    </div>


                        <div className='health-element form-chbox'>
                            <p>Health</p>
                            <form className='filter-form health-form' action='#'>
                                <p>
                                <label>
                                    <input id="indeterminate-checkbox" type="checkbox" />
                                    <span>Alcohol free</span>
                                </label>
                                </p>
                                <p>
                                <label>
                                    <input id="indeterminate-checkbox" type="checkbox" />
                                    <span>Vegan</span>
                                </label>
                                </p>
                                <p>
                                <label>
                                    <input id="indeterminate-checkbox" type="checkbox" />
                                    <span>Vegetarian</span>
                                </label>
                                </p>
                                <p>
                                <label>
                                    <input id="indeterminate-checkbox" type="checkbox" />
                                    <span>Peanuts</span>
                                </label>
                                </p>
                            </form>
                        </div>
                        <div className='health-element form-chbox'>
                            <p>Diet</p>
                            <form className='filter-form diet-form' action='#'>
                                <p>
                                <label>
                                    <input id="indeterminate-checkbox" type="checkbox" />
                                    <span>Balanced</span>
                                </label>
                                </p>
                                <p>
                                <label>
                                    <input id="indeterminate-checkbox" type="checkbox" />
                                    <span>High-Protein</span>
                                </label>
                                </p>
                                <p>
                                <label>
                                    <input id="indeterminate-checkbox" type="checkbox" />
                                    <span>Low-Carb</span>
                                </label>
                                </p>
                                <p>
                                <label>
                                    <input id="indeterminate-checkbox" type="checkbox" />
                                    <span>Low-Fat</span>
                                </label>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='forms-controls'>
                    <button className="btn-floating btn-small waves-effect waves-light light-green btn"><i className="material-icons">refresh</i></button>
                    <button className="btn-floating btn-small waves-effect waves-light light-green btn"><i className="material-icons">done</i></button>
                    <button className="btn-floating btn-small waves-effect waves-light light-green btn"><i className="material-icons">close</i></button>
                </div>
            </div>
        </div>
        )
    }
}

export default SearchFilter;