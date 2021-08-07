import React, {useState} from 'react'
import "./home.scss"

const About = () => {

    const [showQue, setShowQue] = useState(false)

    const toggleQue = () => {
        return ( setShowQue (!showQue) )
    }
 
    return (
        <div id="About">
            <div className="section">
                <div className="heading">Hello....</div>
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
                    <div className="resume-section">
                        <button className="resume"><div className="question" onClick={toggleQue}>?</div> <div className="downloadresume">Download Resume</div></button>
                        {showQue && (<p className="msg" >Don't hesitate to download file, it doesn't contain virus.</p>)}
                    </div>
                </div>
                <div className="hobbies-skills">
                    <div className="skills">
                        <h2>Skills</h2>
                        <div className="skillname"><p>HTML</p><p>CSS</p><p>Bootstrap</p><p>JavaScript</p><p>ReactJS</p></div>
                    </div>
                    <div className="hobbies">
                        <h2>Hobbies</h2>
                        <div className="skillname"><p>Video Games</p><p>Travelling</p><p>Bike Riding</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
