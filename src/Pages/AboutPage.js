import React from 'react';
import '../Styles/AboutPage.css';
import History from '../Components/History';
import MissionVision from '../Components/MissionVision';
import Awards from '../Components/Awards';

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
