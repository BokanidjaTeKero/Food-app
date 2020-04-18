import React, { Component } from 'react'
import './LogReg.css';

import axios from 'axios';

class LogReg extends Component {

    state = {
        
        logEmail : '',
        logPassword : '',
        regName : '',
        regEmail : '',
        regPassword : ''
        
    }

componentDidMount() {
    document.getElementById('container').classList.add('slide-in-fwd-tr');
}

registerClick = () => {
    document.getElementById('overlay-panel').classList.add('overlay-right');
    document.getElementById('login-form').classList.add('hide-form-container');
}

loginClick = () => {
    document.getElementById('overlay-panel').classList.remove('overlay-right');
    document.getElementById('login-form').classList.remove('hide-form-container');
}


handleChange = ( e ) => {
    this.setState({
        [e.target.id]: e.target.value
    })
}

handleLogin = (e) => {
    e.preventDefault();
    this.loginUser( this.state.logEmail, this.state.logPassword )
    this.setState({
        logEmail : '',
        logPassword : ''
    })
}

handleRegister = (e) => {
    e.preventDefault();
    this.registerUser(this.state.regName, this.state.regEmail, this.state.regPassword)
    this.setState({
        regName : '',
        regEmail : '',
        regPassword : ''
    })
}

loginUser = ( email, password ) => {
    console.log('email ==>', email);
    console.log('password ==>', password);
}

registerUser = ( name, email, password ) => {
    
    let condition = name.length >= 2 ? ( password.length >= 8 ? true : console.log('password je manji od 8 karaktera') ) : console.log('ime je prekratko');

    condition ?  axios.post(`https://foodappusersfavoritefood.firebaseio.com/users.json`, { 
                    name : name,
                    email : email,
                    password : password
                })
                .then(res => {
                    console.log('RESPONSE', res);
                    console.log('RES DATA', res.data)
                })  
                : console.log('netacan je')
}











render() {
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
                        <input id='regName' type="text" placeholder="Name" onChange={ this.handleChange } value={ this.state.regName } />
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
            </div>
        </div>
        )
    }
}

export default LogReg;