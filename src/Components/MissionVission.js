import React from 'react';
import '../App.css';
import rec from './Layouts/img/Heading/rec.jpg';
import mission1img from './Layouts/img/mission/1998sept.png';
import mission2img from './Layouts/img/mission/2002may.png';
import mission3img from './Layouts/img/mission/2002june.png';
import mission4img from './Layouts/img/mission/2004march.png';
import mission5img from './Layouts/img/mission/2006-2008.png';
import mission6img from './Layouts/img/mission/2007-2011.png';
import mission7img from './Layouts/img/mission/2012.png';

class MissionVision extends React.Component{
    constructor(){
        super();
    }
    render(){

        return(
            <div id="mission-vision-section">
                <p className="mv-headline">Waffle Time Inc.</p>    
                <img src={rec}></img>
            
            <div className="container-fluid row">
                <div id="mission-vision-body" className="col-xl-4 col-lg-4 col-md-3 col-sm-6 col-xs-6">
                    <p className="mv-subheadline">OUR HISTORY</p>
                        <p className="mv-body-reg"> Waffle Time Incorporated. The first and original purveyor of quality and freshly-baked waffles in cart with vast selection of fillings. Twenty years since the first branch in Iloilo City successfully established a name in the food kiosk business, freshly baked at site the most delicious waffles very affordable prices.</p>
                        <img src={mission1img} className="d-md-block d-none mr-auto img-fluid"></img>
                        <img src={mission2img}></img>
                        <img src={mission3img}></img>
                        <img src={mission4img}></img>
                        <img src={mission5img}></img>
                        <img src={mission6img}></img>
                        <img src={mission7img}></img>
                </div>
            </div>
            </div>
        )
    }
}




export default MissionVision;