import React, { Component } from 'react';
import './App.css';

import Navigation from './Components/Navigation';
import Home from './Components/Home';
import About from './Components/About';
import Waffles from './Components/Waffles';
import Foundation from './Components/Foundation';
import Events from './Components/Events';
import EventsInfo from './Components/Events-Info';
import Maps from './Components/Map';
import PartyPackage from './Components/PartyPackage.js';
import Franchise from './Components/Franchise';
import Popup from './Components/Popup';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import "react-responsive-carousel/lib/styles/carousel.min.css";


class App extends Component {

  render() {
    return (
      <div className = "App">
        <Navigation />
        <div className = "container-fluid">
          <Popup />
          <Home />
          <About />
          <Waffles />
          <Foundation />
          <PartyPackage />
          <Events />
          <Maps/>
          <Contact/>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
