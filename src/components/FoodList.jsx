import React, {Component} from 'react';
import './FoodListBeta.css';

class FoodList extends Component {

    // state = {
    //     activePage : 15
    // }

    render() {
        const { data, select } = this.props;

    const cardsList = data !== undefined ? (
        
        data.hits.map( (card, index) => {
            if( index % 2 === 0 ) {
                return (
                    <div className="column" key={ `${card.recipe.label}${card.recipe.calories}${ card.index }` } onClick={ () => { select( card ) } } >
                        <div className='prow prow1'>
                        <div>
                            <div className="thumb_nb" style={{backgroundImage: `url(${ card.recipe.image })`}}></div>
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
                    <div className="column" key={ `${card.recipe.label}${card.recipe.calories}` } onClick={ () => { select( card ) } } >
                        <div className='prow prow2'>
                        <div>
                            <div className="thumb_nb" style={{backgroundImage: `url(${ card.recipe.image })`}}></div>
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
    }}

export default FoodList;
