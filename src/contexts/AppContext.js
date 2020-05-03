import React, { createContext, useState, useEffect } from 'react';
import {db} from '../config/Fire';

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [searchedData, setSearchedData] = useState({});
    const addData = (searchedData) => {
        setSearchedData(searchedData)
    }

// favorite food data
    const [favFood, setFavFood] = useState({});
    const addFavFood = (favFood) => {
        setFavFood(favFood)
    }

// user
    const [userID, setUserID] = useState();
    const addUserID = (userID) => {
        setUserID(userID)
    }

//loader
    const [loader, setLoader] = useState(false)
    const activeLoader = (loader) => {
        setLoader(loader)
    }

// show searching page / home SearchFilter
// const showSearchOnHome = () => {
//     let search = document.querySelectorAll('.only-show-on-home-page');
//     search.forEach( item => item.style.display = 'block')
// }

// const doNotShowSearch = () => {
//     let search = document.querySelectorAll('.only-show-on-home-page');
//     search.forEach( item => item.style.display = 'none')
// }

// showHome()

// search input
    const [food, setFood] = useState();
    const searchForFood = (food) => {
        setFood(food);
    }
    const apiReqData = {
        key : '0a5a92325d15d099bdb12116ab6dbfb0',
        id : '14f36e30',
    }

// url config
const [filter, setFilter] = useState( false );
const [myHealth, setMyHealth] = useState('');
const [myDiet, setMyDiet] = useState('');
const [myCalories, setMyCalories] = useState('');
const [healthChBoxValues, setHealthChBoxValues] = useState([]);
const [dietChBoxValues, setDietChBoxValues] = useState([]);
const [myMinCal, setMyMinCal] = useState('');
const [myMaxCal, setMyMaxCal] = useState('');

// url config part ||
    const deployingUrl = () => {
        
        setMyHealth( urlConfig( healthChBoxValues, 'health' ))
        setMyDiet( urlConfig( dietChBoxValues, 'diet' ))
        setMyCalories( caloriesUrlConfig( myMinCal, myMaxCal ))
        
        setFilter(false) // OVO SREDI !!!!!!!!!!!!!!!!!!!!!!!!!!!
    }
    
    const urlConfig = ( data, type ) => {
        
        const url = data.length ? (
            data.map( item => {
                return `&${ type }=${ item }`
            } )
        ) :
        (
            console.log('nothing is selected as a filter')
        )
        
        let joinedUrl = '';
        url !== undefined ? (
            joinedUrl = url.join('')
        ) 
        : 
        (
            joinedUrl = ''
        )
        
        return joinedUrl
    }

    const caloriesUrlConfig = ( min, max) => {
    
        let url = '';
        min.length ? (
            url = `&calories=${ min }-${ max }`
        ) 
        : 
        (
            url = ''
        )
        return url;
    }
    
    // calories filter
    
    const handleCaloriesBox = (value) => {
        let txt = value.target.value;
        let id = value.target.id;
    
        id === 'min-cal' ? 
        (
            setMyMinCal(txt)
        ) 
        : 
        (
            setMyMaxCal(txt)
        )
    }

    const handleCheckBox = (value) => {
        let itemValue = value.target.value;
        let group = value.target.name;
        let data;

        group === 'health' ? 
        data = healthChBoxValues :
        data = dietChBoxValues

        if(itemValue !== undefined){
            if(data.includes( itemValue )) {
                let position = data.indexOf( itemValue );
                data.splice( position, 1)
                group === 'health' ? 
                setHealthChBoxValues(data) :
                setDietChBoxValues(data)
                
            } else {
                data[data.length] = itemValue
                group === 'health' ? 
                setHealthChBoxValues(data) :
                setDietChBoxValues(data)
            }
        }    
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

// adding food to favorite 

    const addToFavorite = ( food ) => {
        console.log('OVA je DODATA U FAV ==>', food.recipe)
        console.log('UID ==>', userID)
        let hits = food;

        db.collection( userID ).add(
            hits
        ).then(() => { getFavoriteFoodData()}).catch(( err ) => {
        console.log('greska', err)
        })
    }

    const formatData = (responseData) => {
        const data = [];
        for (const user in responseData) {
            data.push({
                ...responseData[user],
                firestoreId: user,
            })
        }
        return data;
    }

    useEffect(() => {
        console.log('FAV FOOD JE USE EFF ==>', favFood)
    }, [favFood])

// delete favorite food
const deleteFood = (food) => {
    console.log('delete', food.firestoreId)
    db.collection(userID).doc(food.firestoreId).delete().then(() => {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
    closeModal()
    getFavoriteFoodData()
}

// get favorite food data
const getFavoriteFoodData = () => {
    db.collection(userID).get().then((querySnapshot) => {
        const collection = [];
        querySnapshot.forEach((doc) => {
        collection[doc.id] = doc.data(); 
        
        });
        addFavFood(formatData(collection))
    })
}


    return (
        <AppContext.Provider value={{ searchedData, food,
                                    searchForFood, apiReqData, 
                                    addData, activeLoader,selectFood,
                                    show, ingData, nutDataEven, nutDataOdd,
                                    selectedFood, loader, setShow, closeModal,
                                    showModal, myHealth, myDiet, deployingUrl,
                                    handleCheckBox, filter, handleCaloriesBox,
                                    myCalories, addUserID, addToFavorite, userID, setUserID,
                                    addFavFood, favFood, deleteFood
                                    }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;

