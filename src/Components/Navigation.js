import React from 'react';
import logo from './Layouts/img/logo.png';


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

      // <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

      //   {/* <!--  Show this only on mobile to medium screens  --> */}
      //   <a class="navbar-brand d-lg-none" href="#">Navbar</a>

      //   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
      //     <span class="navbar-toggler-icon"></span>
      //   </button>

      //   {/* <!--  Use flexbox utility classes to change how the child elements are justified  --> */}
      //   <div class="collapse navbar-collapse justify-content-between" id="navbarToggle">

      //     <ul class="navbar-nav">
      //       <li class="nav-item">
      //         <a class="nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      //       </li>
      //       <li class="nav-item">
      //         <a class="nav-link" href="#">Link</a>
      //       </li>
      //       <li class="nav-item">
      //         <a class="nav-link" href="#">Link</a>
      //       </li>
      //     </ul>
      //     {/* <!--   Show this only lg screens and up   --> */}
      //     <a class="navbar-brand d-none d-lg-block" href="#">Navbar</a>
      //     <ul class="navbar-nav">
      //       <li class="nav-item">
      //         <a class="nav-link" href="#">Link</a>
      //       </li>
      //       <li class="nav-item">
      //         <a class="nav-link" href="#">Link</a>
      //       </li>
      //       <li class="nav-item">
      //         <a class="nav-link" href="#">Link</a>
      //       </li>
      //     </ul>
      //   </div>
      // </nav>

      
      <nav id = "navbar-header" className = "navbar navbar-expand-lg navbar-light fixed-top">
        
        <a className = "navbar-brand" href = "#">
          <img id = "logo" src = {logo} alt = "" className = {this.state.hasClickedMENU ? 'd-none': null} />
        </a>
         <button ref={input => this.mobileMenuToggler = input} className = "navbar-toggler" onClick = {this.toggleClassMenu} type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className = "navbar-toggler-icon"></span>
        </button>
          <div className = "collapse navbar-collapse mt-md-0 md-lg-0 mt-5" id="navbarNavAltMarkup">
            <div className = "navbar-nav mr-auto">
              <a className = "nav-item nav-link mr-md-1 text-center" onClick = {this.closeMenuToggler} href = "#about-section">ABOUT US</a>
              <a className = "nav-item nav-link mr-md-1 text-center" onClick = {this.closeMenuToggler} href = "#waffles-section">OUR WAFFLE</a>
              <a className = "nav-item nav-link mr-md-1 text-center" onClick = {this.closeMenuToggler} href = "#foundation-section">OUR FOUNDATION</a>
              <a className = "nav-item nav-link mr-md-1 text-center" onClick = {this.closeMenuToggler} href = "#events-section">EVENTS</a>
              </div>
              <div className = "navbar-nav ml-auto">
              <a className = "nav-item nav-link mr-md-1 text-center" onClick = {this.closeMenuToggler} href = "#party-package-section">PARTY PACKAGE</a>
              <a className = "nav-item nav-link mr-md-1 text-center" onClick = {this.closeMenuToggler} href = "#map-section">OUR STORES</a>
              <a className = "nav-item nav-link mr-md-1 text-center" onClick = {this.closeMenuToggler} href = "#franchise-section">FRANCHISE</a>
              <a className = "nav-item nav-link text-center"  onClick = {this.closeMenuToggler} href = "#v-pills-contact-tab">CONTACT US</a>
              <p className = {!this.state.hasClickedMENU ? 'd-none': 'h6 text-center mobile-dropdown-copyright'}>Waffle Time Inc., © All Rights Reserved 2018</p>
              
            </div>
        </div>
      </nav>
    )
  }
}


export default Navigation;
