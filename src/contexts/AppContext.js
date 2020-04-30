import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';


export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [searchedData, setSearchedData] = useState({});

    const addData = (searchedData) => {
        setSearchedData(searchedData)
    }

//loader
const [loader, setLoader] = useState(false)

// search input
const [food, setFood] = useState();
const searchForFood = (food) => {
    setFood(food);
    getData()
}
const apiReqData = {
    key : '0a5a92325d15d099bdb12116ab6dbfb0',
    id : '14f36e30',
}
const getData = () => {
    
    setLoader(true)
    axios.get(`https://api.edamam.com/search?q=${ food }&app_id=${ apiReqData.id }&app_key=${ apiReqData.key }`)
    .then(res => {
    addData(res.data);
    console.log('DATA iz getData ========> ', searchedData)
    })
    .then(()=> setLoader(false))
 
}


// useEffect(() => {
//     console.log('data useEffect ========> ', searchedData)
// },[searchedData])

// useEffect(() => {
    
//         getData()
    
// },[])


//Open and close filter menu 
//     const [filter, setFilter] = useState(
//         false
//     )
//     const toggleFilter = (e) => {
//         e.preventDefault();
//         setFilter(!filter)
//     }
//     const filterShow = {
//         open : {
//             class : ' swing-in-top-fwd'
//         },
//         close : {
//             class : ' swing-out-top-bck'
//         }
//     }
// useEffect(() => {},[filter])
    return (
        <AppContext.Provider value={{ searchedData, /*addData,*/ 
                                     food,
                                    searchForFood, 
                                    apiReqData, addData, getData, loader
                                    }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;

