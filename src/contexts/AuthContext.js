import React, { createContext, useState } from 'react';
import { auth } from '../config/Fire';
import {db} from '../config/Fire';
// import * as firebase from 'firebase/app';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [login, setLoging] = useState([
        {logEmail : '', logPassword : ''}
    ]);
    const [register, setRegister] = useState([
        {regEmail : '', regPassword : ''}
    ]);
    const [useriD, setUseriD] = useState([
        {userid : ''}
    ]);

    const addUserID = (userid) => {
        setUseriD([{userid}])
    }

    const loginUser = (logEmail, logPassword) => {
        setLoging([{logEmail, logPassword}]);

        auth.signInWithEmailAndPassword( logEmail, logPassword ).then( cred => {
            setTimeout(() => {
                window.location.href='/home';
            }, 2000) 
        })
    }
    const registerUser = (regEmail, regPassword) => {
        setRegister([{regEmail, regPassword}]);

        auth.createUserWithEmailAndPassword( regEmail, regPassword ).then( cred => {
            return addUserID(`${ cred.user.uid }`)})
            .then(() => {
                setTimeout(() => {
                    window.location.href='/home';
                }, 2000) 
            })
    }
    return (
        <AuthContext.Provider value={{ useriD, login, register, loginUser, registerUser}}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;


// auth.signInWithEmailAndPassword( email, password ).then( cred => {
//     this.notificationActiviti( this.state.notifications.logSuccessfully, 'successfully' );
//     this.setState({
//         logEmail : '',
//         logPassword : ''
//     })
//     setTimeout(() => {
//         window.location.href='/home';
//     }, 2000) 
// })



// auth.createUserWithEmailAndPassword( email, password ).then( cred => {
//     return db.collection(`${ cred.user.uid }`)})
//     .then(() => {
//         this.notificationActiviti( this.state.notifications.regSuccessfully, 'successfully' );
//         this.setState({
//             regEmail : '',
//             regPassword : ''
//         })
//         setTimeout(() => {
//             window.location.href='/home';
//         }, 2000) 
//     })
