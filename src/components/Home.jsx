import React, { Component } from 'react';

import FoodList from './FoodList';
import Food from './Food';

class Home extends Component {

    constructor() {
        super();

        this.state = {
            tr : false,
            showModal : false,
            selectedData : {}
        }
    }

 

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.data !== this.props.data ) {
          this.setState({
              tr : true,
          })
        } else if ( prevState.selectedData !== this.state.selectedData ){
          this.setState({
            showModal : true
          })
        }
      }

    select = (e) => {
        console.log('klik selekt ==>', e)
        this.setState({
          // showModal : true,
          selectedData : e,
        })
        // this.showFoodModal()
        // document.getElementById('food-modal').classList.add('food-modal-show')
        
    }

    changeModal = () => {
      this.setState({
        showModal : false
      })
    }

    // showFoodModal = () => {
    //   // this.setState({
    //   //   // selectedData : e,
    //   //   showModal : true,
    //   // })
    //   document.getElementById('food-modal').classList.add('food-modal-show')
    // }

    render() {
        const { data } = this.props;
        const { selectedData, showModal } = this.state;
        return (
          <div className='body-page-launch'>
            <div className='launchess'>
                {/* <h1>blabla</h1> */}
                {console.log('DATA SELECTED JE', this.state.selectedData)}
                {console.log('item je', this.state.showModal)}
                { this.state.tr && 
                    <FoodList 
                        data={ data }
                        select={ this.select }
                    />
                }
                { showModal &&
                  <Food 
                    changeModal={ (e) => this.changeModal(e) }
                    selectedData={ selectedData } />
                }
            </div> 
          </div> 
        )
    }
}

export default Home;

