import React from 'react';

import wafflecart from '../assets/img/waffle-cart.png';
import location from '../assets/img/franchise/f-location.png';
import manpower from '../assets/img/franchise/f-manpower.png';
import fee from '../assets/img/franchise/f-fee.png';
import deposit from '../assets/img/franchise/f-deposit.png';
import space from '../assets/img/franchise/f-space.png';
import investments from '../assets/img/franchise/f-investments.png';


class FranchiseInfo extends React.Component {
    render() {
        return (
            <div id="franchise-info-section" className="row">
                <div id="franchise-inclusions" className="col-xl-4 col-lg-4 col-md-4 col-xs-12 col-sm-12">
                    <div className="card-item text-center">
                        <img className="img-fluid" src={wafflecart}></img>
                        <p className="caption-12 pt-2">The Franchise package includes the following:</p>
                        <p className="caption-12 font-weight-bold">Franchise fee <br/> Cart and equipment <br/> Trainings, orientation and crew uniforms</p>
                    </div>
                </div>
                <div id="" className="col-xl-8 col-lg-8 col-md-8 col-xs-12 col-sm-12 text-center">
                    <div className="row">
                        <div id="card-med" className="col-xl-4 col-lg-4 col-md-4 col-xs-4 col-sm-4">
                            <img src={deposit}></img>
                            <p className="caption-12 pt-3">Waffle Time requires a Php50,000 security deposit which should be paid before actual opening</p>
                        </div>
                        <div id="card-med" className="col-xl-4 col-lg-4 col-md-4 col-xs-4 col-sm-4">
                            <img src={fee}></img>
                            <p className="caption-12 pt-3">There is no Royalty Fee </p>
                        </div>
                        <div id="card-med" className="col-xl-4 col-lg-4 col-md-4 col-xs-4 col-sm-4">
                            <img src={manpower}></img>
                            <p className="caption-12 pt-3">The Franchisee will be the one to hire their personnel. However, Waffle Time will screen and train them at no cost</p>
                        </div>
                        <div id="card-med" className="col-xl-4 col-lg-4 col-md-4 col-xs-4 col-sm-4">
                            <img src={investments}></img>
                            <p className="caption-12 pt-3">On the average, ROI is around 6 to 12 months. It will depend on the sales performance and the operation cost of the outlet</p>
                        </div>
                        <div id="card-med" className="col-xl-4 col-lg-4 col-md-4 col-xs-4 col-sm-4">
                            <img src={space}></img>
                            <p className="caption-12 pt-3">Minimum space requiremnet is 2m x 2m or 4 square meters</p>
                        </div>
                        <div id="card-med" className="col-xl-4 col-lg-4 col-md-4 col-xs-4 col-sm-4">
                            <img src={location}></img>
                            <p className="caption-12 pt-3">The franchisee will be the one to look for their own location and the applicant will be oriented on how to evaluate their perspective proposed locations</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FranchiseInfo;