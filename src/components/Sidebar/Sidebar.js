import React from 'react'

import "./sidebar.scss"

import aniket from "../../img/aniket.jpeg"
import { SidebarLink } from './SidebarLink'
import { Link } from 'react-router-dom'

const Sidebar = ({show}, {setShow},  props) => {
    return (
        <div className={show ? "sidebar active" : "sidebar"} id="Sidebar">
            <div> <img src={aniket} className="profileImg" alt="" width="220px" /> </div>
            <div className="seprator"></div>
            <div className="allLinks" >
                {SidebarLink.map((props, key) => {
                    return (
                        <Link className="links" to={props.link}>
                            <div className="links-list">
                                <li className="list-img">{props.img}</li>
                                <li className="list-name">{props.name}</li>
                            </div>
                        </Link>
                    )
                })}

            </div>
            <div className="seprator"></div>
            <div className="copyright">
                <h2>© Aniket Gholap</h2>
            </div>
        </div>
    )
}

export default Sidebar
