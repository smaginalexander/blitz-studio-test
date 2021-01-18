import React from 'react';
import { NavLink } from 'react-router-dom';
import man from '../image/Jason_Wood.png'
import arrows from '../image/scroll_img.png';

const Content = () => {
    return (
        <div className="content">
            <nav className="content__navigation">
                <NavLink to="/home" className="content__text">Home</NavLink>
                <NavLink to="/aboutme" className="content__text">About me</NavLink>
                <NavLink to="/portfolio" className="content__text">Portfolio</NavLink>
                <NavLink to="/contact" className="content__text">Contact</NavLink>
            </nav>
            <div className="content__container-main">
                <img className="container__photo" src={man} alt="man" />
                <div className="container__container-text">
                    <h2 className="container__title">About Me</h2>
                    <p className="container__paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                         </p>
                    <p className="container__paragraph">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur.
                         </p>
                    <p className="container__person">Jason Wood</p>
                </div>
            </div>
            <div className="home__container">
                <span className="home__span">
                    scroll down to see more
    </span>
                <img className="home__image" alt="" src={arrows} />
            </div>
        </div>)
}

export default Content;