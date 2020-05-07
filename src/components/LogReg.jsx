import React, { useContext, useState } from 'react';
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