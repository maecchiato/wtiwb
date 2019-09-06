import React from 'react';

import waffywalking from './Layouts/img/waffy-walking.png';
import imgfooter from './Layouts/img/footer.png';

class Footer extends React.Component {

    render() {
        return (
            <div id="footer" className="row justify-content-sm-center">
                <span id="social-media" className="d-none d-md-block">
                    <span id="social-media-display" className="float-right mt-2">
                        <p className="h5 mb-0">Stay Connected</p>
                        <span id="social-media-icons" className="float-right">
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
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">

                </div>
            </div>
        )
    }
}

export default Footer;
