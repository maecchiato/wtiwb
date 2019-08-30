import React from 'react';
import Modal from 'react-modal';
import waffle from './Layouts/img/waffle.png';
import ourwaffles from './Layouts/img/our-waffle.png'
import rec from './Layouts/img/Heading/rec.jpg'

class waffles extends React.Component {
  render() {
    return (
      <div id="waffles-section" class="container-fluid row justify-content">
        <p id="waffles-heading" className="headline-h3 justify-content-center">Our Waffles</p>
        <div id="rec-bottom" ><img src={rec}></img></div>
        <div id="waffles-card-section" className="container-fluid row">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-auto col-xs-auto">
            <div className="card-item">
              <p className="card-title">What makes it so special?</p>
              <p className="body-reg-14">Offering the freshest and most delicious waffles in a very affordable package. Waffle Time will surely satisfy your cravings.</p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-auto col-xs-auto">
            <div className="card-item">
              <p className="card-title">Made by Hand. With Love.</p>
              <p className="body-reg-14">Since its inception, Waffle Time had been consistent to its flavors. Staying true to its words of Ang Pambansang Waffle ng Pilipinas.</p>
            </div>          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-auto col-xs-auto">
            <div className="card-item">
              <p className="card-title">For the people, by the people.</p>
              <p className="body-reg-14">Waffle Time offers a variety of flavors, at a very affordable price! Ano pa ang hinahanap nyo? Mag Waffle Time na tayo!</p>
            </div>
          </div>
        </div>
        <div className="container-fluid row justify-content-center">
            <button className="btn-med">Sweet Fillings</button>
            <button id="add-margin" className="btn-med">Savory Fillings</button>
        </div>





        {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-auto col-xs-auto ">
            <p>sdcdscsdcsdcsd</p>
          </div> */}
        {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <img src={ourwaffles} className="img-fluid d-block mx-auto" alt="Our Waffle Story" />
            <span id="waffles-definition">
              <span className="waffle-definition-box">
                <p id="waffle-definition-title-1" className="h5 mt-3">What makes it so special?</p>
              </span>
              <p id="waffle-definition-1" className="add-box">
                Offering the freshest and most delicious waffles in a very affordable package. Waffle Time will surely satisfy your craving needs.
              </p>
              <p id="waffle-definition-title-2" className="h5">Made by Hand. With Love.</p>
              <p id="waffle-definition-2" className="add-box">
                Since its inception, Waffle Time had been consistent to its flavors. Staying true to its words of Ang Pambansang Waffle ng Pilipinas
              </p>
              <p id="waffle-definition-title-3" className="h5">For the people, by the people</p>
              <p id="waffle-definition-3" className="add-box">
                Waffle Time offers a variety of flavors, at a very affordable price! Ano pa ang hinahanap nyo? Mag Waffle Time na tayo!
              </p>
            </span>
          </div> */}

      </div >

    )
  }
}

export default waffles;
