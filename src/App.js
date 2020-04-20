import React, { Component } from 'react'
// import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import LogReg from './components/LogReg';
class App extends Component {

  constructor() {
    super();

    this.state = {
        // key : '0a5a92325d15d099bdb12116ab6dbfb0',
        // id : '14f36e30',
        // mySearch : 'pizza',
        data : []
    }
}

  // state = {
  //   key : '0a5a92325d15d099bdb12116ab6dbfb0',
  //   id : '14f36e30',
  //   mySearch : 'pizza',
  //   data : []
  // }

  // getData = () => {
  //   axios.get(`https://api.edamam.com/search?q=${ this.state.mySearch }&app_id=${ this.state.id }&app_key=${ this.state.key }`)
  //     .then(res => {
  //       // const persons = res.data;
  //       this.setState({ 
  //         data : res.data
  //        });
  //     })
  // }

  componentDidMount() {
    this.setData()
  }

  setData = ( newData ) => {
    this.setState({
        data : newData
    })
  }

  render() {
    const { data } = this.state;
    return (
      <BrowserRouter>
        <div className='App'>
          <Header
              setData = { ( newData ) => this.setData( newData ) }
              // data={ data }
          />
          <Route 
            exact path='/' 
            render={(props) => < Home {...props} data={ data } />}
          />
          <Route 
            path='/logreg' 
            component={ LogReg } 
          />
          {/* <h1>hello</h1>
          <h1>{ key }</h1>
          <h1>{ id }</h1> */}
           {/* { console.log('data iz app ==>', data) } */}
        </div>
      </BrowserRouter>
    )
  }
}

export default App;