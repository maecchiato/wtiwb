import React from 'react';
import { HashLink } from 'react-router-hash-link';

import logo from '../assets/img/logo.png';

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
            <div id="footer" className="row justify-content-sm-left">
                <div id="logo-copyright" className="col-xl-4 col-lg-4 d-none d-lg-block">
                    <img id="footer-logo" className="" src={logo}></img>
                </div>
                <div id="sitemap" className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-xs-4 d-none d-lg-block">
                    <p>Site Map</p>
                    <HashLink to ="/about-page/#about-vid" className="ft-link text-white caption-12" onClick={this.closeMenuToggler}>About Us<br /></HashLink>
                     <HashLink to ="/#map-section" className="ft-link text-white caption-12" onClick={this.closeMenuToggler}>Stores<br /> </HashLink>
                     <HashLink to ="/franchise/#franchisee-section" className="ft-link text-white caption-12" onClick={this.closeMenuToggler}>Franchise<br /></HashLink>
                     <HashLink to ="/#waffles-section" className="ft-link text-white caption-12" onClick={this.closeMenuToggler}>Our Waffles<br /> </HashLink>
                     <HashLink to ="/foundation/#events-f-section" className="ft-link text-white caption-12" onClick={this.closeMenuToggler}>Our Foundation<br /> </HashLink>
                     <HashLink to ="/#partypackage-section" className="ft-link text-white caption-12" onClick={this.closeMenuToggler}>Party Package<br /> </HashLink>
                     <HashLink to ="/events/#fillings-section" className="ft-link text-white caption-12" onClick={this.closeMenuToggler}>Events<br /> </HashLink>
                     <HashLink to ="/#contact-section" className="ft-link text-white caption-12" onClick={this.closeMenuToggler}>Contact Us</HashLink>
                </div>
                <div id="contact-info" className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-xs-4 ">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-6 col-xs-6 ">
                    <p className="pb-1">Contact Info</p>
                    <p className="font-weight-bold h6 text-white">Iloilo Head Office</p>
                    <p className="caption-12 text-white">Door 5, Q.H.P Bdlg., Arsenal St., Iloilo City <br/>
                    (033) - 335 0935 <br/>
                    (033) - 335 0026</p>
                    </div>
                    <div id="social-media" className="col-xl-12 col-lg-12 col-md-12 col-sm-6 col-xs-6 ">
                    <p className="pt-3 h6">Stay Connected</p>
                        <div id="social-media-display" className="float-left">
                            <div id="social-media-icons">
                                <a href="https://www.facebook.com/WaffleTimeInc/" target="_blank" rel=" noreferrer noopener">
                                    <i className="fab fa-facebook-square mr-2"></i>
                                </a>
                                <a href="https://twitter.com/waffletime_ph?lang=en" target="_blank" rel=" noreferrer noopener">
                                    <i className="fab fa-twitter-square mr-2"></i>
                                </a>
                                <a href="https://www.instagram.com/waffletime_ph/" target="_blank" rel=" noreferrer noopener">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-auto col-xs-auto">

                </div>

                <p className="caption-12 pt-4 w-100 text-center">© 2019 Waffle Time Inc. All rights reserved.</p>

            </div>
        )
    }
}

export default Footer;
