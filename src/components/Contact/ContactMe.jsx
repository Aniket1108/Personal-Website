import React from 'react'
import "./contact.scss"

const ContactMe = () => {
    return (
        <div className="Contact">
            <h2 class="header">
                Contact Me
            </h2>


            <form method="post" action="" class="form">
                <div class="inputfield">
                    <input class="field" type="text" placeholder="Full Name" required />
                </div>
                <div class="inputfield">
                    <input class="field" type="text" placeholder="Email" required />
                </div>
                <div class="inputfield">
                    <input class="field" type="text" placeholder="Subject" required />
                </div>
                <div class="inputfield">
                    <textarea class="field" name="comments" rows="8" placeholder="Message" required></textarea>
                </div>
                <button className="btn">SEND</button>
            </form>


            <div class="credit">
                <p>Design and Develop by Aniket Gholap <br /> GitHub Repo :-<a href="https://codeconvey.com/creating-simple-html5-contact-form/"> Link</a></p>
            </div>

        </div>
    )
}

export default ContactMe
