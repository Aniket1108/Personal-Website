import React from 'react'
import "./contact.scss"


import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineMobile } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';

const Contact = () => {
    return (
        <div className="ContactMe">
            <div>
                <h2>CONTACT ME</h2>
            </div>
            <div className="contact">
                <div className="info">
                    <div className="info-cards">
                        <i><AiOutlineMail/></i><h4>EMAIL : <br /> aniketgholap1995@gmail.com </h4>
                    </div>
                    <div className="info-cards">
                        <i><AiOutlineMobile/></i><h4>MOB NO : <br /> +91 8446821124</h4>
                    </div>
                    <div className="info-cards">
                        <i><GoLocation/></i><h4>ADDRESS : <br /> Pen, Maharashtra</h4>
                    </div>
                    <div className="info-cards">
                        <i><AiFillGithub/></i><i><AiOutlineInstagram/></i>
                    </div>
                </div>
                <div className="form">
                    <input type="text" placeholder="Name" required/>
                    <input type="email" placeholder="Email address" required/>
                    <textarea className="message" type="text" placeholder="Your Message"/>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Contact
