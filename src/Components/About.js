import React from 'react';
import { Route, Link } from 'react-router-dom';
// import MissionVission from './Components/MissionVission';
import waffy from './Layouts/img/waffy-mascot.png';
import rec from './Layouts/img/Heading/rec.jpg'




class About extends React.Component {
  //  nextPath(path){
  //    this.props.history.push(path);
  //  }
  render() {
    return (
      <div id="about-section" class="row justify-content">
        <p id="about-headline" className="headline-h2">Mula Noon, Hanggang Ngayon, Laking Waffle Time!</p>
        <img src={rec}></img>
        <div className="container-fluid row">
          <div className="col-xl-8 col-lg-8 col-md-9 col-sm-12 col-xs-12 pt-5">
            <p className="subheadline">OUR HISTORY</p>
            <p className="body-reg-16">Waffle Time started on September of 1998 in the province of Iloilo, Philippines as a simple business venture. The first outlet was in The Atrium Mall, Gen. Luna St., Iloilo City. With 7 profitable outlets, the owners were very optimist that the concept and brand is ready for expansion.</p>
            <p className="body-reg-16">Today, Waffle Time boasts of over 400 outlets nationwide and is still actively expanding into new regions and territories. Waffle Time is aiming, from being Ang Pambansang Waffle ng Pilipinas, to become the Best Waffles in the World!</p>
            <button className="btn-small">LEARN MORE</button>
          </div>
          <div className="container-fluid col-xl-4 col-lg-4 col-md-3 col-sm-12 col-xs-12 text-left">
            <img className="img-fluid mt-12 d-lg-block d-none" src={waffy} />
          </div>     
        </div>    
      </div>

    )
  }
}


export default About
