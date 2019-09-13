import React from 'react';

import { Button } from 'react-bootstrap';
import { Carousel } from "react-responsive-carousel";
import image1 from '../assets/img/carousel/img1.jpg';
import image2 from '../assets/img/carousel/img2.jpg';
import image3 from '../assets/img/carousel/img3.jpg';
import image4 from '../assets/img/carousel/img4.jpg';
import image5 from '../assets/img/carousel/img5.jpg';
import image6 from '../assets/img/carousel/img6.jpg';
import image7 from '../assets/img/carousel/img7.jpg';
import image8 from '../assets/img/carousel/img8.jpg';

class Home extends React.Component {
  render() {
    return (
      <div id="home-section" className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 no-padding">
          <Carousel className="row justify-content-sm-center" autoPlay="true" infiniteLoop="true"  >
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
          <div id="btn-franchise" className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center w-100 container-fluid">
          <button className="btn-wide">BECOME A FRANCHISEE!</button>
        </div>
        </div>

      </div>

    )
  }
}


export default Home;
