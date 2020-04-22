import React, {Component} from 'react';
import './Food.css';


class Food extends Component {

    // constructor() {
    //     super();
    //     this.state = {}
        
    // }


// = ( { selectedData, changeModal } ) => {
    componentDidMount() {
        document.getElementById('food-modal').classList.add('food-modal-show')
    }
    

render() {
    const { changeModal, selectedData } = this.props;

    const foodData = this.props.selectedData !== undefined ? (
    
        
        <div id='food-modal' className='food-modal-container'>
            <button onClick={ () =>  changeModal() } className="btn-floating btn-small waves-effect waves-light light-green btn">
                <i className="material-icons">close</i>
            </button>
            <div className='launch-data'>
                <p>Mission Name : { selectedData.recipe.label }</p>
                <p>Mission Name :modal element</p>
            </div>
    </div> 

) 
:
(
     <div>addadsadad</div>
)


return(
    <div>
        { foodData }
    </div>
)



}}

export default Food;