import React from 'react'
import "./work.scss"
import { WorkData, SomethingIBuild, ResumeDataEducation } from './WorkData'

import { AiFillGithub } from "react-icons/ai"
import { MdOpenInNew } from "react-icons/md"

const Work = () => {
    return (
        <div id="Resume">
            <div>

                <h2 className="header">Experience</h2>
                <div className="timeline-section">
                    <div className="section">
                        <div className="timeline">
                        </div>
                        <div >
                            {WorkData.map((props, key) => {
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
                    <div className="section">
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
                                            <p>{props.description}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="built">
                <div className="header">
                    Somthing I've Built <p className="line"></p>
                </div>
                <div className="allcard">{SomethingIBuild.map((props) => {
                    return (
                        <div className="something">
                            <div>{props.img}</div>
                            <div className="data">
                                <div>
                                    <h2>{props.name}</h2>
                                    <p>{props.tools}</p>
                                </div>
                                <div>
                                    <a href={props.link}><MdOpenInNew /></a>
                                    <a href={props.code}><AiFillGithub /></a>
                                </div>
                            </div>
                        </div>
                    )
                })}</div>
            </div>


        </div>
    )
}

export default Work
