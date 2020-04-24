import React, { Component } from 'react'
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
        data : []
    }
}

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
          />
          <Route 
            exact path='/' 
            render={(props) => < Home {...props} data={ data } />}
          />
          <Route 
            path='/logreg' 
            component={ LogReg } 
          />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;