import { Button } from '@material-ui/core'
import React from 'react'
import './Header.css'
import AcUnitIcon from '@material-ui/icons/AcUnit';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

function Header() {
    return (
        <div className="headercontainer">
            <div className="text">
               <AcUnitIcon/>
                <h2>ALLIES</h2>
            </div>
          {/* <div className="content">
            <p className="contenttype">WHY ALLIES?</p>
            <p className="contenttype">FEATURES</p>
            <p className="contenttype">PRICING</p>
            <p className="contenttype">CONTACT</p>
        </div> */}
        <div className="options">
            <h5 className="contenttype">WHY ALLIES?</h5>
            <h5 className="contenttype">FEATURES</h5>
            <h5 className="contenttype">PRICING</h5>
            <h5 className="contenttype">CONTACT</h5>
        </div>
            <Button variant="contained" color="secondary">
                Login
                <ArrowRightAltIcon/>
                </Button>
        </div>
    )
}

export default Header
