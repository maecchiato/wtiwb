import React from 'react';

import waffywalking from './Layouts/img/waffy-walking.png';
import imgfooter from './Layouts/img/footer.png';
import rec from './Layouts/img/Heading/rec.jpg';

class Contact extends React.Component {

    render() {
        return (
            <div id="contact-section" className="row justify-content-sm-center">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center pt-5">
                    <p className="headline-h3 text-center w-100">Interested? Contact Us!</p>
                    <img src={rec}></img>
                    <p className="body-reg-16 text-center w-100 pt-2">Join our growing Waffle Time family today! Franchise now!</p>
                    <a href="mailto:customerservice@waffletime.com?Subject=Franchise%20Inquiry" target="_top" className="mt-3 mb-3 p-2 mr-2 btn-stroke">
                        Send us an Email
                    </a>
                </div>
                <div id="contact-card-section" className="row">
                    <div className="col-xl-1 col-lg-1 col-md-1 col-sm-auto col-xs-auto">
                    </div>

                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-auto col-xs-auto">
                        <div><p className="contact-title">What makes it so special?</p></div>
                        <div className="contact-card">
                        <p className="h6 font-weight-light">
                                            <p className="contact-body text-left mb-2">
                                                <i className="fas fa-home mr-2"></i>
                                                Door 5, Q.H.P Bdlg., Arsenal St., Iloilo City, Philippines 5000
                      </p>
                                            <p className="contact-body text-left mb-2">
                                                <i className="fas fa-phone-square mr-2"></i>
                                                (6333) - 335 - 0935
                      </p>
                                            <p className="contact-body text-left mb-2">
                                                <i className="fas fa-mobile-alt mr-2"></i>
                                                +639338633846
                      </p>
                                            <p className="contact-body text-left mb-4">
                                                <i className="fas fa-fax mr-2"></i>
                                                (6333) - 335 - 0026
                      </p>
                                        </p>  
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-auto col-xs-auto">
                        <div className="contact-card">
                            <p className="contact-title">Made by Hand. With Love.</p>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-auto col-xs-auto">
                        <div className="contact-card">
                            <p className="contact-title">For the people, by the people.</p>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-auto col-xs-auto">
                        <div className="contact-card">
                            <p className="contact-title">For the people, by the people.</p>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-auto col-xs-auto">
                        <div className="contact-card">
                            <p className="contact-title">For the people, by the people.</p>
                        </div>
                    </div>

                    <div className="col-xl-1 col-lg-1 col-md-1 col-sm-auto col-xs-auto">
                    </div>
                </div>

                {/* <div className="col-xl-12 col-lg-12 col-md-12 col-xs-12 col-sm-12">
                    <div className="row">
                        <div className="col-md-7 pt-5 pt-md-0">
                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade" id="v-pills-contact" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                    <a href="/" data-toggle="collapse" data-target="#MANILAOFFICE">
                                        <div className="alert alert-primary" role="alert">
                                            Manila Office
                                        </div>
                                    </a>

                                    <div id="MANILAOFFICE" className="collapse">
                                        <p className="h6">
                                            <p className="h6 mb-2 font-weight-light">
                                                <i className="fas fa-home mr-2"></i>
                                                #69 C. Raymundo Ave., Brgy. Caniogan, Pasig City, Philippines 1606
                      </p>
                                            <p className="h6 mb-2 font-weight-light">
                                                <i className="fas fa-phone-square mr-2"></i>
                                                (632) 584 - 1601 | (632) 584 - 3704
                      </p>
                                            <p className="h6 mb-2 font-weight-light">
                                                <i className="fas fa-mobile-alt mr-2"></i>
                                                +639338513968
                      </p>
                                            <p className="h6 mb-4 font-weight-light">
                                                <i className="fas fa-fax mr-2"></i>
                                                (632) - 642 - 1870
                      </p>
                                        </p>
                                    </div>

                                    <a href="/" data-toggle="collapse" data-target="#ILOILOOFFICE">
                                        <div className="alert alert-primary" role="alert">
                                            Iloilo Office
                    </div>
                                    </a>

                                    <div id="ILOILOOFFICE" className="collapse">
                                        <p className="h6 font-weight-light">
                                            <p className="mb-2">
                                                <i className="fas fa-home mr-2"></i>
                                                Door 5, Q.H.P Bdlg., Arsenal St., Iloilo City, Philippines 5000
                      </p>
                                            <p className="mb-2">
                                                <i className="fas fa-phone-square mr-2"></i>
                                                (6333) - 335 - 0935
                      </p>
                                            <p className="mb-2">
                                                <i className="fas fa-mobile-alt mr-2"></i>
                                                +639338633846
                      </p>
                                            <p className="mb-4">
                                                <i className="fas fa-fax mr-2"></i>
                                                (6333) - 335 - 0026
                      </p>
                                        </p>
                                    </div>

                                    <a href="/" data-toggle="collapse" data-target="#CEBUOFFICE">
                                        <div className="alert alert-primary" role="alert">
                                            Cebu Office
                    </div>
                                    </a>

                                    <div id="CEBUOFFICE" className="collapse">
                                        <p className="h6 font-weight-light">
                                            <p className="mb-2">
                                                <i className="fas fa-home mr-2"></i>
                                                338-8G Victor Village, Tres De Abril, Punta Princesa, Labangon, Cebu City, Philippines 6000
                      </p>
                                            <p className="mb-2">
                                                <i className="fas fa-phone-square mr-2"></i>
                                                (6332) - 253 - 9679 | (6332) - 417 - 4548
                      </p>
                                            <p className="mb-2">
                                                <i className="fas fa-mobile-alt mr-2"></i>
                                                +639338117037
                      </p>
                                            <p className="mb-4">
                                                <i className="fas fa-fax mr-2"></i>
                                                (6332) - 253 - 9679
                      </p>
                                        </p>
                                    </div>

                                    <a href="/" data-toggle="collapse" data-target="#CAGAYANDEOROOFFICE">
                                        <div className="alert alert-primary" role="alert">
                                            Cagayan De Oro Office
                    </div>
                                    </a>

                                    <div id="CAGAYANDEOROOFFICE" className="collapse">
                                        <p className="h6 font-weight-light">
                                            <p className="mb-2">
                                                <i className="fas fa-home mr-2"></i>
                                                3699 Las Piedras Village, Capisnon, Kauswagan, Cagayan De Oro City, Philippines 9000
                      </p>
                                            <p className="mb-2">
                                                <i className="fas fa-phone-square mr-2"></i>
                                                (6388) - 850 - 0218
                      </p>
                                            <p className="mb-4">
                                                <i className="fas fa-mobile-alt mr-2"></i>
                                                +639338514498
                      </p>
                                        </p>
                                    </div>
                                    <a href="/" data-toggle="collapse" data-target="#DAVAOOFFICE">
                                        <div className="alert alert-primary" role="alert">
                                            Davao Office
                    </div>
                                    </a>

                                    <div id="DAVAOOFFICE" className="collapse">
                                        <p className="h6 font-weight-light">
                                            <p className="mb-2">
                                                <i className="fas fa-home mr-2"></i>
                                                #32B Mariner St., Doña Vicenta Village, Davao City, Philippines 8000
                      </p>
                                            <p className="mb-2">``
                        <i className="fas fa-phone-square mr-2"></i>
                                                (6382) - 298 - 5335
                      </p>
                                            <p className="mb-4">
                                                <i className="fas fa-mobile-alt mr-2"></i>
                                                +639338513967
                      </p>
                                        </p>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                    <p className="font-weight-bold h4 mb-3">Interested?</p>
                                    <p className="p">
                                        Join our growing Waffle Time family today! Franchise now!
                  </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

            </div>
        )
    }
}

export default Contact;
