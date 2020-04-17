import React, { Component } from 'react'
import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import LogReg from './components/LogReg';
class App extends Component {

  state = {
    key : '0a5a92325d15d099bdb12116ab6dbfb0',
    id : '14f36e30',
    mySearch : 'pizza',
    data : []
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios.get(`https://api.edamam.com/search?q=${ this.state.mySearch }&app_id=${ this.state.id }&app_key=${ this.state.key }`)
      .then(res => {
        // const persons = res.data;
        this.setState({ 
          data : res.data
         });
      })
  }

  render() {
    const { key, id, data } = this.state;
    return (
      <BrowserRouter>
        <div className='App'>
          <Header />
          <Route exact path='/' component={ Home } />
          <Route path='/logreg' component={ LogReg } />
          <h1>hello</h1>
          <h1>{ key }</h1>
          <h1>{ id }</h1>
          { console.log('ovo je data ==>', data) }
        </div>
      </BrowserRouter>
    )
  }
}

export default App;