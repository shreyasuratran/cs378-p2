import React from 'react';
import logo from './logo378.jpg';

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="Campus Cafe Logo" className="logo"/>
            <h1> The Best, Fresh Food on Campus! </h1>
            <h2> All in a Walking Distance </h2>
        </header>
    );
};

export default Header; 