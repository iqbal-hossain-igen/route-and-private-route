import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Register = () => {
    const {signInWithGoogle} = useAuth();
    return (
        <div>
            <br />
            <input type="email" placeholder="email"/><br />
            <input type="password" placeholder="password"/><br />
            <button>Register</button>
            <br />
            <Link to="/login">Already Resistered</Link>
            <br />
            <br />
            <br />
            <button onClick={signInWithGoogle}>Google Login</button>
        </div>
    );
};

export default Register;