import React from 'react';

import fotm from '../assets/img/fotm.jpg';

class Fillings extends React.Component {
    render() {
        return (
            <div id="fillings-section">
                <div id="fotm-img" className="col-xl-6 col-lg-6 col-md-6 col-xs-12 col-sm-12">
                    <img src={fotm}></img>
                </div>
                <div id="fotm-desc" className="col-xl-6 col-lg-6 col-md-6 col-xs-12 col-sm-12">
                    <p>Fillings of the Month is here</p>
                </div>
            </div>
        )
    }
}

export default Fillings;