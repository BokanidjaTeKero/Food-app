// import React, { Component } from 'react'
// import { BrowserRouter, Route } from 'react-router-dom';
// import { auth, db } from './config/Fire';
// // import axios from 'axios';

// import Header from './components/Header';
// import Home from './components/Home';
// import LogReg from './components/LogReg';
// import User from './components/User';
// class App extends Component {

//   constructor() {
//     super();

//     this.state = {
//         // key : '0a5a92325d15d099bdb12116ab6dbfb0',
//         // id : '14f36e30',
//         data : [],
//         userID : '',
//         favoriteFood : [],
//     }
// }

//   componentDidMount() {
//     this.trackingAuthStatus();
//     this.setData();
//   }

//   setData = ( newData ) => {
//     this.setState({
//         data : newData
//     })
//   }

//   trackingAuthStatus(){
//     auth.onAuthStateChanged( user => {
//       if( user ){
//         this.setState({
//           userID : user.uid
//         })
//         this.setupUI(user)
//       } else {
//         this.setupUI()
//       }
//     })
//   }

//   handleLogout  = (e) => {
//     e.preventDefault();

//     auth.signOut().then(() => {
//       window.location.href='/';
//     })
//   }

//   formatData = (responseData) => {
//         const data = [];
//         for (const user in responseData) {
//             data.push({
//                 ...responseData[user],
//                 firestoreId: user,
//             })
//         }
//         return data;
//     }


  // setupUI = ( user ) => {

  //   const loggedInLinks = document.querySelectorAll('.logged-in');
  //   const loggedOutLinks = document.querySelectorAll('.logged-out');

  //   if( user ){

  //     db.collection(`${this.state.userID}`).get().then((querySnapshot) => {

  //       const collection = [];
  //       querySnapshot.forEach((doc) => {
  //         collection[doc.id] = doc.data();  
  //       });

  //       this.setState({
  //         favoriteFood : this.formatData(collection)
  //       })
  //   });

  //     loggedInLinks.forEach( item => item.style.display = 'block');
  //     loggedOutLinks.forEach( item => item.style.display = 'none');
  //   } else {
  //     loggedInLinks.forEach( item => item.style.display = 'none');
  //     loggedOutLinks.forEach( item => item.style.display = 'block');
  //   }
  // }


//   render() {
//     const { data, userID, favoriteFood } = this.state;
//     return (
//       <BrowserRouter>
//         <div className='App'>
//           <Header
//               setData = { ( newData ) => this.setData( newData ) }
//               handleLogout = { ( e ) => this.handleLogout( e )}
//               // userData = { userData }
//           />
//           <Route 
//             path='/home' 
//             render={(props) => < Home 
//                                   {...props} 
//                                   data={ data }
//                                   userID={ userID }
//                               />
//                             }
//           />
//           <Route 
//             exact path='/' 
//             component={ LogReg } 
//           />
//           <Route
//             path='/user' 
//             render={(props) => < User 
//                                   {...props} 
//                                   favoriteFood={ favoriteFood }
//                                   userID={ userID }
//                               />
//                             }
//           />
//         </div>
//       </BrowserRouter>
//     )
//   }
// }

// export default App;

//********************************************************************************************************* */

import React, { useContext, useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AuthContextProvider from './contexts/AuthContext';
import AppContextProvider from './contexts/AppContext';
// import { AppContext } from './contexts/AppContext';
import { auth } from './config/Fire';
import {db} from './config/Fire';
// import { AuthContext } from './contexts/AuthContext';

import Header from './components/Header';
import LogReg from './components/LogReg';
import Home from './components/Home';
import User from './components/User';



const App = () => {
  // const { trackingAuthStatus } = useContext(AppContext);
  // const { addUser } = useContext(AppContext);
  // const { loader } = useContext(AppContext);
  // const { addFavFood } = useContext(AppContext);
  const [userID, setUserID] = useState();
  
  

  // const { addFavFood } = useContext(AppContext);
  // // const { useriD } = useState();
  // const { favoriteFood, setFavFood  } = useState();

  

  const trackingAuthStatus = () => {
    auth.onAuthStateChanged( user => {
        if( user ){
            // addUserID(user.uid)
            setupUI(user)
            // console.log('user je =>', user)
        } else {
            setupUI()
        }
    })
}

// const setData = ( newData ) => {
//       this.setState({
//           data : newData
//       })
//     }



// useEffect(() => {
//   trackingAuthStatus();
//   // this.setData();
//   // console.log('useeff app')
// }, [user])

  const setupUI = (user) => {
    // console.log('USER JE' , user)
    const loggedInLinks = document.querySelectorAll('.logged-in');
    const loggedOutLinks = document.querySelectorAll('.logged-out');

    if( user ){
      // addUserID(user.uid)
      setUserID(user.uid)
    db.collection(user.uid).get().then((querySnapshot) => {

        const collection = [];
        querySnapshot.forEach((doc) => {
        collection[doc.id] = doc.data(); 
        // addUserID(user.uid) 
        });
        // addFavFood(formatData(collection))
        // console.log('data je', (formatData(collection)))
        // this.setState({
          // addFavFood(formatData(collection))
        // })
    });

    loggedInLinks.forEach( item => item.style.display = 'block');
    loggedOutLinks.forEach( item => item.style.display = 'none');
    } else {
    loggedInLinks.forEach( item => item.style.display = 'none');
    loggedOutLinks.forEach( item => item.style.display = 'block');
    }

    
}


//   const formatData = (responseData) => {
//     const data = [];
//     for (const user in responseData) {
//         data.push({
//             ...responseData[user],
//             firestoreId: user,
//         })
//     }
//     return data;
// }

// trackingAuthStatus();
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