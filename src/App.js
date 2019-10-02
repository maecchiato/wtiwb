import React, { Component } from 'react';
import '../src/App.css';
import '../src/Styles/Home.css';



import {Switch, Route, BrowserRouter} from 'react-router-dom';

import Navigation from './Components/Navigation.js';
import Home from './Pages/HomePage.js';
import About from './Pages/AboutPage.js';
import Foundation from './Pages/FoundationPage.js';
import Events from './Pages/EventsPage.js';
import Maps from './Components/Map.js';
import Franchise from './Pages/FranchisePage.js';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import "react-responsive-carousel/lib/styles/carousel.min.css";


class App extends Component {
  render() {
    return (
      <div className = "App">
        <BrowserRouter>
          <div className = "container-fluid mt-5">
            <Navigation />
                <Switch>
                  <Route exact path = "/" component = {Home} />
                  <Route exact path = "/about-page" component = {About} />
                  <Route exact path = "/foundation" component = {Foundation} />
                  <Route exact path = "/franchise" component = {Franchise} />
                  <Route exact path = "/events" component = {Events} />
                  <Route exact path = "/map" component = {Maps} />
                  <Route exact path = "/contact" component = {Contact} />
                </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
