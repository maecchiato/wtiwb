import React from 'react';
import '../Styles/Home.css';


import Navigation from '../Components/Navigation';
import Landing from '../Components/Landing';
import About from '../Components/About';
import Waffles from '../Components/Waffles';
import Foundation from '../Components/Foundation';
import Events from '../Components/Events';
import EventsInfo from '../Components/Events-Info';
import Maps from '../Components/Map';
import PartyPackage from '../Components/PartyPackage.js';
import Franchise from '../Components/Franchise';
import Popup from '../Components/Popup';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import "react-responsive-carousel/lib/styles/carousel.min.css";


class HomePage extends React.Component {

  render() {
    return (
        <div className = "container-fluid">
          <Popup />
          <Landing />
          <About />
          <Waffles />
          <Foundation />
          <PartyPackage />
          <Events />
          <Maps/>
          <Contact/>
        </div>
    );
  }
}

export default HomePage;
