import React, { createContext, useState, useEffect } from 'react';
// import { auth } from '../config/Fire';
// import {db} from '../config/Fire';

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [useriD, setUser] = useState([
        {us : ''}
    ]);

    const [favoriteFood, setFavoriteFood] = useState([
        {food : {}}
    ]);

    const addUser = (us) => {
        setUser([{us}])
    }

    const addFavFood = (food) => {
        setFavoriteFood([{food}])
    }

    // useEffect(() => {
    //     trackingAuthStatus()
    //     console.log('radi')
    // })

    // const trackingAuthStatus = () => {
    //     auth.onAuthStateChanged( user => {
    //         if( user ){
    //             addUser(user.uid)
    //             // setupUI(user)
    //             console.log('user je =>', user)
    //         } else {
    //             // setupUI()
    //             console.log('else je')
    //         }
    //     })
    // }

    // const setupUI = (user) => {

    //     const loggedInLinks = document.querySelectorAll('.logged-in');
    //     const loggedOutLinks = document.querySelectorAll('.logged-out');

    //     if( user ){

    //     db.collection(useriD).get().then((querySnapshot) => {

    //         const collection = [];
    //         querySnapshot.forEach((doc) => {
    //         collection[doc.id] = doc.data();  
    //         });
    //         addFavFood(formatData(collection))
    //         // this.setState({
    //         // favoriteFood : formatData(collection)
    //         // })
    //     });

    //     loggedInLinks.forEach( item => item.style.display = 'block');
    //     loggedOutLinks.forEach( item => item.style.display = 'none');
    //     } else {
    //     loggedInLinks.forEach( item => item.style.display = 'none');
    //     loggedOutLinks.forEach( item => item.style.display = 'block');
    //     }
    // }

    // const formatData = (responseData) => {
    //     const data = [];
    //     for (const user in responseData) {
    //         data.push({
    //             ...responseData[user],
    //             firestoreId: user,
    //         })
    //     }
    //     return data;
    // }
    return (
        <AppContext.Provider value={{useriD, addUser, addFavFood, favoriteFood }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;


// formatData = (responseData) => {
//     const data = [];
//     for (const user in responseData) {
//         data.push({
//             ...responseData[user],
//             firestoreId: user,
//         })
//     }
//     return data;
// }





// setupUI = ( user ) => {

//     const loggedInLinks = document.querySelectorAll('.logged-in');
//     const loggedOutLinks = document.querySelectorAll('.logged-out');

//     if( user ){

//       db.collection(`${this.state.userID}`).get().then((querySnapshot) => {

//         const collection = [];
//         querySnapshot.forEach((doc) => {
//           collection[doc.id] = doc.data();  
//         });

//         this.setState({
//           favoriteFood : this.formatData(collection)
//         })
//     });

//       loggedInLinks.forEach( item => item.style.display = 'block');
//       loggedOutLinks.forEach( item => item.style.display = 'none');
//     } else {
//       loggedInLinks.forEach( item => item.style.display = 'none');
//       loggedOutLinks.forEach( item => item.style.display = 'block');
//     }
//   }




// trackingAuthStatus(){
//     auth.onAuthStateChanged( user => {
//         if( user ){
//         this.setState({
//             userID : user.uid
//         })
//         this.setupUI(user)
//         } else {
//         this.setupUI()
//         }
//     })
// }

