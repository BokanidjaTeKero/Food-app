import React, { useContext, useState } from 'react';
import { AppContext } from '../contexts/AppContext';
import './FoodListBeta.css';
import FoodList from './FoodList';
import Food from './Food';

const User = () => {
    const { showModal } = useContext(AppContext);
    const { favFood } = useContext(AppContext);
    const { selectFood } = useContext(AppContext);
    const { changeSearchBarShowMode } = useContext(AppContext);
    const [btnAvailableDel] = useState(true);
    const [btnAvailableAdd] = useState(false);

    changeSearchBarShowMode(false)

    return favFood !== undefined && favFood !== null && favFood.length > 0 ? (
        <div className='user-container'>
          <div className='user-content'>
            <FoodList data={ favFood } selectData={ selectFood }/>
            { showModal &&
              <Food del={ btnAvailableDel } add={ btnAvailableAdd } /> 
            }
          </div> 
        </div> 
      ) : (
        <div className='user-container'>
          <div className='user-content'>
            <h1>User</h1>
          </div> 
        </div> 
      )
}

export default User;
