import React from 'react';

import recyellow from '../assets/img/rec-yellow.jpg';
import wticart from '../assets/img/wti-cart.png';

class WaffleDesc extends React.Component {
    render() {
        return (
            <div id="franchise-section" className="row">
                <div id="waffledesc" className="col-xl-6 col-lg-6 col-md-6 col-xs-12 col-sm-12">
                    <p className="headline-h4 text-white">Why Waffle Time?</p>
                    <img src={recyellow}></img>
                    <p className="body-reg-14 text-white text-left mt-4">Waffle Time is a recognized brand or trademark that can guarantee you with success. I think it's great to be a part of a franchise that is successful. Any franchise is successful because it's a continuation and people have seen it. We want you to be completely satisfied with our services. We will do whatever it takes to make you happy. No hassles, no problems.</p>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-xs-12 col-sm-12">
                    <img className="img-fluid" src={wticart}></img>
                </div>
            </div>
        )
    }
}

export default WaffleDesc;