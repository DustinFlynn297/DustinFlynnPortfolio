import React from 'react'
import './About.css'
import aboutImg from '../../img/about.jpg'

function About() {
    return (
        <div className="about component__space">
            <div className="container">
                <div className="row">
                    <div className="col__2">
                        <img src={aboutImg} alt="" className="about__img" />
                    </div>
                    <div className="col__2">
                        <h1 className="about__heading">
                            About Me
                        </h1>
                        <div className="about__meta">
                            <p className="about__text p__color">If I had to pick my one true passion, it would be learning. I believe that my time in the Marine Corps played a crucial role in this discovery. Being forced to adapt to any situation and overcome the odds led me to a love of constantly learning new things. Ultimately this is what led me to fall in love with programming, programming languages, and the subsequent technologies. These technologies are constantly evolving or changing, and I'm eager to learn everything I can about them.</p>                       
                            <p className="about__text p__color">I have always been a customer-centric person who enjoys crafting a response or answering any questions thrown my way. My passion for programming stems from my love for problem-solving and customer support. I believe that any application's primary goal is to fulfill a customer's need. I want to be able to help build a product that makes everyone's life easier.</p>
                            <div className="about__buton d__flex align__items__center">
                                <a href="#"><button className="about btn pointer">Download Cv</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
