import React from 'react';
import './Home.css';
import logo from '../../img/logo.png'

function Home() {
    return (
        <div className="home">
            <div className="home__bg">
                <div className="header d__flex align__items__center pxy_30">
                    <div className="logo">
                        <img src={logo} alt ="Dustin Flynn logo" />
                    </div>
                    <div className="navigation pxy__30">
                        <ul className="navbar d__flex">
                            <a href="#Home"><li className="nav__items mx__15">Home</li></a>
                            <a href="#About"><li className="nav__items mx__15">About</li></a>
                            <a href="#Technologies"><li className="nav__items mx__15">Technologies</li></a>
                            <a href="#Projects"><li className="nav__items mx__15">Projects</li></a>
                            <a href="#Contact"><li className="nav__items mx__15">Contact Me</li></a>
                        </ul>
                    </div>
                </div>
                {/* Home Content */}
                <div className="container">
                    <div className="home__content">
                        <div className="home__meta">
                            <h1 className="home__text pz__10">
                                Hey there,
                            </h1>
                            <h2 className="home__text pz__10">
                                I'm Dustin
                            </h2>
                            <h3 className="home__text sweet pz__10">
                                Full Stack Developer
                            </h3>
                            <h4 className="home__text pz__10 pz__10">
                                St. Louis, Missouri Based
                            </h4>
                        </div>
                    </div>
                </div>
            </div>        
        </div>
    )
}

export default Home
