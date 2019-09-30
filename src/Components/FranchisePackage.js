import React from 'react';

import rec from '../assets/img/Heading/rec.jpg';
import packagecart from '../assets/img/package-cart.png';

class FranchisePackage extends React.Component {
    render() {
        return (
            <div id="franchise-package-section" className="row">
                <div className="bg-yellow col-xl-2 col-lg-2 col-md-2 col-xs-auto col-sm-auto">

                </div>
                <div className="col-xl-8 col-lg-8 col-md-8 col-xs-12 col-sm-12 text-center">
                    <p className="headline-h4 pt-5">Franchise Package</p>
                    <img src={rec}></img>
                    <div id="cart-section" className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-xs-6 col-sm-6">
                            <img className="img-fluid" src={packagecart}></img>
                            <p className="button-16 text-dark pt-3">STANDARD</p>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-xs-6 col-sm-6">
                            <img className="img-fluid pt-5 pt-md-0" src={packagecart}></img>
                            <p className="button-16 text-dark pt-3">CUSTOMIZED</p>
                        </div>
                    </div>
                </div>
                <div className="bg-yellow col-xl-2 col-lg-2 col-md-2 col-xs-auto col-sm-auto">

                </div>
            </div>
        )
    }
}

export default FranchisePackage;