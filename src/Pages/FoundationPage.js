import React from 'react';
import '../Styles/FoundationPage.css';
import Swiper from 'swiper';
import EventFoundation from '../Components/EventFoundation';


import Foundation from '../Components/Foundation.js';

class FoundationPage extends React.Component {
  render() {
    return (
      <div class="container-fluid">
        <EventFoundation />
      </div>
    )
  }
}
export default FoundationPage;
