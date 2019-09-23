import React from 'react';
import '../Styles/AboutPage.css';
import History from '../Components/History';
import MissionVision from '../Components/MissionVision';
import Awards from '../Components/Awards';

import mission1 from '../assets/img/mission/m-waffle.png';
import mission2 from '../assets/img/mission/m-resource.png';
import mission3 from '../assets/img/mission/m-maker.png';
import mission4 from '../assets/img/mission/m-customers.png';
import mission5 from '../assets/img/mission/m-stats.png';



class AboutPage extends React.Component {
  constructor() {
    super();

    this.state = {
      hasClicked: false,
    }

    this.toggleClassClick = this.toggleClassClick.bind(this);
  }

  toggleClassClick() {
    const currentState = this.state.hasClicked;
    this.setState({ hasClicked: !currentState });
  }


  render() {
    return (
      <div className = "container-fluid">
        <History />
        <MissionVision />
        <Awards />
      </div>  
    )     
  }   
}
                  
               
  
export default AboutPage;
