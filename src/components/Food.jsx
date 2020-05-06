import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import uuid from 'uuid/v1';
import './Food.css';
import Slide from 'react-reveal/Slide';


const Food = ({ del, add }) => {
    
    const { ingData, nutDataEven, nutDataOdd } = useContext(AppContext);
    const { selectedFood } = useContext(AppContext);
    const { show } = useContext(AppContext);
    const { closeModal } = useContext(AppContext);
    const { addToFavorite } = useContext(AppContext);
    const { deleteFood } = useContext(AppContext);

    return (
        <Slide left when={ show }>
            <div className='prvi'>
            <img src={require('../assets/modalBg1.jpeg') } alt='bgimg' className='test'/>
            <div id='food-modal' className='food-modal-container'>
                <button onClick={ () => closeModal() } className="btn-floating btn-small waves-effect waves-light light-green btn right">
                    <i className="material-icons">close</i>
                </button>
                { del &&
                <button onClick={() => deleteFood(selectedFood)} className="btn-floating btn-small waves-effect waves-light light-green btn right">
                    <i className="material-icons">delete</i>
                </button>
                }
                { add &&
                <button onClick={() => addToFavorite(selectedFood)} className="btn-floating btn-small waves-effect waves-light light-green btn right">
                    <i className="material-icons">add</i>
                </button>
                }
                <div className='food-modal-content-data'>
                    <div className='food-modal-content content-img'>
                        <img src={ selectedFood.recipe.image } alt={ selectedFood.recipe.image }/>
                    </div>
                    <div className='food-modal-content content-ing'>
                        <div className='ing-data-container'>
                            <div className='ing-title'>
                                <h3>INGREDIENTS</h3>
                                <h5>For { selectedFood.recipe.yield } person</h5>
                            </div>
                            <div className='ing-data'>
                                <ul className='ing-data-list'>
                                    { 
                                        ingData.map( ( item ) => {
                                            return (
                                                <li key={ uuid() } className='nut-data-item' >
                                                    <span className='nut-item-label'>{ item }</span>
                                                </li>
                                            )
                                        }
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='food-modal-content content-nut'>
                        <h1>
                            { selectedFood.recipe.label }
                        </h1>
                        <div className='nut-data-container'>
                            <h3>NUTRIENS VALUES</h3>
                            <div className='nut-data'>
                                <ul className='nut-data-list nut-left'>
                                    { 
                                        nutDataEven.map(( item ) => {
                                            return (
                                                <li key={ uuid() } className='nut-data-item' >
                                                    <span className='nut-item-label'>{ item.label }</span>
                                                    <span className='nut-item-quantity-and-unit'>{ item.quantity.toFixed(0) }{ item.unit }</span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                <ul className='nut-data-list nut-right'>
                                {
                                    nutDataOdd.map( ( item ) => {
                                        return (
                                            <li key={ uuid() } className='nut-data-item' >
                                                <span className='nut-item-label'>{ item.label }</span>
                                                <span className='nut-item-quantity-and-unit'>{ item.quantity.toFixed(0) }{ item.unit }</span>
                                            </li>
                                        )
                                    })
                                }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            </div>
        </Slide>
    )
}

export default Food;