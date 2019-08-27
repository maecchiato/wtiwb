import React from 'react';

import {Button} from 'react-bootstrap';
import { Carousel } from "react-responsive-carousel";
import image1 from './Layouts/img/carousel/img1.jpg';
import image2 from './Layouts/img/carousel/img2.jpg';
import image3 from './Layouts/img/carousel/img3.jpg';
import image4 from './Layouts/img/carousel/img4.jpg';
import image5 from './Layouts/img/carousel/img5.jpg';
import image6 from './Layouts/img/carousel/img6.jpg';
import image7 from './Layouts/img/carousel/img7.jpg';
import image8 from './Layouts/img/carousel/img8.jpg';

class Home extends React.Component {
  render() {
    return (
      <div >
      <Carousel id="home-section" className="row justify-content-sm-center" autoPlay="true" infiniteLoop="true"  >
        <div>
          <img src={image1} />
        </div>
        <div>
          <img src={image2} />
        </div>
        <div>
          <img src={image3} />
        </div>
        <div>
          <img src={image4} />
        </div>
        <div>
          <img src={image5} />
        </div>
        <div>
          <img src={image6} />
        </div>
        <div>
          <img src={image7} />
        </div>
        <div>
          <img src={image8} />
        </div>
      </Carousel>
        <button className="btn-wide" >BECOME A FRANCHISEE!</button>
        </div>

    )
  }
}


export default Home;
