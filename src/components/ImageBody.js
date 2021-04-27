import React from 'react'
import './ImageBody.css'
import image from  '../images/imgmain.jpg'
import { Button } from '@material-ui/core'
import Social from './Social'


function ImageBody() {
    return (
        <div className="imgbody">
        <div className="slider">
                       <img className="image" src={image} alt=''/>
                       <div className="content">
                           <div>
                           <h2 className="hone">Smart Ideas</h2>
                           <h2 className="hone">For Your Brand</h2>
                           <h2 className="hone">Are Here.</h2>
                           </div>
                           <div>
                           <p className="hone">Our motto is to fulfill customer demand by making</p>
                           <p className="hone">them satisfied with growing their business</p>
                           </div>
                           <div>
                           <Button variant="contained" size="medium" color="secondary">Get Started</Button>
                           <Button  size="medium" color="primary" variant="contained" style={{marginLeft:10}}>Watch Video</Button>
                           </div>
                       </div>
                   </div>
                   </div>
    )
}

export default ImageBody
