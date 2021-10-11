import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

import './Header.css'

const Header = () => {
    const {user,logout} = useAuth();
    return (
        <div className="header">
            <Link to="/">Home</Link>
            <Link to="/shipping">Shipping</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link><br />
            <span>{user.displayName}</span><br />
            {user.email && <Link to="#" onClick={logout}>Logout</Link>}
        </div>
    );
};

export default Header;