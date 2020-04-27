import React, { Component } from 'react';
import { db } from '../config/Fire';
import { bla, changeModal } from '../Functions';

import FoodList from './FoodList';
import Food from './Food';

class Home extends Component {

    constructor() {
        super();

        // this.changeModal = this.changeModal.bind(this);

        this.state = {
            tr : false,
            selectedData : {},
            showModal : false,
            show : false
        }
        // this.changeModal = this.changeModal.bind(this);
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
        this.setState({
          selectedData : e,
        })
    }
    

    // changeModal = () => {
    //   this.setState({
    //     show : false
    //   })
    //   setTimeout(() => {
    //     this.setState({
    //       showModal : false,
    //     })
    //   }, 800);
    // }

    addToFavorite = ( food ) => {
      console.log('OVA je DODATA U FAV ==>', food)

      db.collection(`${ this.props.userID }`).add({
        food
      }).then(() => {
        console.log('DODATO JE')
      }).catch(( err ) => {
        console.log('greska', err)
      })
    }

    nesto = (e) => {
      e.preventDefault();
      changeModal()
    }

    render() {
        const { data, userID } = this.props;
        const { selectedData, showModal, show } = this.state;
        return (
          <div className='body-page-launch'>
            <div className='launchess'>
              { this.state.tr && 
                  <FoodList 
                      data={ data }
                      select={ this.select }
                  />
              }
              { showModal &&
                <Food 
                  // changeModal={ () => this.changeModal() }
                  selectedData={ selectedData }
                  show={ show }
                  addToFavorite={ (e) => this.addToFavorite(e)}
                  nesto={ (e) => this.nesto(e) }
                /> 
              }
            </div> 
          </div> 
        )
    }
}

export default Home;

