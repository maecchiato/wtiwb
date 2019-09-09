import React from 'react';

import waffywalking from './Layouts/img/waffy-walking.png';
import imgfooter from './Layouts/img/footer.png';
import rec from './Layouts/img/Heading/rec.jpg';

class Contact extends React.Component {

    render() {
        return (
            <div id="contact-section" className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center pt-5">
                    <p className="headline-h3 w-100">Interested? Contact Us!</p>
                    <img src={rec}></img>
                    <p className="body-reg-16 w-100 pt-2">Join our growing Waffle Time family today! Franchise now!</p>
                    <a href="mailto:customerservice@waffletime.com?Subject=Franchise%20Inquiry" target="_top" className="mt-1 mb-3 p-2 mr-2 btn-stroke">
                        Send us an Email
                    </a>
                </div>
                <div id="contact-card-section" className="row mt-2 text-center">
                    <div className="col-xl-1 col-lg-1 col-md-auto col-sm-auto col-xs-auto">
                    </div>
                    {/* *************************************** */}
                    <div className="contact-card col-xl-2 col-lg-2 col-md-12 col-sm-auto col-xs-auto text-center">
                        <div className="mx-3"><p className="contact-title overline">Iloilo Head Office</p></div>
                        <div className="contact-details pt-3">

                            <p className="contact-body text-left mb-2 mt-2">
                                <i className="fas fa-home mr-2"></i>
                                Door 5, Q.H.P Bdlg., Arsenal St., Iloilo City
                                </p>
                            <p className="contact-body text-left mb-2 mt-2">
                                <i className="fas fa-phone-square mr-2"></i>
                                (033) - 335 - 0935
                                </p>
                            <p className="contact-body text-left mb-4">
                                <i className="fas fa-fax mr-2"></i>
                                (033) - 335 - 0026
                            </p>
                        </div>
                    </div>
                    {/* *************************************** */}
                    <div className="contact-card col-xl-2 col-lg-2 col-md-12 col-sm-auto col-xs-auto text-center">
                        <div className="mx-3"><p className="contact-title overline">Metro Manila</p></div>
                        <div className="contact-details pt-3">

                            <p className="contact-body text-left mb-2 mt-2">
                                <i className="fas fa-home mr-2"></i>
                                69 C Raymundo Avenue, Caniogan, Pasig City
                            </p>
                            <p className="contact-body text-left mb-2 mt-2">
                                <i className="fas fa-phone-square mr-2"></i>
                                (02) - 584 - 1601
                                </p>
                            <p className="contact-body text-left mb-4">
                                <i className="fas fa-fax mr-2"></i>
                                (02) - 642 - 1870
                            </p>
                        </div>
                    </div>

                    <div className="contact-card col-xl-2 col-lg-2 col-md-12 col-sm-auto col-xs-auto text-center">
                        <div className="mx-3"><p className="contact-title overline">Davao</p></div>
                        <div className="contact-details pt-3">

                            <p className="contact-body text-left mb-2 mt-2">
                                <i className="fas fa-home mr-2"></i>
                                #32 B Mariner St., Dona Vicenta Village, Davao City                                
                            </p>
                            <p className="contact-body text-left mb-2 mt-2">
                                <i className="fas fa-phone-square mr-2"></i>
                                (082) - 298 - 5335
                                </p><br/><br/>
                            {/* <p className="contact-body text-left mb-4">
                                <i className="fas fa-fax mr-2"></i>
                                (6333) - 335 - 0026
                            </p> */}
                        </div>
                    </div>

                    <div className="contact-card col-xl-2 col-lg-2 col-md-12 col-sm-auto col-xs-auto text-center">
                        <div className="mx-3"><p className="contact-title overline">Cebu</p></div>
                        <div className="contact-details pt-2">

                            <p className="contact-body text-left mb-2 mt-2">
                                <i className="fas fa-home mr-2"></i>
                                338-8 G Victor Village, Tres de Abril,Punta Princesa, Labangon, Cebu City     
                                </p>
                            <p className="contact-body text-left mb-2 mt-2">
                                <i className="fas fa-phone-square mr-2"></i>
                                (032) - 253 - 9679
                                </p>
                            <p className="contact-body text-left mb-4">
                                <i className="fas fa-fax mr-2"></i>
                                (032) - 253 - 9679
                                </p>
                        </div>
                    </div>

                    <div className="contact-card col-xl-2 col-lg-2 col-md-12 col-sm-auto col-xs-auto text-center">
                        <div className="mx-3"><p className="contact-title overline">Cagayan de Oro</p></div>
                        <div className="contact-details pt-2">

                            <p className="contact-body text-left mb-2 mt-2">
                                <i className="fas fa-home mr-2"></i>
                                3699 Las Piedras Village, Capisnon, Kauswagan, CDO City
                                </p>
                            <p className="contact-body text-left mb-2 mt-2">
                                <i className="fas fa-phone-square mr-2"></i>
                                (088) - 850 - 0218 
                                </p><br/><br/>
                            {/* <p className="contact-body text-left mb-4">
                                <i className="fas fa-fax mr-2"></i>
                                (6333) - 335 - 0026
                            </p> */}
                        </div>
                    </div>

                    <div className="col-xl-1 col-lg-1 col-md-auto col-sm-auto col-xs-auto">
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;
