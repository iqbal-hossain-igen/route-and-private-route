import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <br />
            <input type="email" placeholder="email"/><br />
            <input type="password" placeholder="password"/><br />
            <button>Login</button><br />
            <Link to="/register">New Register</Link>
        </div>
    );
};

export default Login;