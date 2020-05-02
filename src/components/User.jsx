// import React, { Component } from 'react';
// import './FoodListBeta.css';
// import Food from './Food';


// class User extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {

//         }
//     }

//     render() {
//         const { favoriteFood, userID, select } = this.props;

//         console.log('CARD ', favoriteFood)

//         const cardsList = favoriteFood !== undefined ? (
            
//             favoriteFood.map( (card, index) => {
//                 if( index % 2 === 0 ) {
//                     return (
//                         <div className="column" key={ card.firestoreId } onClick={ () => { select( card ) } } >
//                             <div className='prow prow1'>
//                             <div>
//                             {console.log('CARD ', card)}
//                                 <div className="thumb_nb" style={{backgroundImage: `url(${ card.food.image })`}}></div>
//                                 <div className='thumb_color' style={{backgroundImage: `url(${ card.food.image })`}}></div>
//                                 <div className="description">
//                                     <p>{ card.food.label }</p>
//                                 </div>
//                             </div>
//                         </div>
//                         </div>
//                     )
//                 } else {
//                     return (
//                         <div className="column" key={ card.firestoreId } onClick={ () => { select( card ) } } >
//                             <div className='prow prow2'>
//                             <div>
//                                 <div className="thumb_nb" style={{backgroundImage: `url(${ card.food.image })`}}></div>
//                                 <div className='thumb_color' style={{backgroundImage: `url(${ card.food.image })`}}></div>
//                                 <div className="description">
//                                     <p>{ card.food.label }</p>
//                                 </div>
//                             </div>
//                         </div>
//                         </div>
//                     )
//                 }
//             }
//             )) : 
//             (
//                 <div className='center movie-list-no-movie'>No Food</div>
//             )
    
//         return (
        
//             <div className="element">
//                 <h1>FAVORITE FOOD</h1>
//                 <div className="portfolio-tab">
//                     { cardsList }
//                 </div>
//                 {/* { showModal &&
//                     <Food 
//                     changeModal={ (e) => this.changeModal(e) }
//                     selectedData={ selectedData }
//                     show={ show }
//                     addToFavorite={ (e) => this.addToFavorite(e)}
//                     /> 
//                 } */}
//             </div>
//         );
        
//     }
// }


// export default User;

import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import './FoodListBeta.css';
import FoodList from './FoodList';
import Food from './Food';
// import Food from './Food';

const User = () => {
    const { showModal } = useContext(AppContext);
    const { favFood } = useContext(AppContext);
    const { selectFood } = useContext(AppContext);
    // return (
    //     <div>
            
    //     </div>
    // )
    return favFood.length  ? (
        <div className='body-page-launch'>
            {console.log('FAV IZ FAV', favFood)}
          <div className='launchess'>
            {/* {console.log('data je')} */}
            { favFood !== undefined  &&
                <FoodList data={ favFood } selectData={ selectFood }/>
            }
             {/* <FoodList data={ favFood } selectData={ selectFood }/> */}
             {/* {console.log('DATA IMA HOME', searchedData)} */}
            { showModal &&
              <Food /> 
            }
             
          </div> 
        </div> 
      ) : (
        <div className='body-page-launch'>
          <div className='launchess'>
            <h1>User</h1>
            {/* {console.log('DATA nema HOME', searchedData)} */}
            {/* {console.log('data je')} */}
             {/* <FoodList /> */}
            {/* <Food />   */}
          </div> 
        </div> 
      )
}

export default User;
