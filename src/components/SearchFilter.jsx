import React, { Component } from 'react'
import './SearchFilter.css';

import axios from 'axios';

class SearchFilter extends Component {

    // constructor() {
    //     super();

    //     this.state = {
    //         key : '0a5a92325d15d099bdb12116ab6dbfb0',
    //         id : '14f36e30',
    //         mySearch : 'pizza',
    //         data : []
    //     }
    // }
    

    state = {
                // key : '0a5a92325d15d099bdb12116ab6dbfb0',
                // id : '14f36e30',
                key : 'ab283b83c84c3890058fc08c825f4647',
                id : '5d43c2a3',
                mySearch : 'pizza',
                data : [],
                dataHits : []
            }



    componentDidMount() {
        this.getData();
        this.sendData();
      }

//Open and close filter menu    

    filterOpen = () => {
        document.getElementById('forms-container').classList.remove('scale-out-ver-top');
        document.getElementById('forms-container').classList.add('scale-in-ver-top');
    }

    filterClose = () => {
        document.getElementById('forms-container').classList.add('scale-out-ver-top');
        document.getElementById('forms-container').classList.remove('scale-in-ver-top');
    }

// search for data



  getData = () => {
    axios.get(`https://api.edamam.com/search?q=${ this.state.mySearch }&app_id=${ this.state.id }&app_key=${ this.state.key }`)
      .then(res => {
        // const persons = res.data;
        this.setState({ 
          data : res.data
         });
      })
    //   .then((res)=>{
    //     this.setState({ 
    //         dataHits : res.data.hits
    //        });
    //   })
  }

  sendData = () => {
      this.props.setData( this.state.data );
      console.log('radi')
  }


render() {
    const { data, dataHits } = this.state;
    return (
        <div className='SearchFilter'>
            <div className="searchFilter-container">
                <input className='search-input' type="search" placeholder="Search term" value={ this.state.logEmail } onChange={ this.handleChange } />
                <button onClick={ () => this.filterOpen() } className="btn-floating btn-small waves-effect waves-light light-green btn">
                    <i className="material-icons">settings</i>
                </button>
                <button onClick={ () => this.sendData() } className="btn-floating btn-small waves-effect waves-light light-green btn">
                    <i className="material-icons">search</i>
                </button>
            </div>
            { console.log('data iz searcha ==>', data.hits ) }
            { console.log('HITS', dataHits) }
            <div id='forms-container' className='forms-container'>
                <div className='forms-contents'>
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
                                    <input id="alcohol-free" type="checkbox" />
                                    <span>Alcohol free</span>
                                </label>
                                </p>
                                <p>
                                <label>
                                    <input id="vegan" type="checkbox" />
                                    <span>Vegan</span>
                                </label>
                                </p>
                                <p>
                                <label>
                                    <input id="vegetarian" type="checkbox" />
                                    <span>Vegetarian</span>
                                </label>
                                </p>
                                <p>
                                <label>
                                    <input id="peanuts" type="checkbox" />
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
                                    <input id="balanced" type="checkbox" />
                                    <span>Balanced</span>
                                </label>
                                </p>
                                <p>
                                <label>
                                    <input id="high-protein" type="checkbox" />
                                    <span>High-Protein</span>
                                </label>
                                </p>
                                <p>
                                <label>
                                    <input id="low-carb" type="checkbox" />
                                    <span>Low-Carb</span>
                                </label>
                                </p>
                                <p>
                                <label>
                                    <input id="low-fat" type="checkbox" />
                                    <span>Low-Fat</span>
                                </label>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='forms-controls'>
                    <button className="btn-floating btn-small waves-effect waves-light light-green btn">
                        <i className="material-icons">refresh</i>
                    </button>
                    <button className="btn-floating btn-small waves-effect waves-light light-green btn">
                        <i className="material-icons">done</i>
                    </button>
                    <button onClick={ () => this.filterClose() } className="btn-floating btn-small waves-effect waves-light light-green btn">
                        <i className="material-icons">close</i>
                    </button>
                </div>
            </div>
        </div>
        )
    }
}

export default SearchFilter;