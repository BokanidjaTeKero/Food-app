// import React, { Component } from 'react'
// import './SearchFilter.css';

// import axios from 'axios';

// class SearchFilter extends Component {

//     state = {
//                 key : '0a5a92325d15d099bdb12116ab6dbfb0',
//                 id : '14f36e30',
//                 // key : 'ab283b83c84c3890058fc08c825f4647',
//                 // id : '5d43c2a3',
//                 mySearch : '',
//                 myHealth : '',
//                 myDiet : '',
//                 myCalories : '',
//                 myMinCal : '',
//                 myMaxCal : '',
//                 data : [],
//                 healthChBoxValues : [],
//                 dietChBoxValues : [],
//             }



//     componentDidMount() {
        
//     }

// //Open and close filter menu    

//     filterOpen = () => {
//         document.getElementById('forms-container').classList.remove('swing-out-top-bck');
//         document.getElementById('forms-container').classList.add('swing-in-top-fwd');
//     }

//     filterClose = () => {
//         document.getElementById('forms-container').classList.add('swing-out-top-bck');
//         document.getElementById('forms-container').classList.remove('swing-in-top-fwd');
//     }

// // search for data

// getData = (e) => {
//     e.preventDefault();
//     axios.get(`https://api.edamam.com/search?q=${ this.state.mySearch }${ this.state.myHealth }${ this.state.myDiet }&app_id=${ this.state.id }&app_key=${ this.state.key }${ this.state.myCalories }`)
//     .then(res => {
//     // const persons = res.data;
//     console.log(res.data)
//     this.setState({ 
//         data : res.data
//         });
//     })
//     .then(() => this.sendData())
// }

// sendData = () => {
//     this.props.setData( this.state.data );
// }

// // url config

// deployingUrl = () => {
//     this.setState({
//         myHealth : this.urlConfig( this.state.healthChBoxValues, 'health' ),
//         myDiet : this.urlConfig( this.state.dietChBoxValues, 'diet' ),
//         myCalories : this.caloriesUrlConfig( this.state.myMinCal, this.state.myMaxCal )
//     })
//     this.filterClose();
// }

// urlConfig = ( data, type ) => {
    
//     const url = data.length ? (
//         data.map( item => {
//             return `&${ type }=${ item }`
//         } )
//     ) :
//     (
//         console.log('nothing is selected as a filter')
//     )
    
//     let joinedUrl = '';
//     url !== undefined ? (
//         joinedUrl = url.join('')
//     ) 
//     : 
//     (
//         joinedUrl = ''
//     )
    
//     return joinedUrl
// }

// caloriesUrlConfig = ( min, max) => {
    
//     let url = '';

//     min.length ? (
//         url = `&calories=${ min }-${ max }`
//     ) 
//     : 
//     (
//         url = ''
//     )

//     return url;
// }

// // calories filter

// handleCaloriesBox = (value) => {
//     let txt = value.target.value;
//     let id = value.target.id;

//     id === 'min-cal' ? 
//     (
//         this.setState({
//             myMinCal : txt
//         })
//     ) 
//     : 
//     (
//         this.setState({
//             myMaxCal : txt
//         })
//     )
// }

// // filters

// handleChange = (word) => {
//     let txt = word.target.value;
//     this.setState({
//         mySearch : txt
//     })
// }

// handleCheckBox = (value) => {
//     let itemValue = value.target.value;
//     let group = value.target.name;
    
//     group === 'health' ? 
//     this.addRemoveFilters(this.state.healthChBoxValues, itemValue) :
//     this.addRemoveFilters(this.state.dietChBoxValues, itemValue)
// }

// addRemoveFilters = (chBoxData, itemValue) => {
//     let data = chBoxData;
    
//     if(itemValue !== undefined){
//         if(data.includes( itemValue )) {
//             let position = data.indexOf( itemValue );
//             data.splice( position, 1);
//             this.setState({
//                 chBoxData : data
//             })
//         } else {
//             data[data.length] = itemValue
//             this.setState({
//                 chBoxData : data
//             })
//         }
//     }    
// }


