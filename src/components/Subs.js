import { Button, Input } from '@material-ui/core'
import React from 'react'
import './Subs.css';

function Subs() {
    return (
        <div className="subscontainer">
            <div>
                <p style={{color: 'red',fontWeight: 'bold'}}>OUR SUBSCRIBE</p>
                <h1>Subscribe To Get Latest Update</h1>
                <h1>News About Us</h1>
                <br/>
                <br/>
            <Input placeholder='Enter your Email'
            type='email'
            />
            <Button variant='contained' color='secondary'>Subscribe</Button>
            </div>
        </div>
    )
}

export default Subs
