import React from 'react'
import "./home.scss"

const About = () => {
    return (
        <div id="About">
            <div className="section">
                <div className="heading">ABOUT ME</div>
                <div>
                    <h3 className="name">My name is <span>Aniket Ashok Gholap</span></h3>
                    <p className="description">I am a Mechanical Engineer Graduated from university of pune and having interest in the field of Web Design and Developing and have completed front end development libraries.</p>
                </div>
                <div className="mydata">
                    <div >
                        <div className="data"><h4>Age</h4><span>: 25</span></div>
                        <div className="data"><h4>Nationality</h4><span>: Indian</span></div>
                        <div className="data"><h4>Languages</h4><span>: Marathi, English, Hindi</span></div>
                        <div className="data"><h4>Loacation</h4><span>: Pune</span></div>
                    </div>
                    <div className="seperator"></div>
                    <button className="resume">Download Resume</button>
                </div>
                <div className="hobbies-skills">
                    <div className="hobbies">
                        <h2>Hobbies</h2>
                        <p><span>Video Games</span><span>Travelling</span><span>Bike Riding</span></p>
                    </div>
                    <div className="skills">
                        <h2>Skills</h2>
                        <p><span>HTML & CSS</span><span>Bootstrap</span><span>JavaScript</span><span>React JS</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
