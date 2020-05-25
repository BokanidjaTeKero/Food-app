import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AuthContextProvider from './contexts/AuthContext';
import AppContextProvider from './contexts/AppContext';
import { auth } from './config/Fire';
import {db} from './config/Fire';

import Header from './components/Header';
import LogReg from './components/LogReg';
import Home from './components/Home';
import User from './components/User';


const App = () => {

  const [userID, setUserID] = useState();

  console.log('userID ==>', userID)
  const trackingAuthStatus = () => {
    auth.onAuthStateChanged( user => {
        if( user ){
            setupUI(user)
        } else {
            setupUI()
        }
    })
}

  const setupUI = (user) => {
    const loggedInLinks = document.querySelectorAll('.logged-in');
    const loggedOutLinks = document.querySelectorAll('.logged-out');

    if( user ){
      setUserID(user.uid)
    db.collection(user.uid).get().then((querySnapshot) => {

        const collection = [];
        querySnapshot.forEach((doc) => {
        collection[doc.id] = doc.data(); 
        });
    });

    loggedInLinks.forEach( item => item.style.display = 'block');
    loggedOutLinks.forEach( item => item.style.display = 'none');
    } else {
    loggedInLinks.forEach( item => item.style.display = 'none');
    loggedOutLinks.forEach( item => item.style.display = 'block');
    }
  }

  // window.onload(console.log('load'))

useEffect(() => {
  trackingAuthStatus()
}, [])

  return(
    <BrowserRouter>
      <div className='App'>
        <AuthContextProvider>
          <AppContextProvider>
            <Header 
              setData = { ( newData ) => this.setData( newData ) }
            />
            <Route path='/home' component={ Home } />
            <Route path='/user' component={ User } />
            <Route exact path='/' component={ LogReg } />
          </AppContextProvider>
        </AuthContextProvider>
      </div>
    </BrowserRouter>
  )
}

export default App;