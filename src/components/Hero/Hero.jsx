import React from 'react'
import "./hero.scss"

const Hero = () => {
    return (
        <div className="Hero">
            <div className="hello">"HELLO"</div>
            <div className="info">
                <p>My name is</p>
                <h2 className="name">Aniket Gholap.</h2>
                <h3>I build the things for the web.</h3>
                <button className="getintouch">Get In Touch</button>
            </div>
        </div>
    )
}

export default Hero
