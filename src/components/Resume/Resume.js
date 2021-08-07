import React from 'react'
import { ResumeDataWork, ResumeDataEducation } from './ResumeData'
import "./resume.scss"

const Resume = () => {
    return (
        <div id="Resume">

            <div className="myskills">
                <h2>Skills</h2>
                <div className="skills">
                    <div>
                        <h4>HTML</h4>
                        <div className="bars">
                            <div className="progress html"></div>
                        </div>
                    </div>
                    <div>
                        <h4>CSS</h4>
                        <div className="bars">
                            <div className="progress css"></div>
                        </div>
                    </div>
                    <div>
                        <h4>JAVASCRIPT</h4>
                        <div className="bars">
                            <div className="progress js"></div>
                        </div>
                    </div>
                    <div>
                        <h4>REACT</h4>
                        <div className="bars">
                            <div className="progress react"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="work-experience">
                <h2>Work Experience</h2>
                <div className="work-section">
                    <div className="timeline">
                    </div>
                    <div >
                        {ResumeDataWork.map((props, key) => {
                            return (
                                <div className="work">
                                    <div className="circle"></div>
                                    <div className="date">{props.date}</div>
                                    <div className="seperator"></div>
                                    <div className="data">
                                        <h2>{props.role}</h2>
                                        <h3>{props.company}</h3>
                                        <p>{props.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className="certification">
                <h3>
                    Certifications
                </h3>
                <div>

                    <div>
                        <h4>Javascript</h4>
                        <p>Udemy</p>
                    </div>
                    <div>
                        <h4>Search Engine Optimization</h4>
                        <p>Courseara</p>
                    </div>
                </div>
            </div>


            <div className="work-experience">

                <h2>Educational Qualification</h2>
                <div className="work-section">
                    <div className="timeline">
                    </div>
                    <div >
                        {ResumeDataEducation.map((props, key) => {
                            return (
                                <div className="work">
                                    <div className="circle"></div>
                                    <div className="date">{props.date}</div>
                                    <div className="seperator"></div>
                                    <div className="data">
                                        <h2>{props.role}</h2>
                                        <h3>{props.company}</h3>
                                        {/* <p>{props.description}</p> */}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume
