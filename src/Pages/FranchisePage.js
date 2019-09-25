import React from 'react';
import '../Styles/FranchisePage.css';

import WaffleDesc from '../Components/WaffleDesc.js';
import FranchiseInfo from '../Components/FranchiseInfo.js';
import FranchisePackage from '../Components/FranchisePackage.js';




class FoundationPage extends React.Component {
  render() {
    return (
      <div class="container-fluid">
          <WaffleDesc />
          <FranchiseInfo />
          <FranchisePackage />
      </div>
    )
  }
}
export default FoundationPage;