import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import { auth } from './config/Fire';
// import axios from 'axios';

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
        userID : '',
        // userData : [],
        // idUser : '',
        // favoriteFood : [],
        // favoriteFoodForSend : []
    }
}

  componentDidMount() {
    this.trackingAuthStatus();
    this.setData();
    // this.setUser();
  }

  setData = ( newData ) => {
    this.setState({
        data : newData
    })
  }

  trackingAuthStatus(){
    auth.onAuthStateChanged( user => {
      if( user ){
        console.log('user logged in :', user.uid);
        this.setState({
          userID : user.uid
        })
      } else {
        console.log('user logged out');
      }
    })
  }

  handleLogout  = (e) => {
    e.preventDefault();

    auth.signOut().then(() => {
      window.location.href='/';
    })
  }

  // componentWillUpdate(nextProps, nextState) {
  //   if(nextState.userData !== this.state.userData){
  //     return true
  //   }
  // }

  

//   setUser = () => {
//     axios.get(`https://foodappusersfavoritefood.firebaseio.com/korisnik.json`)
//     .then( res => { 

//         let data = this.formatData(res.data);
//         console.log('DATA SA SERVERA O USERU ==>', data)
//         this.setState({
//           userData : this.formatData(data)[0],
//           userActive : true,
//           idUser : data[0].fireBaseUSERId,
//           favoriteFood : data[0].favFood
//         })
//     })
//   }

// formatData = (responseData) => {
//     const data = [];
//     for (const user in responseData) {
//         data.push({
//             ...responseData[user],
//             fireBaseUSERId: user,
//         })
//     }
//     return data;
// }




  render() {
    const { data, userID } = this.state;
    return (
      <BrowserRouter>
        <div className='App'>
         { console.log("ID JE ==>", this.state.userID) }
          <Header
              setData = { ( newData ) => this.setData( newData ) }
              handleLogout = { ( e ) => this.handleLogout( e )}
              // userData = { userData }
          />
          <Route 
            path='/home' 
            render={(props) => < Home 
                                  {...props} 
                                  data={ data }
                                  userID={ userID }
                                  // addToFavorite = { (e) => this.addToFavorite(e)}
                  />}
          />
          <Route 
            exact path='/' 
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