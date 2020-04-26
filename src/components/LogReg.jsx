import React, { Component } from 'react'
import './LogReg.css';
import { auth } from '../config/Fire';
import {db} from '../config/Fire';
// import * as firebase from 'firebase/app';

// import axios from 'axios';

class LogReg extends Component {

    state = {

        regEmail : '',
        regPassword : '',

        logEmail : '',
        logPassword : '',






        userData : [],

        allUsers : [],
        activeUser : {},

        acName : '',
        acPassword : '',
        acEmail : '',
        acFirebaseId : '',
        
        
        regName : '',
        

        notification : '',
        notifications : {
            regName : 'The Name must be a minimum of two characters',
            regPassword : 'The Password must be a minimum of eight characters',
            regSuccessfully : 'Now you can log in. Thank you for being part of your recipe.',
            regUnsuccessfully : 'Sorry, something is wrong. Please try again.',
            regUserExist : 'A user with this email address already exists',
            logSuccessfully : 'Welcome back. What is on the menu for today?',
            logUnsuccessfully : 'Email or password do not match any results. Try again, or register if you have not yet.'
        },

        status : null,
        
    }

componentDidMount() {
    document.getElementById('container').classList.add('slide-in-fwd-tr');
    // this.getAllUsers();
}

// componentDidUpdate(prevProps, prevState) {
//     if(prevState.acName !== this.state.acName){
//         this.sendUser(
//                         this.state.acName,
//                         this.state.acEmail,
//                         this.state.acPassword,
//                         this.state.acFirebaseId
//                     )
//     }
// }


// getAllUsers = () => {
//     axios.get(`https://foodappusersfavoritefood.firebaseio.com/users.json`)
//     .then( res => {

//         let data = this.formatData(res.data);
//         this.setState({
//             allUsers : data
//         })
//     })
    
// }

// formatData = (responseData) => {
//     const data = [];
//     for (const user in responseData) {
//         data.push({
//             ...responseData[user],
//             fireBaseId: user,
//         })
//     }
//     return data;
// }

//  ==========> SETING INPUTS VALUES AS A STATE <===========



//  ==========> REGISTRATION <===========

// registerUser = ( name, email, password, data ) => {

//     let sameEmail = data.filter( user => {
//         return email !== user.email
//     })
    
//     if( name.length >= 2 ) {
//         if ( sameEmail.length > 0 ) {
//             if( password.length >= 8 ){
//                 axios.post(`https://foodappusersfavoritefood.firebaseio.com/users.json`, { 
//                         name : name,
//                         email : email,
//                         password : password
//                     })
//                     .then(res => {
//                         this.setState({
//                             status : 'successfully'
//                         })
//                         console.log('RESPONSE', res);
//                         console.log('RES DATA', res.data)
//                     })
//                     .then(() => {
//                         this.notificationActiviti( this.state.notifications.regSuccessfully, this.state.status )
//                     })
//                     .then(() => this.getAllUsers())
//             } else {
//                 this.notificationActiviti( this.state.notifications.regPassword, this.state.status )
//             }
//         } else {
//             this.notificationActiviti( this.state.notifications.regUserExist, this.state.status )
//         }  
//     } else {
//         this.notificationActiviti( this.state.notifications.regName, this.state.status )
//     }
// }


// handleRegister = (e) => {
//     e.preventDefault();
//     this.registerUser(this.state.regName, this.state.regEmail, this.state.regPassword, this.state.allUsers)
//     this.setState({
//         regName : '',
//         regEmail : '',
//         regPassword : ''
//     })
// }




//  ==========> LOGING IN <===========

// sendUser = ( name, email, password, firebaseID ) => {
//     axios.post(`https://foodappusersfavoritefood.firebaseio.com/korisnik.json`, { 
//         name : name,
//         email : email,
//         password : password,
//         firebaseID : firebaseID
//     })
//     .then(res => {
//         console.log(res);
//         console.log(res.data);
//     })
// }

// loginUser = ( email, password, data ) => {

//     let findingUser = data.filter( user => {
//         return email === user.email && password === user.password
//     })

//     if( findingUser.length !== 0 ){
        
//         this.setState({
//                 activeUser : findingUser,
//                 status : 'successfully',
//                 acName : findingUser[0].name,
//                 acPassword : findingUser[0].password,
//                 acEmail : findingUser[0].email,
//                 acFirebaseId : findingUser[0].fireBaseId,  
//         }, () => {
//             this.notificationActiviti( this.state.notifications.logSuccessfully, this.state.status )
//             console.log('Ulogovan user ==>', findingUser)
//             this.setState({
//                 userData : findingUser[0]
//             })
//             window.location.href='/'
//         })
//     } else {
//         this.setState({
//             status : 'unsuccessfully'
//         }, () => {
//             this.notificationActiviti( this.state.notifications.logUnsuccessfully, this.state.status );
//         });
//     }
// }

// handleLogin = (e) => {
//     e.preventDefault();
//     this.loginUser( this.state.logEmail, this.state.logPassword, this.state.allUsers )
//     this.setState({
//         logEmail : '',
//         logPassword : ''
//     })
// }




//  ==========> NOTIFICATIONS <===========

notificationActiviti = ( msg, status ) => {
    this.setState({
        notification : msg
    })

    // status = this.state.status;

    if( status === 'successfully' ){
        document.getElementById('notification-panel').classList.add('successfullyReg');
        document.getElementById('notification-panel').classList.remove('unsuccessfullyReg');
        document.getElementById('notification-panel').classList.remove('warningReg');
    } else if ( status === 'unsuccessfully' ){
        document.getElementById('notification-panel').classList.add('unsuccessfullyReg');
        document.getElementById('notification-panel').classList.remove('successfullyReg');
        document.getElementById('notification-panel').classList.remove('warningReg');
    } else {
        document.getElementById('notification-panel').classList.add('warningReg');
        document.getElementById('notification-panel').classList.remove('successfullyReg');
        document.getElementById('notification-panel').classList.remove('unsuccessfullyReg');
    }
    
    setTimeout( () => {
        document.getElementById('notification-panel').classList.add('notification-active')
        setTimeout( () => {
            document.getElementById('notification-panel').classList.remove('notification-active')
            this.setState({
                notification : null
            },3000)
        }, 3500)

        this.setState({
            status : null
        })
    }, 500)
}



loginClick = () => {
    document.getElementById('overlay-panel').classList.remove('overlay-right');
    document.getElementById('login-form').classList.remove('hide-form-container');
}

registerClick = () => {
    document.getElementById('overlay-panel').classList.add('overlay-right');
    document.getElementById('login-form').classList.add('hide-form-container');
}

handleChange = ( e ) => {
    this.setState({
        [e.target.id]: e.target.value
    })
}

handleRegister  = (e) => {
    e.preventDefault();

    let email = this.state.regEmail;
    let password = this.state.regPassword;
    
    auth.createUserWithEmailAndPassword( email, password ).then( cred => {
        return db.collection(`${ cred.user.uid }`)})
        .then(() => {
            this.notificationActiviti( this.state.notifications.regSuccessfully, 'successfully' );
            this.setState({
                regEmail : '',
                regPassword : ''
            })
            setTimeout(() => {
                window.location.href='/home';
            }, 2000) 
        })
}

handleLogin = (e) => {
    e.preventDefault();

    let email = this.state.logEmail;
    let password = this.state.logPassword;

    auth.signInWithEmailAndPassword( email, password ).then( cred => {

        // console.log(cred.user)

        this.notificationActiviti( this.state.notifications.logSuccessfully, 'successfully' );
        this.setState({
            logEmail : '',
            logPassword : ''
        })
        setTimeout(() => {
            window.location.href='/home';
        }, 2000) 
    })
}

render() {
    const { notification } = this.state;
    
    return (
        <div className='LogReg'>
            <div className="container" id="container">
                <div className="form-container login-container" id='login-form'>
                    <form onSubmit={ (e) => this.handleLogin(e) } action="#">
                        <h1>Login</h1>
                        <input id='logEmail' type="email" placeholder="Email" value={ this.state.logEmail } onChange={ this.handleChange } />
                        <input id='logPassword' type="password" placeholder="Password" value={ this.state.logPassword } onChange={ this.handleChange }/>
                        <button>Login</button>
                    </form>
                </div>
                <div className="form-container register-container" id='register-form'>
                    <form onSubmit={ (e) => this.handleRegister(e) } action="#">
                        <h1>Register</h1>
                        {/* <input id='regName' type="text" placeholder="Name" onChange={ this.handleChange } value={ this.state.regName } /> */}
                        <input id='regEmail' type="email" placeholder="Email" onChange={ this.handleChange } value={ this.state.regEmail } />
                        <input id='regPassword' type="password" placeholder="Password" onChange={ this.handleChange } value={ this.state.regPassword } />
                        <button>Register</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className='overlay-panel' id='overlay-panel'>
                        <div onClick={ () => this.registerClick() } className="overlay-panel-item panel-item-left">
                            <p>Register</p>
                        </div>
                        <div onClick={ () => this.loginClick() } className="overlay-panel-item panel-item-right">
                            <p>Login</p>
                        </div>
                    </div>
                </div>
                <div className="notification-container">
                    <div className='notification-panel' id='notification-panel'>
                        <div className="notification-panel-item">
                            <p>{ notification }</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default LogReg;