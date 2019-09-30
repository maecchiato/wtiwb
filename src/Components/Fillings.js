import React from 'react';

import fotm from '../assets/img/fotm.jpg';
import rec from '../assets/img/Heading/rec.jpg';

class Fillings extends React.Component {
    render() {
        return (
            <div id="fillings-section" className="row">
                <div id="fotm-img" className="col-xl-6 col-lg-6 col-md-6 col-xs-12 col-sm-12 no-padding">
                    <img className="img-fluid" src={fotm}></img>
                </div>
                <div id="fotm-desc" className="col-xl-6 col-lg-6 col-md-6 col-xs-12 col-sm-12">
                    <p className="headline-h4">Fillings of the Month is here!</p>
                    <img src={rec}></img>
                    <p className="body-reg-16">New WaffleTime #FillingsOfTheMonth Alert! Try #WaffleTime's newest savory fillings:</p>
                    <p className="body-reg-16 font-weight-bold">Chipotle and Corn Cheesedog now! #WaffleTimePaborito</p>
                    <p className="body-reg-16">#AngPambansangWaffleNgPilipinas </p>
                </div>
            </div>
        )
    }
}

export default Fillings;