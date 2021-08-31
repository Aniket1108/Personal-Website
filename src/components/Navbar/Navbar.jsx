import React from 'react'
import "./navbar.scss"
import logo from "../../img/logo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="Navbar">
            <Link to="/"><img src={logo} alt="logo"/></Link>
            <div className="Lists">
                <ul className="Links">
                    <Link className="link" to="/Experience">Experience</Link>
                    <Link className="link" to="/About">About</Link>
                    <Link className="link" to="/Contact">Contact</Link>
                </ul>
                <button>Resume</button>
            </div>
        </div>
    )
}

export default Navbar
