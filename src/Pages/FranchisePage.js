import React from 'react';
import '../Styles/FranchisePage.css';

import WaffleDesc from '../Components/WaffleDesc.js';
import FranchiseInfo from '../Components/FranchiseInfo.js';
import FranchisePackage from '../Components/FranchisePackage.js';
import CallToAction from '../Components/CallToAction.js';

class FranchisePage extends React.Component {
  render() {
    return (
      <div class="container-fluid">
          <WaffleDesc />
          <FranchiseInfo />
          <FranchisePackage />
          <CallToAction />
      </div>
    )
  }
}
export default FranchisePage;