import React from 'react';
import Youtube from '@u-wave/react-youtube';

import curve from './Layouts/img/curve.png';
import rec from './Layouts/img/Heading/rec.jpg'
import year20IMG from './Layouts/img/20-years.png';


class Foundation extends React.Component{
  _onReady(event){
    event.target.mute();
  }

  _onEnd(event){
    event.target.playVideo();
  }

  render(){
    return(
    //     <div id="about-section" class="row justify-content">
    //     <p className="headline-h2">Mula Noon, Hanggang Ngayon, Laking Waffle Time!</p>
    //     <img src={rec}></img>
    //     <div className="container-fluid row">
    //       <div id="about-body" className="col-xl-8 col-lg-8 col-md-9 col-sm-12 col-xs-12">
    //         <p className="subheadline">OUR HISTORY</p>
    //         <p className="body-reg-16">Waffle Time started on September of 1998 in the province of Iloilo, Philippines as a simple business venture. The first outlet was in The Atrium Mall, Gen. Luna St., Iloilo City. With 7 profitable outlets, the owners were very optimist that the concept and brand is ready for expansion.</p>
    //         <p className="body-reg-16">Today, Waffle Time boasts of over 400 outlets nationwide and is still actively expanding into new regions and territories. Waffle Time is aiming, from being Ang Pambansang Waffle ng Pilipinas, to become the Best Waffles in the World!</p>
    //         <button className="btn-small">LEARN MORE</button>
    //       </div>
    //       <div className="container-fluid col-xl-4 col-lg-4 col-md-3 col-sm-12 col-xs-12 text-left">
    //         <img className="img-fluid mt-12" src={waffy} />
    //       </div>     
    //     </div>    
    //   </div>
      <div id = "foundation-section" className = "row justify-content">
      <p className = "headline-h2 full-width">Waffle Time Foundation</p>
      <img src={rec}></img>
      <div className="container-fluid row">
      <div id="about-body" className = "col-xl-5 col-lg-5 col-md-5 col-xs-12 col-sm-12">
        <p className = "subheadline">WHAT'S NEXT FOR WAFFLE TIME?</p>
        <p className = "body-reg-16">While the company has been a main supporter of various community-based academic and environment-related activities, including the empowerment of local producers through trade exhibits, the recently created Waffle Time Foundation is committed to be a front liner or stimulus in the continuing upliftment of the status of education, the environment and social enterprise in the local communities.</p>
        <p className = "body-reg-16 font-weight-bold">
          Cheers to more years of baking freshness!
        </p>
        <button className="btn-small">DISCOVER MORE</button>
      </div>
      <div id="foundation-video" className = "col-xl-7 col-lg-7 col-md-7 col-xs-12 col-sm-12">
        <div className = "mt-5 youtube-parent h-100">
          <div className = "youtube-display pt-5 h-50 d-xl-block d-none">
            <Youtube
              video="q4r7Rkjjlgk"
              autoplay
              muted
              width = "100%"
              height ="350px"
              showInfo  = {false}
              controls = {false}
              allowFullscreen = {false}
              showRelatedVideos	= {false}
              annotations = {false}
              className="video-iframe"
              onReady={this._onReady}
              onEnd={this._onEnd}
            />
        </div>
          {/* <img src = {year20IMG} className = "img-fluid d-xl-none d-block" /> */}
        </div>
      </div>
      </div>
      </div>
    )
  }
}
export default Foundation;
