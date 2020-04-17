import React, { Component } from 'react'
import './LogReg.css';

class LogReg extends Component {

    state = {

    }


registerClick = () => {
    
    let overlayContainer = document.getElementById('overlay-panel').classList.add('overlay-right');
    let logInForm = document.getElementById('login-form').classList.add('hide-form-container');
    
}

loginClick = () => {
    
    let overlayContainer = document.getElementById('overlay-panel').classList.remove('overlay-right');
    let logInForm = document.getElementById('login-form').classList.remove('hide-form-container');
}



render() {
    return (
        <div className='LogReg'>
            <div className="container slide-in-fwd-tr" id="container">
                <div className="form-container login-container" id='login-form'>
                    <form action="#">
                        <h1>Login</h1>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Login</button>
                    </form>
                </div>
                <div className="form-container register-container" id='register-form'>
                    <form action="#">
                        <h1>Register</h1>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
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