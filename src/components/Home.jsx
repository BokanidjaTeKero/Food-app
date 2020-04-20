import React, { Component } from 'react'

import FoodList from './FoodList';
// import Food from './Food';

class Home extends Component {

    constructor() {
        super();

        this.state = {
            tr : false
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.data !== this.props.data) {
          this.setState({
              tr : true
          })
        }
      }

    select = (e) => {
        console.log('klik selekt ==>', e)
    }

    render() {
        const { data } = this.props;
        return (
          <div className='body-page-launch'>
              { console.log('HOME==>', data) }
            <div className='launchess'>
                <h1>blabla</h1>
                { this.state.tr && 
                    <FoodList 
                        data={ this.props.data }
                        select={ this.select }
                    />
                }
                {/* { click && 
                  <Food launch={ launch } />
                } */}
            </div> 
          </div> 
        )
    }
}

export default Home;

