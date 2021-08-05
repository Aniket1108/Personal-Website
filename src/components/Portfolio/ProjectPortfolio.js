import React from 'react'
import "./portfolio.scss"
import { ProjectDetails } from './ProjectDetails'
import { AiFillGithub } from 'react-icons/ai';


const ProjectPortfolio = () => {
    return (
        <div className="Project-Portfolio">
            <div className="cardsDetails">
                {ProjectDetails.map((props, key) => {
                    return (
                        <div className="cardsData">
                            <div className="image">{props.img}</div>
                            <div className="img-overlay">
                                <a href={props.githublink} target="_blank" rel="noreferrer">{props.github == true ? <AiFillGithub /> : <></>}</a>
                                <div>
                                    <h3>{props.name}</h3>
                                    <p>{props.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProjectPortfolio
