import React from 'react'
import "./app.scss"

import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero.jsx"
import SocialLinks from './components/SocialLinks/SocialLinks'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from './components/About/About'
import Work from './components/Work/Work'
import ContactMe from './components/Contact/ContactMe'

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <SocialLinks />

                <Switch>
                    <Route path="/" exact component={Hero} />
                    <Route path="/Experience" component={Work} />
                    <Route path="/About" component={About} />
                    <Route path="/Contact" component={ContactMe} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App
