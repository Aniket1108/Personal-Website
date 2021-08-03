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





                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProjectPortfolio
