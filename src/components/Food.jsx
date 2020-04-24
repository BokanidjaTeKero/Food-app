import React, {Component} from 'react';
import './Food.css';
import Slide from 'react-reveal/Slide';

class Food extends Component {

    constructor() {
        super();
        this.state = {
            nutData : [],
            ingData : [],
            nutDataEven : [],
            nutDataOdd : []
        } 
    }

componentDidMount() {
    this.vrednosti();
}

kljucevi = () => {
    const keys = Object.keys(this.props.selectedData.recipe.totalNutrients)
    console.log(keys) 
}

novaFunk = ( nutValues,ingValues ) => {
    let nutEvenValues = [];
    let nutOddValues = []
    nutValues.map(( item, index ) => {
        if( index % 2 === 0 ){
           return nutEvenValues[nutEvenValues.length] = item;
        } else {
           return nutOddValues[nutOddValues.length] = item;
        }
    })
        this.setState({
            nutData : nutValues,
            ingData : ingValues,
            nutDataEven : nutEvenValues,
            nutDataOdd : nutOddValues
        }) 
}

vrednosti = () => {
    const nutValues  = Object.values(this.props.selectedData.recipe.totalNutrients);
    const ingValues  = Object.values(this.props.selectedData.recipe.ingredientLines);

    this.novaFunk( nutValues,ingValues )
}


render() {
    const { changeModal, selectedData, show } = this.props;
    const { nutDataOdd, nutDataEven, ingData } = this.state;

    const foodData = this.props.selectedData !== undefined ? (

    <Slide left when={ show }>
        <div className='prvi'>
        <img src={require('../assets/modalBg1.jpeg') } alt='bgimg' className='test'/>
        <div id='food-modal' className='food-modal-container'>

            
            <button onClick={ () =>  changeModal() } className="btn-floating btn-small waves-effect waves-light light-green btn right">
                <i className="material-icons">close</i>
            </button>
            <div className='food-modal-content-data'>
                <div className='food-modal-content content-img'>
                    <img src={ selectedData.recipe.image } alt={ selectedData.recipe.image }/>
                </div>
                <div className='food-modal-content content-ing'>
                    <div className='ing-data-container'>
                        <div className='ing-title'>
                            <h3>INGREDIENTS</h3>
                            <h5>{ selectedData.recipe.yield }</h5>
                        </div>
                        <div className='ing-data'>
                            <ul className='ing-data-list'>
                                { 
                                    ingData.map( ( item ) => {
                                        return (
                                            <li key={ Math.random() } className='nut-data-item' >
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
                        { selectedData.recipe.label }
                    </h1>
                    <div className='nut-data-container'>
                        <h3>NUTRIENS VALUES</h3>
                        <div className='nut-data'>
                            <ul className='nut-data-list nut-left'>
                                { 
                                    nutDataEven.map(( item ) => {
                                        return (
                                            <li key={ Math.random() } className='nut-data-item' >
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
                                        <li key={ Math.random() } className='nut-data-item' >
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
:
(
    <div>addadsadad</div>
)


return(
    <div>
        { foodData }
    </div>
)}


}

export default Food;