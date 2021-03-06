import React, { useContext } from 'react';
import LoginForm from '../components/LoginForm'
import {Redirect} from 'react-router-dom'
import UserContext from '../utils/UserContext';

function Login(props) {

    const {loggedIn} = useContext(UserContext);
    return (
        <div className="container">
            {loggedIn && <Redirect to="/" />}
            <h2>Please Log In To Your Account</h2>
            <LoginForm />
        </div>
    )
}

export default Login;