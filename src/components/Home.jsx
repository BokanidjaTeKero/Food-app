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

    // addToFavorite = ( food ) => {
    //   console.log('OVA je DODATA U FAV ==>', food)

    //   db.collection(`${ this.props.userID }`).add({
    //     food
    //   }).then(() => {
    //     console.log('DODATO JE')
    //   }).catch(( err ) => {
    //     console.log('greska', err)
    //   })
    // }


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
// import { auth } from '../config/Fire';
// import {db} from '../config/Fire';



import FoodList from './FoodList';
import Food from './Food';
import Pagination from './Pagination';

const Home = () => {
  const { showModal } = useContext(AppContext);    
  const { searchedData, selectFood } = useContext(AppContext);
  const [btnAvailableDel, setBtnAvailableDel] = useState(false);
  const [btnAvailableAdd, setBtnAvailableAdd] = useState(true);
  const { changeSearchBarShowMode } = useContext(AppContext);

  // const [posts, setPosts] = useState([]);
  // const [loader, setLoader] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10)
  const { currentPosts } = useContext(AppContext);

// Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = searchedData.slice(indexOfFirstPost, indexOfLastPost);
  
  

// Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  changeSearchBarShowMode(true)

  return searchedData.q !== undefined  ? (
    <div className='body-page-launch'>
      <div className='launchess'>
      {console.log('CURR POST ==>', currentPosts)}
        <FoodList data={ searchedData.hits.slice(indexOfFirstPost, indexOfLastPost) } selectData={ selectFood }/>
        {console.log('rezultat', searchedData.hits.slice(indexOfFirstPost, indexOfLastPost))} 
        { showModal &&
          <Food del={ btnAvailableDel } add={ btnAvailableAdd } /> 
        }
        <Pagination 
          postsPerPage={postsPerPage}
          totalPosts={searchedData.hits.length}
          paginate={paginate}
        />
      </div> 
    </div> 
  ) : (
    <div className='body-page-launch'>
      <div className='launchess'>
        <h1>Home</h1>
      </div> 
    </div> 
  )
}

export default Home;
