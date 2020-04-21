import React, {Component} from 'react';
import './FoodList.css';

class FoodList extends Component {
    render() {
        const { data, select } = this.props;

    const cardsList = data !== undefined ? (
        
        data.hits.map( card => {
        return (
            // <div className='rana' key={ card.recipe.label }>
            //     <p>{ card.recipe.label }</p>
            // </div>
            // Math.ceil(recipe.recipe.calories / recipe.recipe.yield)
            
        <div className='food-card' key={ `${card.recipe.label}${card.recipe.calories}` } onClick={ () => { select( card.recipe.label ) } } >
            <img className='food-card-img' src= { card.recipe.image } alt={ card.recipe.label } />
            <div className='food-card-data'>
                <p>{ card.recipe.label }</p>
                <p>{ Math.ceil(card.recipe.calories / card.recipe.yield) }</p> 
            </div>
        </div>    
        )
        }
        )
    ) 
    :
    (
        <div className='center movie-list-no-movie'>No Food</div>
    )


    return (
        <div className='box' >
            {/* <input type='text' id='search' placeholder='Search ...' onChange={ search } /> */}
            <div className='box-with-data'>
                { cardsList }
            </div>
        </div>
    );
}
}

export default FoodList;
