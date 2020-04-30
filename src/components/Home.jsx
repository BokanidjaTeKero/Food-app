// import React, { Component } from 'react';
// import { db } from '../config/Fire';
// import { bla, changeModal } from '../Functions';

// import FoodList from './FoodList';
// import Food from './Food';

// class Home extends Component {

//     constructor() {
//         super();

//         this.state = {
//             tr : false,
//             selectedData : {},
//             showModal : false,
//             show : false
//         }
//     }

//     componentDidUpdate(prevProps, prevState) {
//         if (prevProps.data !== this.props.data ) {
//           this.setState({
//               tr : true,
//           })
//         } else if ( prevState.selectedData !== this.state.selectedData ){
//           this.setState({
//             showModal : true,
            
//           })
//           setTimeout(() => {
//             this.setState({
//               show : true
//             })
//           }, 10);
//         }
//       }

//     select = (e) => {
//         this.setState({
//           selectedData : e,
//         })
//     }
    

//     changeModal = () => {
//       this.setState({
//         show : false
//       })
//       setTimeout(() => {
//         this.setState({
//           showModal : false,
//         })
//       }, 800);
//     }

//     addToFavorite = ( food ) => {
//       console.log('OVA je DODATA U FAV ==>', food)

//       db.collection(`${ this.props.userID }`).add({
//         food
//       }).then(() => {
//         console.log('DODATO JE')
//       }).catch(( err ) => {
//         console.log('greska', err)
//       })
//     }


//     render() {
//         const { data, userID } = this.props;
//         const { selectedData, showModal, show } = this.state;
//         return (
//           <div className='body-page-launch'>
//             <div className='launchess'>
//               { this.state.tr && 
//                   <FoodList 
//                       data={ data }
//                       select={ this.select }
//                   />
//               }
//               { showModal &&
//                 <Food 
//                   changeModal={ () => this.changeModal() }
//                   selectedData={ selectedData }
//                   show={ show }
//                   addToFavorite={ (e) => this.addToFavorite(e)}
//                   // nesto={ (e) => this.nesto(e) }
//                 /> 
//               }
//             </div> 
//           </div> 
//         )
//     }
// }

// export default Home;



import React, { useContext, useState, useEffect } from 'react';
// import AppContextProvider from '../contexts/AppContext';
import { AppContext } from '../contexts/AppContext';
// import { auth } from '../config/Fire';
// import {db} from '../config/Fire';



import FoodList from './FoodList';
// import Food from './Food';

const Home = () => {
  const { searchedData } = useContext(AppContext);
  console.log('HOME SEARCH DATA', searchedData)
  return searchedData.q !== undefined  ? (
    <div className='body-page-launch'>
      <div className='launchess'>
        {/* {console.log('data je')} */}
         <FoodList />
         {console.log('DATA IMA HOME', searchedData)}
        {/* <Food />   */}
      </div> 
    </div> 
  ) : (
    <div className='body-page-launch'>
      <div className='launchess'>
        <h1>Home</h1>
        {console.log('DATA nema HOME', searchedData)}
        {/* {console.log('data je')} */}
         {/* <FoodList /> */}
        {/* <Food />   */}
      </div> 
    </div> 
  )
//   const [useriD, setUserID] = useState();
  

//   const { addFavFood } = useContext(AppContext);
//   // const { useriD } = useState();
//   const { favoriteFood, setFavFood  } = useState();

  

//   const trackingAuthStatus = () => {
//     auth.onAuthStateChanged( user => {
//         if( user ){
//             addUser(user.uid)
//             setupUI(user)
//             console.log('user je =>', user)
//         } else {
//             setupUI()
//             console.log('else je')
//         }
//     })
// }

  


//   const setupUI = (user) => {

//     const loggedInLinks = document.querySelectorAll('.logged-in');
//     const loggedOutLinks = document.querySelectorAll('.logged-out');

//     if( user ){

//     db.collection(useriD).get().then((querySnapshot) => {

//         const collection = [];
//         querySnapshot.forEach((doc) => {
//         collection[doc.id] = doc.data();  
//         });
//         addFavFood(formatData(collection))
//         console.log('data je', (formatData(collection)))
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

// trackingAuthStatus()

  // return (
  //   <div className='body-page-launch'>
  //     <div className='launchess'>
  //       {/* {console.log('data je')} */}
  //        <FoodList />
  //       {/* <Food />   */}
  //     </div> 
  //   </div> 
  // )
}

export default Home;
