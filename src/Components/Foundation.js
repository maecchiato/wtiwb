import React from 'react';
import Youtube from '@u-wave/react-youtube';

import rec from '../assets/img/Heading/rec.jpg'


class Foundation extends React.Component {
  _onReady(event) {
    event.target.mute();
  }

  _onEnd(event) {
    event.target.playVideo();
  }

  render() {
    return (
      <div id="foundation-section" className="row justify-content add-padding">
        <p className="headline-h2 w-100">Waffle Time Foundation</p>
        <img src={rec}></img>
        <div className="container-fluid row">
          <div className="col-xl-5 col-lg-5 col-md-7 col-xs-12 col-sm-12 pt-5">
            <p className="subheadline">WHAT'S NEXT FOR WAFFLE TIME?</p>
            <p className="body-reg-16">While the company has been a main supporter of various community-based academic and environment-related activities, including the empowerment of local producers through trade exhibits, the recently created Waffle Time Foundation is committed to be a front liner or stimulus in the continuing upliftment of the status of education, the environment and social enterprise in the local communities.</p>
            <p className="body-reg-16 font-weight-bold">
              Cheers to more years of baking freshness!
            </p>
            {/* <button className="btn-small">DISCOVER MORE</button> */}
          </div>
          <div id="foundation-video" className="col-xl-7 col-lg-7 col-md-5 col-xs-12 col-sm-12">
            <div className="mt-5 youtube-parent h-100">
              <div className="youtube-display pt-5 h-50 d-xl-block d-none">
                <Youtube
                  video="mogEZnukIgM"
                  autoplay
                  muted
                  width="100%"
                  height="350px"
                  showInfo={false}
                  controls={false}
                  allowFullscreen={false}
                  showRelatedVideos={false}
                  annotations={false}
                  className="video-iframe"
                  onReady={this._onReady}
                  onEnd={this._onEnd}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Foundation;
