import React from 'react';
import google from '../images/google.png'
import './Social.css';
import monday from '../images/monday.png'
import tokopedia from '../images/tokopedia.png'
import slack from '../images/slack.png'

function Social() {
    return (
        <div className="main">
        <div className="imgcontainer">
            <img src={google} alt="logo"
            className="logo"/>
            <img 
            src={slack} 
            alt="logo"
            className="logo"/>
            <img 
            src={tokopedia}
             alt="logo"
             className="logo"/>
            <img 
            src={monday} 
            alt="logo"
            className="logo"/>
        </div>
        </div>
    )
}

export default Social
