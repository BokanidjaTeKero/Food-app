import React, { Component } from 'react';

import FoodList from './FoodList';
import Food from './Food';
// import LightSpeed from 'react-reveal/LightSpeed';

class Home extends Component {

    constructor() {
        super();

        this.state = {
            tr : false,
            showModal : false,
            selectedData : {},
            show : false
        }
    }

 

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.data !== this.props.data ) {
          this.setState({
              tr : true,
          })
        } else if ( prevState.selectedData !== this.state.selectedData ){
          this.setState({
            showModal : true,
            
          })
          setTimeout(() => {
            this.setState({
              show : true
            })
          }, 10);
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
      // document.getElementById('food-modal').classList.add('test1')
      this.setState({
        // showModal : false,
        show : false
      })
      setTimeout(() => {
        this.setState({
          showModal : false,
        })
      }, 800);
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
        const { selectedData, showModal, show } = this.state;
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
                // <LightSpeed left>
                  <Food 
                    changeModal={ (e) => this.changeModal(e) }
                    selectedData={ selectedData }
                    show={ show } />
                // </LightSpeed>
                }
            </div> 
          </div> 
        )
    }
}

export default Home;

