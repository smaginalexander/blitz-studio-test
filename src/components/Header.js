import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <header className="header">
            <nav className="header__navigation">
                <NavLink to="/home" className="header__text">Home</NavLink>
                <NavLink to="/aboutme" className="header__text">About me</NavLink>
                <NavLink to="/portfolio" className="header__text">Portfolio</NavLink>
                <NavLink to="/contact" className="header__text">Contact</NavLink>
                <NavLink to="/menu" className="header__text header__text_type_320">∞ MENU</NavLink>
            </nav>
        </header>)
}

export default Header;