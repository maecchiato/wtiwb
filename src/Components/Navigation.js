import React from 'react';
import logo from '../assets/img/logo.png';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


class Navigation extends React.Component {
  constructor() {
    super();

    this.state = {
      hasClickedMENU: false,
    }

    this.toggleClassMenu = this.toggleClassMenu.bind(this);
    this.closeMenuToggler = this.closeMenuToggler.bind(this);
  }

  toggleClassMenu() {
    const currentState = this.state.hasClickedMENU;
    this.setState({ hasClickedMENU: !currentState });
  }

  closeMenuToggler() {
    if (this.state.hasClickedMENU) {
      this.mobileMenuToggler.click();
    }
  }

  render() {
    return (

      <nav id="navbar-header" className="navbar navbar-expand-lg navbar-light fixed-top">

        <HashLink to = "/#home-section">
          <a  className="navbar-brand">
          <img id="logo" src={logo} alt="" className={this.state.hasClickedMENU ? 'd-none' : null} />
          </a>
        </HashLink>
        <button ref={input => this.mobileMenuToggler = input} className="navbar-toggler" onClick={this.toggleClassMenu} type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mt-lg-0 md-lg-0 mt-5" id="navbarNavAltMarkup">
          <div className="navbar-nav mr-auto">
            <HashLink to ="/about-page/#about-vid" className="nav-item nav-link mr-md-1 text-center" onClick={this.closeMenuToggler}>ABOUT US</HashLink>
            <HashLink to = "/#waffles-section" className="nav-item nav-link mr-md-1 text-center" onClick={this.closeMenuToggler}>OUR WAFFLES</HashLink>
            <HashLink to = "/#foundation-section" className="nav-item nav-link mr-md-1 text-center" onClick={this.closeMenuToggler}>FOUNDATION</HashLink>
            <HashLink to = "/events" className="nav-item nav-link mr-md-1 text-center" onClick={this.closeMenuToggler}>EVENTS</HashLink>
          </div>
          <div className="navbar-nav ml-auto">
            <HashLink to = "/#partypackage-section" className="nav-item nav-link mr-md-1 text-center" onClick={this.closeMenuToggler}>PARTY PACKAGE</HashLink>
            <HashLink to = "/#map-section" className="nav-item nav-link mr-md-1 text-center" onClick={this.closeMenuToggler}>STORES</HashLink>
            <HashLink to = "/franchise/#franchise-section" className="nav-item nav-link mr-md-1 text-center" onClick={this.closeMenuToggler}>FRANCHISE</HashLink>
            <HashLink to = "/#contact-section" className="nav-item nav-link text-center" onClick={this.closeMenuToggler}>CONTACT US</HashLink>
            <p className={!this.state.hasClickedMENU ? 'd-none' : 'h6 text-center mobile-dropdown-copyright'}>Waffle Time Inc., © All Rights Reserved 2018</p>
          </div>
        </div>
      </nav>
    )
  }
}


export default Navigation;
