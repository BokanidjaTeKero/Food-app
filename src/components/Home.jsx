import React, { useContext, useState } from 'react';
import { AppContext } from '../contexts/AppContext';
import './Home.css';
import FoodList from './FoodList';
import Food from './Food';
import Pagination from './Pagination';

const Home = () => {
  const { showModal } = useContext(AppContext);    
  const { searchedData, selectFood } = useContext(AppContext);
  const { changeSearchBarShowMode } = useContext(AppContext);
  const [btnAvailableDel] = useState(false);
  const [btnAvailableAdd] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

// Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

// Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  changeSearchBarShowMode(true)

  return searchedData.q !== undefined  ? (
    <div className='home-container'>
      <div className='home-content'>
        <FoodList data={ searchedData.hits.slice(indexOfFirstPost, indexOfLastPost) } selectData={ selectFood }/>
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
    <div className='home-container'>
      <div className='home-content margin-top'>
        <h1>Welcome</h1>
        <h3>
          <span className='orange-c'>I</span><span className='green-c'>food</span><span className='black-c'>App</span> is a place where you can find your favorite recipes,
          you can add them to your favorites and view them later in the <span className='orange-c'>MyFavFood</span> section.
        </h3>
        <h4>Take your time look around</h4>
      </div> 
    </div> 
  )
}

export default Home;