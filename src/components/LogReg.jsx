// import React, { Component } from 'react'
// import './LogReg.css';
// import { auth } from '../config/Fire';
// import {db} from '../config/Fire';
// // import * as firebase from 'firebase/app';

// // import axios from 'axios';

// class LogReg extends Component {

//     state = {

//         regEmail : '',
//         regPassword : '',

//         logEmail : '',
//         logPassword : '',






//         userData : [],

//         allUsers : [],
//         activeUser : {},

//         acName : '',
//         acPassword : '',
//         acEmail : '',
//         acFirebaseId : '',
        
        
//         regName : '',
        

//         notification : '',
//         notifications : {
//             regName : 'The Name must be a minimum of two characters',
//             regPassword : 'The Password must be a minimum of eight characters',
//             regSuccessfully : 'Now you can log in. Thank you for being part of your recipe.',
//             regUnsuccessfully : 'Sorry, something is wrong. Please try again.',
//             regUserExist : 'A user with this email address already exists',
//             logSuccessfully : 'Welcome back. What is on the menu for today?',
//             logUnsuccessfully : 'Email or password do not match any results. Try again, or register if you have not yet.'
//         },

//         status : null,
        
//     }

// componentDidMount() {
//     document.getElementById('container').classList.add('slide-in-fwd-tr');
// }



// //  ==========> NOTIFICATIONS <===========

// notificationActiviti = ( msg, status ) => {
//     this.setState({
//         notification : msg
//     })


//     if( status === 'successfully' ){
//         document.getElementById('notification-panel').classList.add('successfullyReg');
//         document.getElementById('notification-panel').classList.remove('unsuccessfullyReg');
//         document.getElementById('notification-panel').classList.remove('warningReg');
//     } else if ( status === 'unsuccessfully' ){
//         document.getElementById('notification-panel').classList.add('unsuccessfullyReg');
//         document.getElementById('notification-panel').classList.remove('successfullyReg');
//         document.getElementById('notification-panel').classList.remove('warningReg');
//     } else {
//         document.getElementById('notification-panel').classList.add('warningReg');
//         document.getElementById('notification-panel').classList.remove('successfullyReg');
//         document.getElementById('notification-panel').classList.remove('unsuccessfullyReg');
//     }
    
//     setTimeout( () => {
//         document.getElementById('notification-panel').classList.add('notification-active')
//         setTimeout( () => {
//             document.getElementById('notification-panel').classList.remove('notification-active')
//             this.setState({
//                 notification : null
//             },3000)
//         }, 3500)

//         this.setState({
//             status : null
//         })
//     }, 500)
// }



// loginClick = () => {
//     document.getElementById('overlay-panel').classList.remove('overlay-right');
//     document.getElementById('login-form').classList.remove('hide-form-container');
// }

// registerClick = () => {
//     document.getElementById('overlay-panel').classList.add('overlay-right');
//     document.getElementById('login-form').classList.add('hide-form-container');
// }

// handleChange = ( e ) => {
//     this.setState({
//         [e.target.id]: e.target.value
//     })
// }

// handleRegister  = (e) => {
//     e.preventDefault();

//     let email = this.state.regEmail;
//     let password = this.state.regPassword;
    
//     auth.createUserWithEmailAndPassword( email, password ).then( cred => {
//         return db.collection(`${ cred.user.uid }`)})
//         .then(() => {
//             this.notificationActiviti( this.state.notifications.regSuccessfully, 'successfully' );
//             this.setState({
//                 regEmail : '',
//                 regPassword : ''
//             })
//             setTimeout(() => {
//                 window.location.href='/home';
//             }, 2000) 
//         })
// }

// handleLogin = (e) => {
//     e.preventDefault();

//     let email = this.state.logEmail;
//     let password = this.state.logPassword;

//     auth.signInWithEmailAndPassword( email, password ).then( cred => {

//         // console.log(cred.user)

//         this.notificationActiviti( this.state.notifications.logSuccessfully, 'successfully' );
//         this.setState({
//             logEmail : '',
//             logPassword : ''
//         })
//         setTimeout(() => {
//             window.location.href='/home';
//         }, 2000) 
//     })
// }

// render() {
//     const { notification } = this.state;
    
