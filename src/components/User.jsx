import React, { Component } from 'react';
import './FoodListBeta.css';
import Food from './Food';


class User extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const { favoriteFood, userID, select } = this.props;

        console.log('CARD ', favoriteFood)

        const cardsList = favoriteFood !== undefined ? (
            
            favoriteFood.map( (card, index) => {
                if( index % 2 === 0 ) {
                    return (
                        <div className="column" key={ card.firestoreId } onClick={ () => { select( card ) } } >
                            <div className='prow prow1'>
                            <div>
                            {console.log('CARD ', card)}
                                <div className="thumb_nb" style={{backgroundImage: `url(${ card.food.image })`}}></div>
                                <div className='thumb_color' style={{backgroundImage: `url(${ card.food.image })`}}></div>
                                <div className="description">
                                    <p>{ card.food.label }</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    )
                } else {
                    return (
                        <div className="column" key={ card.firestoreId } onClick={ () => { select( card ) } } >
                            <div className='prow prow2'>
                            <div>
                                <div className="thumb_nb" style={{backgroundImage: `url(${ card.food.image })`}}></div>
                                <div className='thumb_color' style={{backgroundImage: `url(${ card.food.image })`}}></div>
                                <div className="description">
                                    <p>{ card.food.label }</p>
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
                <h1>FAVORITE FOOD</h1>
                <div className="portfolio-tab">
                    { cardsList }
                </div>
                { showModal &&
                    <Food 
                    changeModal={ (e) => this.changeModal(e) }
                    selectedData={ selectedData }
                    show={ show }
                    addToFavorite={ (e) => this.addToFavorite(e)}
                    /> 
                }
            </div>
        );
        
    }
}


export default User;