import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import './Footer.css'

function FooterCopy() {
    return (
        <div className="footer2container">
            <div><h3>Copyright,Allies 2020,All right reserved.</h3></div>
            <div className="logosocial">
            <InstagramIcon/>
            <FacebookIcon/>
            <TwitterIcon/>
            <LinkedInIcon/>
            <YouTubeIcon/>
            </div>

        </div>
    )
}

export default FooterCopy
