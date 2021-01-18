import React from 'react';
import arrows from '../image/scroll_img.png';
const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <span className="home__span">
                    scroll down to see more
    </span>
                <img className="home__image" alt="" src={arrows} />
            </div>
        </div>)
}

export default Home;