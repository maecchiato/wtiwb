import React from 'react';
import { Route, Link } from 'react-router-dom';
import waffy from '../assets/img/waffy-mascot.png';
import rec from '../assets/img/rec-short.png';
import '../Styles/AboutPage.css';

class AboutPage extends React.Component {
  constructor()
  {
    super();

    this.state = {
      hasClicked: false,
    }

    this.toggleClassClick = this.toggleClassClick.bind(this);
  }

  toggleClassClick()
  {
    const currentState = this.state.hasClicked;
    this.setState({hasClicked: !currentState});
  }
  render() {
    return (
      <div id="about-page" className="mt-5 mb-5" >
        <p id="aboutpage-headline" className="headline-h3 mt-5 mt-5 text-center">Waffle Time Inc.</p>

        <div className="container-fluid row pt-4">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 text-right">
          <img src={rec}></img>
            <p className="subheadline text-dark">OUR HISTORY</p>
          </div>
          <div className="container-fluid col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 ">
          <p className="caption-12 text-left w-75 ml-3">Waffle Time Incorporated. The first and original purveyor of quality and freshly-baked waffles in cart with vast selection of fillings. Twenty years since the first branch in Iloilo City successfully established a name in the food kiosk business,  freshly baked  at site the most delicious waffles very affordable prices.</p>
          </div>     
        </div>    
      </div>

    )
  }
}


export default AboutPage
