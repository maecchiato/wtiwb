import React from 'react';

import dti from '../assets/img/awards/a-dti.png';
import em from '../assets/img/awards/a-em.png';
import fcp from '../assets/img/awards/a-fcp.png';
import recshort from '../assets/img/rec100.jpg';

class Awards extends React.Component {
    render() {
        return (
            <div id="awards-section" class="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-xs-12 col-sm-12 text-center mb-1 mt-3">
                    <p className="headline-h4 text-center">Awards & Achievements</p>
                    <img src={recshort}></img>
                </div>
                <div id="awards-card-section" className="container-fluid row">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-auto col-xs-auto">
                        <img src={dti} className="pb-4"></img>
                        <div id="award"><p className="body-reg-11 text-left">2006</p><p className="body-reg-11 text-left">Most Promising Filipino Franchise</p></div>
                        <div id="award"><p className="body-reg-11 text-left">2008</p><p className="body-reg-11 text-left">Outstanding Filipino Franchise</p></div>
                        <div id="award"><p className="body-reg-11 text-left">2008</p><p className="body-reg-11 text-left">Marketing Campaign of the Year (Finalist)</p></div>
                        <div id="award"><p className="body-reg-11 text-left">2009</p><p className="body-reg-11 text-left">Outstanding Filipino Franchise of the Year</p></div>
                        <div id="award"><p className="body-reg-11 text-left">2010</p><p className="body-reg-11 text-left">Outstanding Filipino Franchise</p></div>
                        <div id="award"><p className="body-reg-11 text-left">2011</p><p className="body-reg-11 text-left">Hall of Fame: Outstanding Filipino Franchise</p></div>
                        <div id="award"><p className="body-reg-11 text-left">2011</p><p className="body-reg-11 text-left">Special Awards: Best CSR Ajuy Reforestation Project</p></div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-auto col-xs-auto">
                        <img src={em} className="pb-4"></img>
                        <div id="award"><p className="body-reg-11 text-left">2007</p><p className="body-reg-11 text-left">FranCorp Award of Distiction</p></div>
                        <div id="award"><p className="body-reg-11 text-left">2012</p><p className="body-reg-11 text-left">FranCorp Top 20 Award</p></div>
                        <div id="award"><p className="body-reg-11 text-left">2017</p><p className="body-reg-11 text-left">FranCorp One to Many International Trailblazer</p></div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-auto col-xs-auto">
                        <img src={fcp} className="pb-4"></img>
                        <div id="award"><p className="body-reg-11 text-left">2007</p><p className="body-reg-11 text-left">Best Local Homegrown Franchise</p></div>
                        <div id="award"><p className="body-reg-11 text-left">2008</p><p className="body-reg-11 text-left">Most Promising Franchise</p></div>
                        <div id="award"><p className="body-reg-11 text-left">2008</p><p className="body-reg-11 text-left">Best in Franchising Support</p></div>
                        <div id="award"><p className="body-reg-11 text-left">2008</p><p className="body-reg-11 text-left">Fastest Growing Franchise</p></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Awards;