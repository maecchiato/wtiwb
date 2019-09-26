import React from 'react';
import '../Styles/EventsPage.css';

import Fillings from '../Components/Fillings';
import StoreOpenings from '../Components/StoreOpenings';
import Decades from '../Components/Decades';

class EventsPage extends React.Component {
  render() {
    return (
      <div class="container-fluid">
        <Fillings />
        {/* <StoreOpenings /> */}
        <Decades />
      </div>
    )
  }
}
export default EventsPage;
