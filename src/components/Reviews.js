import React from 'react';
import Slider from 'infinite-react-carousel';
import Image from '../images/Image.png'
import Image2 from '../images/Image2.png'

const Reviews = () => (
    <div>
        <h1 style={{color:'tomato',marginLeft:100,marginTop:100}}>What Our Customer Says About Us</h1>
  <Slider dots style={{height:100}}>
    <div>
      <img src={Image} />
      <img src={Image2} />
    </div>
    <div>
    <img src={Image} />
      <img src={Image2} />
    </div>
    <div>
    <img src={Image} />
      <img src={Image2} />
    </div>
  </Slider>
  </div>
);
export default Reviews;