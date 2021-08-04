import React from 'react'
import { ResumeDataWork, ResumeDataEducation } from './ResumeData'
import "./resume.scss"

const Resume = () => {
    return (
        <div id="Resume">
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
