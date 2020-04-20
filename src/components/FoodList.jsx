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
            
            
        <div className='food-card' key={ card.recipe.label } onClick={ () => { select( card.recipe.label ) } } >
            <img className='food-card-img' src= { card.recipe.image } alt={ card.recipe.label } />
            <div className='food-card-data'>
                <p>{ card.recipe.label }</p>
                {/* <p>{ card.launch_site.site_name}</p>  */}
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
