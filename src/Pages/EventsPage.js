import React from 'react';
import '../Styles/EventsPage.css';

import Fillings from '../Components/Fillings';

class EventsPage extends React.Component {
  render() {
    return (
      <div class="container-fluid">
        <Fillings />
      </div>
    )
  }
}
export default EventsPage;
