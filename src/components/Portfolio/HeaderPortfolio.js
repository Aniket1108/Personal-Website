import React from 'react'
import { Link } from 'react-router-dom'
import "./portfolio.scss"

const HeaderPortfolio = () => {
    return (
        <div className="headerPortfolio">
            <div className="header">
                <Link to="/portfolio/projects"><h2>Portfolio</h2></Link>   
                <Link to="/portfolio/basicprojects"><h3>Basic Project</h3></Link> 
            </div>
        </div>
    )
}

export default HeaderPortfolio