// render() {
//     return (
//         <div className='SearchFilter logged-in'>
//             {console.log('Data iz search-a ==>', this.state.data)}
//             <form onSubmit={ (e) => this.getData(e) } className="searchFilter-container">
//                 <input className='search-input' type="search" placeholder="Search term"  onChange={ (e) => this.handleChange(e) } />
//                 <button className="btn-floating btn-small waves-effect waves-light light-green btn">
//                     <i className="material-icons">settings</i>
//                 </button>
//                 <button onClick={ (e) => this.getData(e) } className="btn-floating btn-small waves-effect waves-light light-green btn">
//                     <i className="material-icons">search</i>
//                 </button>
//             </form>
//             <div id='forms-container' className='forms-container'>
//                 <div className='forms-contents'>
//                     <div className='forms-content'>
//                         <div className='calories-element'>
//                             <p>Calories</p>
//                             <form className='calories-form' action='#'>
//                                 <label onChange={(e) => this.handleCaloriesBox(e)}>
//                                     <span>From</span>
//                                     <input className="calories-input" type="number" id='min-cal' />
//                                 </label>
//                                 <label onChange={(e) => this.handleCaloriesBox(e)}>
//                                     <span>To</span>
//                                     <input className="calories-input" type="number" id='max-cal' />
//                                 </label>
//                             </form>
//                         </div>
//                         <div className='health-element form-chbox'>
//                             <p>Health</p>
//                             <form className='filter-form health-form' action='#'>
//                                 <p>
//                                 <label onClick={(e) => this.handleCheckBox(e)}>
//                                     <input id="alcohol-free" type="checkbox" value='alcohol-free' name='health' />
//                                     <span>Alcohol free</span>
//                                 </label>
//                                 </p>
//                                 <p>
//                                 <label onClick={(e) => this.handleCheckBox(e)}>
//                                     <input id="vegan" type="checkbox" value='vegan' name='health' />
//                                     <span>Vegan</span>
//                                 </label>
//                                 </p>
//                                 <p>
//                                 <label onClick={(e) => this.handleCheckBox(e)}>
//                                     <input id="vegetarian" type="checkbox" value='vegetarian' name='health' />
//                                     <span>Vegetarian</span>
//                                 </label>
//                                 </p>
//                                 <p>
//                                 <label onClick={(e) => this.handleCheckBox(e)}>
//                                     <input id="peanuts" type="checkbox" value='peanuts' name='health' />
//                                     <span>Peanuts</span>
//                                 </label>
//                                 </p>
//                             </form>
//                         </div>
//                         <div className='health-element form-chbox'>
//                             <p>Diet</p>
//                             <form className='filter-form diet-form' action='#'>
//                                 <p>
//                                 <label onClick={(e) => this.handleCheckBox(e)}>
//                                     <input id="balanced" type="checkbox" value='balanced' name='diet'/>
//                                     <span>Balanced</span>
//                                 </label>
//                                 </p>
//                                 <p>
//                                 <label onClick={(e) => this.handleCheckBox(e)}>
//                                     <input id="high-protein" type="checkbox" value='high-protein' name='diet'/>
//                                     <span>High-Protein</span>
//                                 </label>
//                                 </p>
//                                 <p>
//                                 <label onClick={(e) => this.handleCheckBox(e)}>
//                                     <input id="low-carb" type="checkbox" value='low-carb' name='diet'/>
//                                     <span>Low-Carb</span>
//                                 </label>
//                                 </p>
//                                 <p>
//                                 <label onClick={(e) => this.handleCheckBox(e)}>
//                                     <input id="low-fat" type="checkbox" value='low-fat' name='diet' />
//                                     <span>Low-Fat</span>
//                                 </label>
//                                 </p>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='forms-controls'>
//                     <button onClick={ () => this.deployingUrl() } className="btn-floating btn-small waves-effect waves-light light-green btn">
//                         <i className="material-icons">done</i>
//                     </button>
//                     <button onClick={ () => this.filterClose() } className="btn-floating btn-small waves-effect waves-light light-green btn">
//                         <i className="material-icons">close</i>
//                     </button>
//                 </div>
//             </div>
//         </div>
//         )
//     }
// }







import React, { useContext, useState, useEffect } from 'react'
import './SearchFilter.css';
import axios from 'axios';
import { AppContext } from '../contexts/AppContext';

