import React from 'react'
import './Body.css'
import Tabs from './cards/Tabs'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Cards2 from './cards/Cards2';
import Reviews from './Reviews';
import Subs from './Subs';
import Footer from './Footer';

function Body() {
    return (
        <div className="maincontainer">
            <div className="text">
            <div >
      <p style={{color: 'tomato',fontWeight: 'bold',marginTop:100}}>WHAT WE DO</p>
      <h1>Perfect Solution For</h1>
      <h1>Your Business</h1>
      </div>
      <p>As our moto ,we always provide the best services especially for you and your business
          company by growing your company to be better
      </p>
      </div>
      {/* components */}
      <Tabs/>
      <div className="text">
            <div >
      <p style={{color: 'tomato',fontWeight: 'bold',marginTop:100}}>Owr Work</p>
      <h1>Case Studies Are</h1>
      <h1>Conducted By Our Team</h1>
      </div>
      <div className="text2">
      <p> Explore all projects</p>
      <ArrowForwardIcon/>
      </div>
      </div>
      {/* component */}
      <Cards2/>
      <Reviews/>
      <Subs/>
      <Footer/>

        </div>
    )
}

export default Body
