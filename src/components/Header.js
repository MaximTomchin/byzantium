import React from 'react';
import logo from '../images/logo.svg';
import { NavLink } from 'react-router-dom';

const Header = React.memo((props) => {
    return (
        <header className="header">
            <NavLink className="header__link" exact to="/byzantium">
                <img src={logo} alt="лого" className="header__logo"/>
            </NavLink>
            <nav className="header__about">
                <NavLink className="header__about_link" exact to="/byzantium/about">O проекте</NavLink>
            </nav>
        </header>
    );
})

export default Header;