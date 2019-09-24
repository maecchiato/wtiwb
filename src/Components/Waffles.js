import React from 'react';
import Modal from 'react-modal';

import rec from '../assets/img/Heading/rec.jpg'
import ah from '../assets/img/waffles/sv-americanhotdog.jpg';
import ts from '../assets/img/waffles/sv-tunasalad.jpg';
import tc from '../assets/img/waffles/sv-tjcheesedog.jpg';
import bnc from '../assets/img/waffles/sv-baconncheese.jpg';
import gcf from '../assets/img/waffles/sv-germanfranks.jpg';
import hnc from '../assets/img/waffles/sv-hamncheese.jpg';

import sc from '../assets/img/waffles/sw-swisschocolate.jpg';
import uu from '../assets/img/waffles/sw-ultimateube.jpg';
import bvc from '../assets/img/waffles/sw-bavariancream.jpg';
import cd from '../assets/img/waffles/sw-cheesedelight.jpg';
import bc from '../assets/img/waffles/sw-belgianchocolate.jpg';



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
    height: '90vh'
  },
  overlay: {
    zIndex: '9999'
  }
};

class waffles extends React.Component {
  constructor() {
    super();

    this.state = {
      svModalIsOpen: false,
      swModalIsOpen: false,
    };

    this.openSVModal = this.openSVModal.bind(this);
    this.openSWModal = this.openSWModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openSVModal() {
    this.setState({ svModalIsOpen: true });
  }

  openSWModal() {
    this.setState({ swModalIsOpen: true });
  }

  afterOpenModal() {
    //  this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({
      svModalIsOpen: false,
      swModalIsOpen: false
    });
  }

  render() {
    return (
      <div id="waffles-section" class="container-fluid row justify-content">

        <Modal
          id="waffles-main-modal"
          isOpen={this.state.swModalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Sweet Fillings"
        >

          <div className="modal-header">
            <p className="headline-h5 text-white text-center">Sweet Fillings</p>
          </div>

          <div className="modal-body-fillings">
            <div className="row fillings-modal justify-content-Left text-center">
              <div className="fillings-card col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <div className="mx-4 "><p className="fillings-title caption-12 float-center">SWISS CHOCOLATE</p></div>
                <img id="waffle-img" src={sc}></img>
              </div>
              <div className="fillings-card col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <div className="mx-4"><p className="fillings-title caption-12">ULTIMATE UBE</p></div>
                <img id="waffle-img" src={uu}></img>
              </div>
              <div className="fillings-card col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <div className="mx-4"><p className="fillings-title caption-12">BAVARIAN CREAM</p></div>
                <img id="waffle-img" src={bvc}></img>
              </div>
              <div className="fillings-card col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <div className="mx-4"><p className="fillings-title caption-12">CHEESE DELIGHT</p></div>
                <img id="waffle-img" src={cd}></img>
              </div>
              <div className="fillings-card col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <div className="mx-4"><p className="fillings-title caption-12">BELGIAN CHOCOLATE</p></div>
                <img id="waffle-img" src={bc}></img>
              </div>
            </div>
          </div>
        </Modal>

        <Modal
          id="waffles-main-modal"
          isOpen={this.state.svModalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Savory Fillings"
        >

          <div className="modal-header">
            <p className="headline-h5 text-white text-center">Savory Fillings</p>
          </div>

          <div className="modal-body-fillings">
            <div className="row fillings-modal justify-content-left text-center">
              <div className="fillings-card col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <div className="mx-4 "><p className="fillings-title caption-12 float-center">AMERICAN HOTDOG</p></div>
                <img id="waffle-img img-fluid" src={ah}></img>
              </div>
              <div className="fillings-card col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <div className="mx-4"><p className="fillings-title caption-12">TUNA SALAD</p></div>
                <img id="waffle-img" src={ts}></img>
              </div>
              <div className="fillings-card col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <div className="mx-4"><p className="fillings-title caption-12">TJ CHEESEDOG</p></div>
                <img id="waffle-img" src={tc}></img>
              </div>
              <div className="fillings-card col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <div className="mx-4"><p className="fillings-title caption-12">BACON 'N CHEESE</p></div>
                <img id="waffle-img" src={bnc}></img>
              </div>
              <div className="fillings-card col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <div className="mx-4"><p className="fillings-title caption-12">GERMAN CHEESE FRANKS</p></div>
                <img id="waffle-img" src={gcf}></img>
              </div>
              <div className="fillings-card col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <div className="mx-4"><p className="fillings-title caption-12">HAM 'N CHEESE</p></div>
                <img id="waffle-img" className="responsive" src={hnc}></img>
              </div>
            </div>
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
              <p className="body-reg-14">Waffle Time offers a variety of flavors, at a very affordable price! Ano pa ang hinahanap nyo? Mag Waffle Time na tayo!<br/><br/></p>
            </div>
          </div>
        </div>
        <div className="container-fluid row justify-content-center">
          <button className="btn-med" onClick={this.openSWModal}>Sweet Fillings</button>
          <button id="add-margin" className="btn-med" onClick={this.openSVModal}>Savory Fillings</button>
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
