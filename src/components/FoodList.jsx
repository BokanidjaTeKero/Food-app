import React from 'react';
import './FoodListBeta.css';
import uuid from 'uuid/v1';

const FoodList = ({ data, selectData }) => {

const cardsList = data !== undefined ? (
    
    data.map( (card, index) => {
        if( index % 2 === 0 ) {
            return (
                <div className="column" key={ card.firestoreId || uuid() } onClick={ () => { selectData( card ) } } >
                    <div className='prow prow1'>
                    <div>
                        <div className="thumb_nb" style={{backgroundImage: `url(${ card.recipe.image })`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                        <div className='thumb_color' style={{backgroundImage: `url(${ card.recipe.image })`}}></div>
                        <div className="description">
                            <p>{ card.recipe.label }</p>
                        </div>
                    </div>
                </div>
                </div>
            )
        } else {
            return (
                <div className="column" key={ card.firestoreId || uuid() } onClick={ () => { selectData( card ) } } >
                    <div className='prow prow2'>
                    <div>
                        <div className="thumb_nb" style={{backgroundImage: `url(${ card.recipe.image })`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                        <div className='thumb_color' style={{backgroundImage: `url(${ card.recipe.image })`}}></div>
                        <div className="description">
                            <p>{ card.recipe.label }</p>
                        </div>
                    </div>
                </div>
                </div>
            )
        }
    }
    )) : 
    (
        <div className='center movie-list-no-movie'>No Food</div>
    )

    return (
    
        <div className="element">
            <div className="portfolio-tab">
                { cardsList }
            </div>
        </div>
    );
    
}

export default FoodList;


