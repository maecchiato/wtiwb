import React from 'react';

import rec from '../assets/img/Heading/rec.jpg';

class CallToAction extends React.Component {
    render() {
        return (
            <div id="calltoaction-section" className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-xs-auto col-sm-auto">

                </div>
                <div id="calltoaction-desc"  className="col-xl-6 col-lg-6 col-md-6 col-xs-auto col-sm-auto text-left">
                    <p className="headline-h4 text-white text-shadow">Be a Franchisee!</p>
                    <img src={rec}></img>
                    <p className="body-reg-16 text-white mb-5">Join our growing Waffle Time family today! Franchise now!</p>
                    <a href="mailto:customerservice@waffletime.com?Subject=Franchise%20Inquiry" target="_top" className="btn-med">
                        Send us an Email
                    </a>
                </div>
            </div>
        )
    }
}

export default CallToAction;