const SearchFilter = () => {
    const { 
            searchForFood,
            food, searchedData,
            apiReqData, addData, /*getData*/
            } = useContext(AppContext);

    
    const [foodTerm, setfoodTerm] = useState('');
    const handleSearch = (e) => {
        e.preventDefault();
        searchForFood(foodTerm)
        getData(e);
        setfoodTerm('')
    }


// useEffect(() => {
//     getData();
// })

//    useEffect(() => {
//         getData();
//    }, [food])

    const getData = (e) => {
        e.preventDefault()
        axios.get(`https://api.edamam.com/search?q=${ food }&app_id=${ apiReqData.id }&app_key=${ apiReqData.key }`)
        .then(res => {
            console.log('resDAta', res.data)
        // let hrana = res.data;
        console.log('HRANA', food)
        // console.log('HRANA IZ RES/DAT/', hrana)
        // this.setState({ 
        //     data : res.data
        //     });
        addData(res.data);
        console.log('MOTHERFUCKING DATA 1 ==>', searchedData)
        })
        .then(() => /*this.sendData()*/ console.log('MOTHERFUCKING DATA  2==>', searchedData))
        

    }

// useEffect(() => {
//     getData();
// }, [foodTerm])

const [filter, setFilter] = useState(
    false
)
const toggleFilter = (e) => {
    e.preventDefault();
    setFilter(!filter)
}
const filterShow = {
    open : {
        class : ' swing-in-top-fwd'
    },
    close : {
        class : ' swing-out-top-bck'
    }
}
useEffect(() => {console.log('filter')},[filter])


    const filterMenu = filter ? filterShow.open : filterShow.close;
    return (
        <div className='SearchFilter logged-in'>
            <form onClick={(e) => handleSearch(e)} className="searchFilter-container">
                <input className='search-input' type="search" placeholder="Search term" value={ foodTerm } onChange={(e) => setfoodTerm(e.target.value)} />
                <button onClick={(e) => toggleFilter(e)} className="btn-floating btn-small waves-effect waves-light light-green btn">
                    <i className="material-icons">settings</i>
                </button>
                <button onClick={(e) => handleSearch(e)} className="btn-floating btn-small waves-effect waves-light light-green btn">
                    <i className="material-icons">search</i>
                </button>
            </form>
            <div id='forms-container' className={`forms-container ${filterMenu.class}`}>
                <div className='forms-contents'>
                    <div className='forms-content'>
                        <div className='calories-element'>
                            <p>Calories</p>
                            <form className='calories-form' action='#'>
                                <label >
                                    <span>From</span>
                                    <input className="calories-input" type="number" id='min-cal' />
                                </label>
                                <label >
                                    <span>To</span>
                                    <input className="calories-input" type="number" id='max-cal' />
                                </label>
                            </form>
                        </div>
                        <div className='health-element form-chbox'>
                            <p>Health</p>
                            <form className='filter-form health-form' action='#'>
                                <p>
                                <label >
                                    <input id="alcohol-free" type="checkbox" value='alcohol-free' name='health' />
                                    <span>Alcohol free</span>
                                </label>
                                </p>
                                <p>
                                <label >
                                    <input id="vegan" type="checkbox" value='vegan' name='health' />
                                    <span>Vegan</span>
                                </label>
                                </p>
                                <p>
                                <label >
                                    <input id="vegetarian" type="checkbox" value='vegetarian' name='health' />
                                    <span>Vegetarian</span>
                                </label>
                                </p>
                                <p>
                                <label >
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
                                <label >
                                    <input id="balanced" type="checkbox" value='balanced' name='diet'/>
                                    <span>Balanced</span>
                                </label>
                                </p>
                                <p>
                                <label >
                                    <input id="high-protein" type="checkbox" value='high-protein' name='diet'/>
                                    <span>High-Protein</span>
                                </label>
                                </p>
                                <p>
                                <label >
                                    <input id="low-carb" type="checkbox" value='low-carb' name='diet'/>
                                    <span>Low-Carb</span>
                                </label>
                                </p>
                                <p>
                                <label >
                                    <input id="low-fat" type="checkbox" value='low-fat' name='diet' />
                                    <span>Low-Fat</span>
                                </label>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='forms-controls'>
                    <button  className="btn-floating btn-small waves-effect waves-light light-green btn">
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