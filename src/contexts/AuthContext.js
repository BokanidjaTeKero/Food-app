import React, { createContext, useState } from 'react';
import { auth } from '../config/Fire';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [login, setLoging] = useState([
        {logEmail : '', logPassword : ''}
    ]);
    const [register, setRegister] = useState([
        {regEmail : '', regPassword : ''}
    ]);


    // const [useriD, setUseriD] = useState([
    //     {userid : ''}
    // ]);

    // const addUserID = (userid) => {
    //     setUseriD([{userid}])
    // }


// notifications
const notificationShow = {
    activity : {
        active : ' notification-active',
        deactive : ''
    }
}

const [activity, setActivity] = useState(
    false
)
const notificationActivity = () => {
    setActivity(true);
    setTimeout(() => {
        setActivity(false)
    }, 3000)
}
const [msg, setMsg] = useState(
    false
)
const notificationMsg = {
    good : {
        status : ' successfullyReg',
        msg : 'Welcome!'
    },
    bad : {
        status : ' unsuccessfullyReg',
        msg : 'Error!'
    }
}

// logging user
    const loginUser = (logEmail, logPassword) => {
        setLoging([{logEmail, logPassword}]);

        auth.signInWithEmailAndPassword( logEmail, logPassword ).then( cred => {
            notificationActivity();
            setMsg(true);
            setTimeout(() => {
                window.location.href='/home';
            }, 2000) 
        })
        .catch(error => {
            notificationActivity();
            setMsg(false)
        })
    }

// registering user
    const registerUser = (regEmail, regPassword) => {
        setRegister([{regEmail, regPassword}]);

        auth.createUserWithEmailAndPassword( regEmail, regPassword ).then( cred => {
                notificationActivity();
                setMsg(true);
                setTimeout(() => {
                    window.location.href='/home';
                }, 2000) 
            })
            .catch(error => {
                notificationActivity();
                setMsg(false)
            })
    }


// show log in or register menu
    const [menU, setMenu] = useState(
        true
    )
    const toggleMenu = () => {
        setMenu(!menU)
        console.log(menU)
    }
    const menuClasses = {
        reg : {
            overlay : ' overlay-right',
            form : ' hide-form-container'
        },
        log : {
            overlay : '',
            form : ''
        }
    }
    return (
        <AuthContext.Provider 
                                value={{ login, register, 
                                        loginUser, registerUser, 
                                        menU, toggleMenu, 
                                        menuClasses, notificationShow,
                                        activity, notificationMsg,
                                        msg
                                }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;

 // const [useriD, setUseriD] = useState([
    //     {userid : ''}
    // ]);

    // const addUserID = (userid) => {
    //     setUseriD([{userid}])
    // }