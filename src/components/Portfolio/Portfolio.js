import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import BasicProjectPortfolio from './BasicProjectPortfolio'
import HeaderPortfolio from './HeaderPortfolio'
import "./portfolio.scss"
import ProjectPortfolio from './ProjectPortfolio'

const Portfolio = () => {
    return (
        <Router>

            <div className="Portfolio">
                <HeaderPortfolio />
                <Switch>

                    <Route path="/portfolio/projects" component={ProjectPortfolio} />
                    <Route path="/portfolio/basicprojects" component={BasicProjectPortfolio} />
                
                </Switch>
            </div>
        </Router>
    )
}

export default Portfolio
