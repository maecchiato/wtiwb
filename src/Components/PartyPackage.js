import React from 'react';
import Modal from 'react-modal';
import '../App.css';
import ReactToolTip from 'react-tooltip';
import { findDOMNode } from 'react-dom'
import { HashLink } from 'react-router-hash-link';
import title from '../assets/img/title.png';
import rec from '../assets/img/Heading/rec.jpg';
import wafflestorePackageA from '../assets/img/waffle-store-packageA.jpg';
import wafflestorePackageB from '../assets/img/waffle-store-packageB.jpg';

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

Modal.setAppElement('#root')

class PartyPackage extends React.Component {
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
      <div id="partypackage-section" className="row">
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
                <div className="card-front text-center">
                  <img src={wafflestorePackageA} id="img-cart" alt="The Best Value for your Money" classsName="img-fluid img-cart-display d-block" />
                  <div className="card-back">
                  <p className="lato-eb-24 text-center title pb-2">Package A</p>
                    <p className="mt-4 mx-3 highlight text-left ">Inclusions:</p>
                    <ul className="body-reg-14 text-left ml-3">
                    <li>100 Assorted Waffles</li>
                    <br/>
                    </ul>
                    <p className="mt-4 mx-3 highlight text-left">Pricing:</p>
                    <ul className="body-reg-14 text-left ml-3 mb-4">
                        <li>P6,000.00 Manila</li>
                        <li>P5,500.00 Visayas & Mindanao</li>           
                    </ul>
                    <div className="btn-group dropright float-right mr-3">
                      <button type="button" className="btn-small w-100 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Inquire Now Via
                          </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="http://m.me/WaffleTimeInc" target="_blank" rel="noopener noreferrer">Facebook Messenger</a>
                        <a className="dropdown-item" href="mailto:customerservice@waffletime.com?Subject=Party%20Package%20Inquiry">Email</a>
                        <HashLink to ="/#contact-section" className="dropdown-item" ref="tooltip" onClick={this.closeModal} >Contact Us</HashLink>
                        <button className="d-none" onClick={() => { ReactToolTip.hide(findDOMNode(this.refs.tooltip)) }}></button>
                        <ReactToolTip effect="float" place="right" type="info" />
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div id="package-card" className="col-md-6 col-lg-6 col-xl-6 col-sm-6 col-12 text-center">
                <p className="lato-eb-24 text-center title pb-4">Package B</p>
                <div className="card-front">
                  <img src={wafflestorePackageB} id="img-cart" alt="The Best Value for your Money" classsName="img-fluid img-cart-display d-block" />
                  <div className="card-back">
                  <p className="lato-eb-24 text-center title pb-2">Package B</p>
                      <p className="mt-4 mx-3 highlight text-left">Inclusions:</p>
                      <ul className="body-reg-14 text-left ml-3">   
                          <li>100 Assorted Waffles</li>
                          <li>100 Iced Teas</li>    
                      </ul>
                      <p className="mt-4 mx-3 highlight text-left">Pricing:</p>
                      <ul className="body-reg-14 text-left ml-3">
                          <li>P7,500.00 Manila</li>
                          <li>P7,000.00 Visayas & Mindanao</li>
                      </ul>
                      <div className="btn-group dropright float-right mr-3">
                        <button type="button" className="btn-small dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Inquire Now Via
                            </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="https://www.facebook.com/messages/t/WaffleTimeInc" target="_blank" rel="noopener noreferrer">Facebook Messenger</a>
                          <a className="dropdown-item" href="mailto:customerservice@waffletime.com?Subject=Party%20Package%20Inquiry">Email</a>
                          <HashLink to ="/#contact-section" className="dropdown-item" ref="tooltip" onClick={this.closeModal} >Contact Us</HashLink>
                          <button className="d-none" onClick={() => { ReactToolTip.hide(findDOMNode(this.refs.tooltip)) }}></button>
                          <ReactToolTip effect="float" place="right" type="info" />
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="modal-footer">
            <button type="button" onClick={this.closeModal} className="btn btn-secondary">Close</button>
          </div> */}
        </Modal>

        <div id="partypack-desc" className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
            <img src={rec}></img>
            <p className="body-reg-14 text-left add-padding">Waffle Time offers party packages to cater everyone’s life events such as Birthday
            Parties, School Events, Fairs, Exhibits, Food Bazaars and many more. As the Pambansang Waffle ng Pilipinas,
            we want to be with you anytime and anywhere in any of your special experiences and memories. Ibang-iba ang
            “filling” kapag ikaw ang siyang kapiling!</p>
              <button type="button" id="" className="btn-stroke" onClick={this.openModal}>
                Avail Our Packages
            </button>
        </div>
        <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 col-12">
          <div className="text-center pt-5 pt-sm-5 pt-xl-0 pt-lg-3 pt-md-3">
            <img src={title} alt="Party Package of Waffle Time" className="img-fluid d-block ml-auto" />
          </div>
        </div>

      </div>
    )
  }
}

export default PartyPackage
