import React from 'react'
import './Footer.css'
import FooterCopy from './FooterCopy'

function Footer() {
    return (
        <div>
        <div className="footercontainer">
            <div style={{width:150}}>
                <h1>Allies</h1>
                <p>Number of rows per slide in the slider,Number of slides to display in grid mode, this is useful with rows</p>
            </div>
            <div>
                <h1>About Us</h1>
                <p>About Us</p>
                <p>Features</p>
                <p>News</p>
                <p>Carrer</p>
                <p>About Us</p>
            </div>
            <div>
                <h1>Company</h1>
                <p>Our Team</p>
                <p>Partner with us</p>
                <p>Faq</p>
                <p>Blog</p>
            </div>
            <div>
                <h1>Support</h1>
                <p>Support Center</p>
                <p>Feedback</p>
                <p>Contact Us</p>
                <p>Accessbility</p>
            </div>
            <div>
                <h1>Get In Touch</h1>
                <p>Questions or Feedback</p>
                <p>We'd love to hear from you</p>
            </div>
            </div>
            <FooterCopy/>
        </div>
    )
}

export default Footer
