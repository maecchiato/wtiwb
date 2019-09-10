import React from 'react';
import Modal from 'react-modal';
import waffle from './Layouts/img/waffle.png';
import ourwaffles from './Layouts/img/our-waffle.png'
import rec from './Layouts/img/Heading/rec.jpg'
import wafflestorePackageA from './Layouts/img/waffle-store-packageA.jpg';
import wafflestorePackageB from './Layouts/img/waffle-store-packageB.jpg';
import ReactToolTip from 'react-tooltip';
import { findDOMNode } from 'react-dom'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    backgroundColor: 'white',
    transform: 'translate(-50%, -50%)',
    overlfow: 'scroll',
    height: '85vh'
  },
  overlay: {
    zIndex: '9999'
  }
};

class waffles extends React.Component {
  constructor() {
    super();

    this.state = {
      mae: false,
      archie: false,
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    //  this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div id="waffles-section" class="container-fluid row justify-content">

<Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Party Package Information"
        >
          <div className="modal-body">
            <div className="row party-package-modal">
              <div id="package-card" className="col-md-6 col-lg-6 col-xl-6 col-sm-6 col-12">
                <p className="lato-eb-24 text-center title pb-4">Package A</p>
                <div className="card-front">
                  <img src={wafflestorePackageA} alt="The Best Value for your Money" classsName="img-fluid img-cart-display d-block" />
                  <div className="card-back">
                  <p className="lato-eb-24 text-center title pb-4">Package A</p>
                    <p className="mt-4 mx-3 highlight ">Inclusions:</p>
                    <ul className="body-reg-14 text-left">
                    <li>100 Assorted Waffles</li>
                    </ul>
                    <p className="mt-5 mx-3 highlight">Pricing:</p>
                    <ul className="body-reg-14 text-left">
                        <li>P6,000.00 Manila</li>
                        <li>P5,500.00 Visayas & Mindanao</li>           
                    </ul>
                    <div className="btn-group dropright mt-5 float-right mr-3">
                      <button type="button" className="btn-stroke dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Inquire Now via
                          </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="http://m.me/WaffleTimeInc" target="_blank" rel="noopener noreferrer">Facebook Messenger</a>
                        <a className="dropdown-item" href="mailto:customerservice@waffletime.com?Subject=Party%20Package%20Inquiry">Email</a>
                        <a href="#v-pills-contact-tab" className="dropdown-item" ref="tooltip" data-tip="Refer to our Contact Section Below">Contact Us</a>
                        <button className="d-none" onClick={() => { ReactToolTip.hide(findDOMNode(this.refs.tooltip)) }}></button>
                        <ReactToolTip effect="float" place="right" type="info" />
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div id="package-card" className="col-md-6 col-lg-6 col-xl-6 col-sm-6 col-12">
                <p className="lato-eb-24 text-center title pb-4">Package B</p>
                <div className="card-front">
                  <img src={wafflestorePackageB} alt="The Best Value for your Money" classsName="img-fluid img-cart-display d-block" />
                  <div className="card-back">
                  <p className="lato-eb-24 text-center title pb-4">Package B</p>
                      <p className="mt-3 mx-3 highlight">Inclusions:</p>
                      <ul className="body-reg-14 text-left">   
                          <li>100 Assorted Waffles</li>
                          <li>100 Iced Teas</li>    
                      </ul>
                      <p className="mt-5 mx-3 highlight">Pricing:</p>
                      <ul className="body-reg-14 text-left">
                          <li>P7,500.00 Manila</li>
                          <li>P7,000.00 Visayas & Mindanao</li>
                      </ul>
                      <div className="btn-group dropright mt-5 float-right mr-3">
                        <button type="button" className="btn-stroke dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Inquire Now via
                            </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="https://www.facebook.com/messages/t/WaffleTimeInc" target="_blank" rel="noopener noreferrer">Facebook Messenger</a>
                          <a className="dropdown-item" href="mailto:customerservice@waffletime.com?Subject=Party%20Package%20Inquiry">Email</a>
                          <a href="#v-pills-contact-tab" className="dropdown-item" ref="tooltip" data-tip="Refer to our Contact Section Below">Contact Us</a>
                          <button className="d-none" onClick={() => { ReactToolTip.hide(findDOMNode(this.refs.tooltip)) }}></button>
                          <ReactToolTip effect="float" place="right" type="info" />
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" onClick={this.closeModal} className="btn btn-secondary">Close</button>
          </div>
        </Modal>

        <p id="waffles-heading" className="headline-h3 text-center">Our Waffles</p>
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
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-auto col-xs-auto">
            <div className="card-item">
              <p className="card-title">For the people, by the people.</p>
              <p className="body-reg-14">Waffle Time offers a variety of flavors, at a very affordable price! Ano pa ang hinahanap nyo? Mag Waffle Time na tayo!</p>
            </div>
          </div>
        </div>
        <div className="container-fluid row justify-content-center">
          <button className="btn-med" onClick={this.openModal}>Sweet Fillings</button>
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
