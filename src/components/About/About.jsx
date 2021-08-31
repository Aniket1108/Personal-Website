import React from 'react'
import "./about.scss"

import Andya from "../../img/Andya.png"

const About = () => {
    return (
        <div id="About">
            <div className="sec-one"> 
                <div >
                    <h2 className="heading">About</h2>
                    <p>I'm a Frontend web developer based in Pune, Maharashtra</p>
                    <p>Here are a few technologies I've been working with recently</p>
                    <div>
                        <ul>
                            <li>HTML & CSS / Sass</li>
                            <li>JavaScript</li>
                            <li>React</li>
                        </ul>
                        <ul>
                            <li>Figma</li>
                            <li>Git & GitHub</li>
                        </ul>
                    </div>
                </div>
                <img src={Andya} alt="" />
            </div>
            <div className="sec-two">
                <img src="" alt="" />
                <div>
                    <p>Random Facts</p>
                    <ul>
                        <li>Bike Riding</li>
                        <li>Loved to play video games</li>
                        <li>Mechanical Engineer by Degree</li>
                        <li>Cofee Lover</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default About
