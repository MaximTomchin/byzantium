import React from 'react';
import logo from '../images/logo.svg';

const Footer = React.memo ((props) => {
    return (
        <footer className="footer">
            <p className="footer__author">&copy; 2020-{new Date().getFullYear()}. Максим Томчин</p>
            <img src={logo} alt=" лого" className="footer__logo"/>
        </footer>
    );
})

export default Footer;