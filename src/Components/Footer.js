import React from 'react';

import waffywalking from './Layouts/img/waffy-walking.png';
import imgfooter from './Layouts/img/footer.png';
import logo from './Layouts/img/logo.png';

class Footer extends React.Component {
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
            <div id="footer" className="row justify-content-sm-center">
                <div id="logo-copyright" className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <img id="footer-logo" src={logo}></img>
                    <p className="caption-12">© 2019 Waffle Time Inc. All rights reserved.</p>
                </div>
                <div id="sitemap" className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-xs-12">
                    <p>Site Map</p>
                    <a className="ft-link text-white caption-12" onClick={this.closeMenuToggler} href="#about-section">About Us</a><br />
                    <a className="ft-link text-white caption-12" onClick={this.closeMenuToggler} href="#map-section">Branches</a><br />
                    <a className="ft-link text-white caption-12" onClick={this.closeMenuToggler} href=" ">Franchise</a><br />
                    <a className="ft-link text-white caption-12" onClick={this.closeMenuToggler} href="#waffles-section">Our Waffles</a><br />
                    <a className="ft-link text-white caption-12" onClick={this.closeMenuToggler} href="#foundation-section">Our Foundation</a><br />
                    <a className="ft-link text-white caption-12" onClick={this.closeMenuToggler} href="#partypackage-section">Party Package</a><br />
                    <a className="ft-link text-white caption-12" onClick={this.closeMenuToggler} href="#events-section">Events</a><br />
                    <a className="ft-link text-white caption-12" onClick={this.closeMenuToggler} href="#contact-section">Contact Us</a>
                </div>
                <div id="contact-info" className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-xs-12">
                    <p className="pb-1">Contact Info</p>
                    <p className="font-weight-bold h6 text-white">Iloilo Head Office</p>
                    <p className="caption-12 text-white">Door 5, Q.H.P Bdlg., Arsenal St., Iloilo City <br/>
                    (033) - 335 0935 <br/>
                    (033) - 335 0026</p>
                    
                    <span id="social-media" className="d-none d-md-block">
                    <p className="pt-3 h6">Stay Connected</p>
                        <span id="social-media-display" className="float-left">
                            <span id="social-media-icons">
                                <a href="https://www.facebook.com/WaffleTimeInc/">
                                    <i className="fab fa-facebook-square mr-2"></i>
                                </a>
                                <a href="https://twitter.com/waffletime_ph?lang=en">
                                    <i className="fab fa-twitter-square mr-2"></i>
                                </a>
                                <a href="https://www.instagram.com/waffletime_ph/">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </span>
                        </span>
                    </span>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">

                </div>
            </div>
        )
    }
}

export default Footer;
