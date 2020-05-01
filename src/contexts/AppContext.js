import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [searchedData, setSearchedData] = useState({});
    const addData = (searchedData) => {
        setSearchedData(searchedData)
    }

//loader
    const [loader, setLoader] = useState(false)
    const activeLoader = (loader) => {
        setLoader(loader)
    }

// search input
    const [food, setFood] = useState();
    const searchForFood = (food) => {
        setFood(food);
    }
    const apiReqData = {
        key : '0a5a92325d15d099bdb12116ab6dbfb0',
        id : '14f36e30',
    }
    
// select food
    const [selectedFood, setSelectedFood] = useState()
    const selectFood = (selectedFood) => {
        setSelectedFood(selectedFood);
        foodValues(selectedFood);
        setShowModal(true);
        setTimeout(() => {
            setShow(true)
        },10)
    }

// class of showing food modal
    const [showModal, setShowModal] = useState(false) 
    const [show, setShow] = useState(false)    

// nutriens and ingredients values showing settings
    const [nutData, setNutData] = useState();
    const [ingData, setIngData] = useState();
    const [nutDataEven, setNutDataEven] = useState();
    const [nutDataOdd, setNutDataOdd] = useState();

const foodValueSettings = ( nutValues,ingValues ) => {
        let nutEvenValues = [];
        let nutOddValues = []
        nutValues.map(( item, index ) => {
            if( index % 2 === 0 ){
               return nutEvenValues[nutEvenValues.length] = item;
            } else {
               return nutOddValues[nutOddValues.length] = item;
            }
        })   
        setNutData(nutValues)
        setIngData(ingValues)
        setNutDataEven(nutEvenValues)
        setNutDataOdd(nutOddValues) 
    }
    
const foodValues = (selectedFood) => {
        const nutValues  = Object.values(selectedFood.recipe.totalNutrients);
        const ingValues  = Object.values(selectedFood.recipe.ingredientLines);
        
        foodValueSettings( nutValues,ingValues )
    }

// close food detail modal
    const closeModal = () => {
        setShow(false)
        setTimeout(() => {
            setShowModal(false)
            setSelectedFood('')
        }, 800)
    }

    return (
        <AppContext.Provider value={{ searchedData, food,
                                    searchForFood, apiReqData, 
                                    addData, activeLoader,selectFood,
                                    show, ingData, nutDataEven, nutDataOdd,
                                    selectedFood, loader, setShow, closeModal,
                                    showModal
                                    }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;

