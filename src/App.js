import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';

import Header from './components/Header';
import Home from './components/Home';
import LogReg from './components/LogReg';
import User from './components/User';
class App extends Component {

  constructor() {
    super();

    this.state = {
        // key : '0a5a92325d15d099bdb12116ab6dbfb0',
        // id : '14f36e30',
        data : [],
        userData : []
    }
}

  componentDidMount() {
    this.setData();
    this.setUser();
  }

  componentWillUpdate(nextProps, nextState) {
    if(nextState.userData !== this.state.userData){
      return true
    }
  }

//   componentDidUpdate(prevProps, prevState) {
//     if(prevState.userData !== this.state.userData){
//         // this.sendUser(this.state.userData)
//     }
// }

  setData = ( newData ) => {
    this.setState({
        data : newData
    })
  }

  setUser = () => {
    axios.get(`https://foodappusersfavoritefood.firebaseio.com/korisnik.json`)
    .then( res => { 

        let data = this.formatData(res.data);
        console.log('DATA SA SERVERA O USERU ==>', data[0])
        this.setState({
          userData : data[0]
        })
    })
  }

//   getAllUsers = () => {
//     axios.get(`https://foodappusersfavoritefood.firebaseio.com/users.json`)
//     .then( res => {

//         let data = this.formatData(res.data);
//         this.setState({
//             allUsers : data
//         })
//     })
    
// }

formatData = (responseData) => {
    const data = [];
    for (const user in responseData) {
        data.push({
            ...responseData[user],
            fireBaseUSERId: user,
        })
    }
    return data;
}








  render() {
    const { data, userData } = this.state;
    return (
      <BrowserRouter>
        <div className='App'>
          {console.log('USER DATA U APP ==>', userData)}
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
          <Route
            path='/user' 
            component={ User }
          />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;