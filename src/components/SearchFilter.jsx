import React, { useContext, useState } from 'react'
import './SearchFilter.css';
import axios from 'axios';
import { AppContext } from '../contexts/AppContext';

const SearchFilter = () => {
    const { apiReqData } = useContext(AppContext);
    const { addData } = useContext(AppContext);
    const { activeLoader } = useContext(AppContext);
    const { myHealth } = useContext(AppContext);
    const { myDiet } = useContext(AppContext);
    const { myCalories } = useContext(AppContext);
    const { deployingUrl } = useContext(AppContext);
    const { handleCheckBox } = useContext(AppContext);
    const { handleCaloriesBox } = useContext(AppContext);
    const { searchedData } = useContext(AppContext);
    const [ food, setFood ] = useState('');
    const [ filter, setFilter ] = useState( false );

    const getData = (e) => {
        e.preventDefault()
        activeLoader(true);
        axios.get(`https://api.edamam.com/search?q=${ food }${ myHealth }${ myDiet }&app_id=${ apiReqData.id }&app_key=${ apiReqData.key }${ myCalories }&from=0&to=100`)
        .then(req => addData(req.data))
        .then(() => setFood(''))
        .then(()=> activeLoader(false))
        .then(() => console.log('iz get search ==>',searchedData))
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
    return (
        <div className='SearchFilter '>
            <form onSubmit={(e) => getData(e)} className="searchFilter-container">
                <input className='search-input' type="search" placeholder="Search term" value={ food } onChange={({target}) => setFood(target.value)} />
                <button onClick={(e) => getData(e)} className="btn-floating btn-small waves-effect waves-light light-green btn">
                    <i className="material-icons">search</i>
                </button>
                <button onClick={(e) => toggleFilter(e)} className="btn-floating btn-small waves-effect waves-light light-green btn">
                    <i className="material-icons">settings</i>
                </button>
            </form>
            <div id='forms-container' className={`forms-container ${filterMenu.class}`}>
                <div className='forms-contents'>
                    <div className='forms-content'>
                        <div className='calories-element'>
                            <p>Calories</p>
                            <form className='calories-form' action='#'>
                                <label onChange={(e) => handleCaloriesBox(e)}>
                                    <span>From</span>
                                    <input className="calories-input" type="number" id='min-cal' />
                                </label>
                                <label onChange={(e) => handleCaloriesBox(e)}>
                                    <span>To</span>
                                    <input className="calories-input" type="number" id='max-cal' />
                                </label>
                            </form>
                        </div>
                        <div className='health-element form-chbox'>
                            <p>Health</p>
                            <form className='filter-form health-form' action='#'>
                                <p>
                                <label onClick={(e) => handleCheckBox(e)}>
                                    <input id="alcohol-free" type="checkbox" value='alcohol-free' name='health' />
                                    <span>Alcohol free</span>
                                </label>
                                </p>
                                <p>
                                <label onClick={(e) => handleCheckBox(e)}>
                                    <input id="vegan" type="checkbox" value='vegan' name='health' />
                                    <span>Vegan</span>
                                </label>
                                </p>
                                <p>
                                <label onClick={(e) => handleCheckBox(e)}>
                                    <input id="vegetarian" type="checkbox" value='vegetarian' name='health' />
                                    <span>Vegetarian</span>
                                </label>
                                </p>
                                <p>
                                <label onClick={(e) => handleCheckBox(e)}>
                                    <input id="peanuts" type="checkbox" value='peanuts' name='health' />
                                    <span>Peanuts</span>
                                </label>
                                </p>
                            </form>
                        </div>
                        <div className='health-element form-chbox'>
                            <p>Diet</p>
                            <form className='filter-form diet-form' action='#'>
                                <p>
                                <label onClick={(e) => handleCheckBox(e)}>
                                    <input id="balanced" type="checkbox" value='balanced' name='diet'/>
                                    <span>Balanced</span>
                                </label>
                                </p>
                                <p>
                                <label onClick={(e) => handleCheckBox(e)}>
                                    <input id="high-protein" type="checkbox" value='high-protein' name='diet'/>
                                    <span>High-Protein</span>
                                </label>
                                </p>
                                <p>
                                <label onClick={(e) => handleCheckBox(e)}>
                                    <input id="low-carb" type="checkbox" value='low-carb' name='diet'/>
                                    <span>Low-Carb</span>
                                </label>
                                </p>
                                <p>
                                <label onClick={(e) => handleCheckBox(e)}>
                                    <input id="low-fat" type="checkbox" value='low-fat' name='diet' />
                                    <span>Low-Fat</span>
                                </label>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='forms-controls'>
                    <button onClick={() => deployingUrl() } className="btn-floating btn-small waves-effect waves-light light-green btn">
                        <i className="material-icons">done</i>
                    </button>
                    <button onClick={(e) => toggleFilter(e)} className="btn-floating btn-small waves-effect waves-light light-green btn">
                        <i className="material-icons">close</i>
                    </button>
                </div>
            </div>
        </div>
        )
}

export default SearchFilter;