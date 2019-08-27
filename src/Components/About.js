import React from 'react';

import waffy from './Layouts/img/waffy-mascot.png';
import rec from './Layouts/img/Heading/rec.jpg'

class About extends React.Component {
  render() {
    return (
      // <div id="about-section" className="row">
      //   <div className="col-xl-8 col-lg-8 col-md-9 col-sm-12 col-xs-12">
      //   </div>
      //   <div className="col-xl-4 col-lg-4 col-md-3 col-sm-12 col-xs-12 text-left">
      //     <img className="img-fluid mt-5" src={waffy} />
      //   </div>
      // </div>

      <div id="about-section" class="container-fluid">
        <div class="row" id="row1">
          <p className="headline">Mula Noon, Hanggang Ngayon, Laking Waffle Time!</p>
          <img className="img-fluid" src={rec} />
        </div>
        <div class="row" id="row2">
          <div class="col-xl-8 col-lg-8 col-md-9 col-sm-12 col-xs-12">
            <p>scasdasdasdasasdasdsa</p>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-3 col-sm-12 col-xs-12 text-left">
            <img className="img-fluid mt-5" src={waffy} />
          </div>
        </div>

      </div>
    )
  }
}

export default About;
