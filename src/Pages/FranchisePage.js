import React from 'react';
import '../Styles/FranchisePage.css';

import WaffleDesc from '../Components/WaffleDesc.js';
import FranchiseInfo from '../Components/FranchiseInfo.js';



class FoundationPage extends React.Component {
  render() {
    return (
      <div class="container-fluid">
          <WaffleDesc />
          <FranchiseInfo />
      </div>
    )
  }
}
export default FoundationPage;