import React from 'react';
import '../App.css';

import recshort from '../assets/img/rec100.jpg';
import mission1 from '../assets/img/mission/m-waffle.png';
import mission2 from '../assets/img/mission/m-resource.png';
import mission3 from '../assets/img/mission/m-maker.png';
import mission4 from '../assets/img/mission/m-customers.png';
import mission5 from '../assets/img/mission/m-stats.png';

class MissionVision extends React.Component {
    constructor() {
        super();
    }
    render() {

        return (
            <div id="mission-vision-section" className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-xs-12 col-sm-12 text-center mb-1 mt-3">
                    <p className="headline-h4 text-center">Vision</p>
                    <img src={recshort}></img>
                    <p className="body-reg-16 w-100 text-center pt-2">Serving the best waffles in the world across all races beyond all borders</p>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-xs-12 col-sm-12 text-center mb-1 pt-5">
                    <p className="headline-h4 text-center">Mission</p>
                    <img src={recshort}></img>
                    <div id="mission-card-section" className="container-fluid row">
                        <div className="col-xl-1 col-lg-1 col-md-1 col-sm-auto col-xs-auto">
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-auto col-xs-auto">
                            <img src={mission1} className=""></img>
                            <p className="caption-12 pt-3">To establish a strong "Waffle Time" brand image</p>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-auto col-xs-auto">
                            <img src={mission3} className=""></img>
                            <p className="caption-12 pt-3">To continuously <br /> re-invent waffle</p>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-auto col-xs-auto">
                                <img src={mission4} className=""></img>
                                <p className="caption-12 pt-3">To delight <br /> customers</p>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-auto col-xs-auto">
                                <img src={mission5} className=""></img>
                                <p className="caption-12 pt-3">To achive high level of efficiency</p>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-auto col-xs-auto pb-5 ">
                                <img src={mission2} className=""></img>
                                <p className="caption-12 pt-3">To develop a creative & assertive human resource</p>
                        </div>
                        <div className="col-xl-1 col-lg-1 col-md-1 col-sm-auto col-xs-auto">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}




export default MissionVision;