import React from 'react';
import '../Styles/FoundationPage.css';

import EventFoundation from '../Components/EventFoundation';
import Foundation from '../Components/Foundation';

class FoundationPage extends React.Component {
  render() {
    return (
      <div class="container-fluid">
        <EventFoundation />
        <Foundation />
      </div>
    )
  }
}
export default FoundationPage;
