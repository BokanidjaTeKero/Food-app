import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';


export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [searchedData, setSearchedData] = useState({});

    const addData = (searchedData) => {
        setSearchedData(searchedData)
    }

// search input
const [food, setFood] = useState(
    ''
);
const searchForFood = (food) => {
    setFood(food)
}
const apiReqData = {
    key : '0a5a92325d15d099bdb12116ab6dbfb0',
    id : '14f36e30',
}
// const getData = () => {
//     // e.preventDefault()
    
//     axios.get(`https://api.edamam.com/search?q=${ food }&app_id=${ apiReqData.id }&app_key=${ apiReqData.key }`)
//     .then(res => {
//     // let hrana = res.data;
//     // console.log('HRANA', food)
//     // console.log('HRANA IZ RES/DAT/', hrana)
//     // this.setState({ 
//     //     data : res.data
//     //     });
//     // addData(res.data);
//     setSearchedData(res.data)
//     })
//     // .then(()=> addData())
//     .then(() => /*this.sendData()*/ console.log('MOTHERFUCKING DATA ==>', searchedData))

//     console.log('hrana je he he he ', searchedData)
// }

// const [stanje, setStanje] = useState(false);
// const rokajStanje = () => {
//     setStanje(true)
// }

// useEffect(() => {
//     getData();
// },[food])


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
        <AppContext.Provider value={{ searchedData, addData, 
                                     food,
                                    searchForFood, searchedData,
                                    apiReqData, addData, /*getData*/
                                    }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;

