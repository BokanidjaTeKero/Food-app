import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../config/Fire';
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
    const [showSearch, setShowSearch] = useState();
    const changeSearchBarShowMode = (showSearch) => {
        setShowSearch(showSearch)
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
        console.log('OVA je DODATA U FAV ==>', food.recipe.image)
        console.log('UID ==>', userID)
        let hits = food;
        let comparator = food.recipe.image;

    // comparing the food item for add, with the favorite food data items
        const canBeAdded = favFood.every(item => {
            return item.recipe.image !== comparator
        })

        canBeAdded ? (
            db.collection( userID ).add(
                hits
            ).then(() => { getFavoriteFoodData()}).catch(( err ) => {
            console.log('greska', err)
            })
        ) : (
            console.log('HRANA POSTOJI VEC')
        )
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
        }).catch(error => {
            console.error("Error removing document: ", error);
        });
        getFavoriteFoodData()
        closeModal()
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

    const provera = () => {
        auth.onAuthStateChanged( user => {
        if( user ){
            addUserID(user.uid)
            // console.log('user je home',user.uid)
            favoriteFood(user)
        } else {
            console.log('nema usera home')
        }
    })}

    const favoriteFood = (user) => {
        db.collection(user.uid).get().then((querySnapshot) => {
        const collection = [];
            querySnapshot.forEach((doc) => {
            collection[doc.id] = doc.data();
            });
            addFavFood(formatData(collection))
            }  
        )
    }

    const btnAvailable = {
        del : true,
        add : true
    }

    // const [showSearch, setShowSearch] = useState();

    // const [btnAvailableDel, setBtnAvailableDel] = useState();
    // const [btnAvailableAdd, setBtnAvailableAdd] = useState();

    useEffect(() => {
        provera()
        
    }, [userID])


    return (
        <AppContext.Provider value={{ searchedData, food,
                                    searchForFood, apiReqData, 
                                    addData, activeLoader,selectFood,
                                    show, ingData, nutDataEven, nutDataOdd,
                                    selectedFood, loader, setShow, closeModal,
                                    showModal, myHealth, myDiet, deployingUrl,
                                    handleCheckBox, filter, handleCaloriesBox,
                                    myCalories, addUserID, addToFavorite, userID, setUserID,
                                    addFavFood, favFood, deleteFood, btnAvailable, showSearch,
                                    changeSearchBarShowMode
                                    }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;

