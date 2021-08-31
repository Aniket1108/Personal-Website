import React from 'react'
import "./sociallinks.scss"
import { FaLinkedinIn } from "react-icons/fa"
import { FiGithub } from "react-icons/fi"




const SocialLinks = () => {
    return (
        <div className="SocialLinks">
            <div className="icon"> <a href="https://www.linkedin.com/in/aniket-gholap/" target="_blank" rel="noreferrer" className="links"><FaLinkedinIn /></a> <p>LinkedIn</p> </div>
            <div className="icon"> <a href="https://github.com/Aniket1108" target="_blank" rel="noreferrer" className="links"><FiGithub /></a> <p>GitHub</p> </div>
            <div className="line"></div>
        </div>
    )
}

export default SocialLinks