//     return (
//         <div className='LogReg'>
//             <div className="container" id="container">
//                 <div className="form-container login-container" id='login-form'>
//                     <form onSubmit={ (e) => this.handleLogin(e) } action="#">
//                         <h1>Login</h1>
//                         <input id='logEmail' type="email" placeholder="Email" value={ this.state.logEmail } onChange={ this.handleChange } />
//                         <input id='logPassword' type="password" placeholder="Password" value={ this.state.logPassword } onChange={ this.handleChange }/>
//                         <button>Login</button>
//                     </form>
//                 </div>
//                 <div className="form-container register-container" id='register-form'>
//                     <form onSubmit={ (e) => this.handleRegister(e) } action="#">
//                         <h1>Register</h1>
//                         <input id='regEmail' type="email" placeholder="Email" onChange={ this.handleChange } value={ this.state.regEmail } />
//                         <input id='regPassword' type="password" placeholder="Password" onChange={ this.handleChange } value={ this.state.regPassword } />
//                         <button>Register</button>
//                     </form>
//                 </div>
//                 <div className="overlay-container">
//                     <div className='overlay-panel' id='overlay-panel'>
//                         <div onClick={ () => this.registerClick() } className="overlay-panel-item panel-item-left">
//                             <p>Register</p>
//                         </div>
//                         <div onClick={ () => this.loginClick() } className="overlay-panel-item panel-item-right">
//                             <p>Login</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="notification-container">
//                     <div className='notification-panel' id='notification-panel'>
//                         <div className="notification-panel-item">
//                             <p>{ notification }</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         )
//     }
// }

// export default LogReg;




// loginClick = () => {
//     document.getElementById('overlay-panel').classList.remove('overlay-right');
//     document.getElementById('login-form').classList.remove('hide-form-container');
// }

// registerClick = () => {
//     document.getElementById('overlay-panel').classList.add('overlay-right');
//     document.getElementById('login-form').classList.add('hide-form-container');
// }



import React, { useContext, useState, useEffect } from 'react';
import './LogReg.css';
import { AuthContext } from '../contexts/AuthContext';

const LogReg = () => {
    const { menU, menuClasses, 
            toggleMenu, loginUser, 
            registerUser, notificationShow,
            activity, notificationMsg,
            msg
        } = useContext(AuthContext);

    const menu = menU ? menuClasses.reg : menuClasses.log;
    const act = activity ? notificationShow.activity.active : notificationShow.activity.deactive;
    const notMsg = msg ? notificationMsg.good : notificationMsg.bad

    const [logEmail, setLogEmail] = useState('');
    const [logPassword, setLogPassword] = useState('');
    const handleLogin = (e) => {
        e.preventDefault();
        loginUser(logEmail, logPassword);
        setLogEmail('');
        setLogPassword('');
    }
    const [regEmail, setRegEmail] = useState('');
    const [regPassword, setRegPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        registerUser(regEmail, regPassword);
        setRegEmail('');
        setRegPassword('');
    }
    // useEffect(() => {
    //     document.getElementById('container').classList.add('slide-in-fwd-tr');
    // })

    return (
        <div className='LogReg logged-out'>
            <div className="container" id="container">
                <div className={`form-container login-container ${menu.form}`} id='login-form'>
                    <form onSubmit= { handleLogin }>
                        <h1>Login</h1>
                        <input id='logEmail' type="email" placeholder="Email" value={ logEmail } onChange={(e) => setLogEmail(e.target.value)} />
                        <input id='logPassword' type="password" placeholder="Password" value={ logPassword } onChange={(e) => setLogPassword(e.target.value)} />
                        <button>Login</button>
                    </form>
                </div>
                <div className="form-container register-container" id='register-form'>
                    <form onSubmit={ handleRegister }>
                        <h1>Register</h1>
                        <input id='regEmail' type="email" placeholder="Email" value={ regEmail } onChange={(e) => setRegEmail(e.target.value)} />
                        <input id='regPassword' type="password" placeholder="Password" value={ regPassword } onChange={(e) => setRegPassword(e.target.value)} />
                        <button>Register</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className={`overlay-panel ${menu.overlay}`} id='overlay-panel'>
                        <div onClick={toggleMenu} className="overlay-panel-item panel-item-left">
                            <p>Register</p>
                        </div>
                        <div onClick={toggleMenu} className="overlay-panel-item panel-item-right">
                            <p>Login</p>
                        </div>
                    </div>
                </div>
                <div className="notification-container">
                    <div className={`notification-panel ${notMsg.status}${act}`} id='notification-panel'>
                        <div className="notification-panel-item">
                            <p>{`${notMsg.msg}`}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LogReg;