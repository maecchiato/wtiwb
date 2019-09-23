import React from 'react';
import YouTube from 'react-youtube';

import recshort from '../assets/img/rec100.jpg';
import sep from '../assets/img/history/1998sept.png';
import may from '../assets/img/history/2002may.png';
import jun from '../assets/img/history/2002june.png';
import mar from '../assets/img/history/2004march.png';
import present from '../assets/img/history/present.png';

class History extends React.Component {

  _onReady(event) {
    event.target.mute();
  }

  _onEnd(event) {
    event.target.playVideo();
  }
    render() {
        const videoOptions = {
            playerVars:
            {
              autoplay: 1,
              controls: 0,
              rel: 0,
              showInfo: 0
            }
          };
        return (
            <div id="history-page-section" className="row">
                <div id="about-vid" className="video-background d-none d-xl-block">
                    <div className="video-foreground">
                        <YouTube
                            videoId="q4r7Rkjjlgk"
                            opts={videoOptions}
                            className="video-iframe"
                            onReady={this._onReady}
                            onEnd={this._onEnd}
                        />
                    </div>
                </div>

                <div id="history-timeline" className="">
                    <div id="aboutpage-headline" className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <p className="headline-h3 mt-5 mt-5 text-center">Waffle Time Inc.</p>
                        <div className="row pt-4">
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 text-right ">
                                <img src={recshort}></img>
                                <p className="subheadline text-dark">OUR HISTORY</p>
                            </div>
                            <div className="container-fluid col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-8 ">
                                <p id="history-desc" className="body-reg-14 text-left ml-3">Waffle Time Incorporated. The first and original purveyor of quality and freshly-baked waffles in cart with vast selection of fillings. Twenty years since the first branch in Iloilo City successfully established a name in the food kiosk business,  freshly baked  at site the most delicious waffles very affordable prices.</p>
                            </div>
                        </div>
                    </div>

                    <div id="history-section" class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 justify-content">
                        <div id="history-card-left" className="row">
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-2 col-xs-2 pt-4 text-right d-none d-md-block">
                                <img src={sep} className=""></img>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-10 col-xs-10 pt-5">
                                <p className="button-16">1998 September</p>
                                <p className="caption-12 text-left">Waffle Time started in the province of Iloilo, Philippines as a simple business venture. The first outlet was in The Atrium Mall, Gen. Luna St., Iloilo City. With 7 profitable outlets, the owners were very optimist that the concept and brand is ready for expansion.</p>
                            </div>
                        </div>

                        <div id="history-card-right" className="row">
                            <div id="card-right-heading" className="col-xl-9 col-lg-9 col-md-9 col-sm-auto col-xs-auto text-left pt-5 ">
                                <p className="button-16">2002 May</p>
                                <p className="caption-12 text-left">Waffle Time registered as a corporation, from being a single-proprietorship owned business, in May of 2002. It is also a registered name and trademark under the Intellectual Property Office of the Philippines.</p>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-auto col-xs-auto pt-4 text-right d-none d-md-block">
                                <img src={may} className=""></img>
                            </div>
                        </div>

                        <div id="history-card-left" className="row">
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-auto col-xs-auto pt-3 text-right d-none d-md-block">
                                <img src={jun} className=""></img>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-auto col-xs-auto pt-5 ">
                                <p className="button-16">2002 June</p>
                                <p className="caption-12 text-left">Waffle Time started to penetrate the Metro Manila market. The concept was well received and became an instant hit. From then on, we opened area offices and outlets in Cebu, Cagayan De Oro and Davao regions.</p>
                            </div>
                        </div>

                        <div id="history-card-right" className="row">
                            <div id="card-right-heading" className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-xs-9 text-left pt-5 ">
                                <p className="button-16">2004 March</p>
                                <p className="caption-12 text-left">Waffle Time opened its door to franchising on March 2004. With an established business system and a remarkable brand, Franchisees came in line to have their own franchised outlets that has brought exponential growth in the number of branches we have nationwide.</p>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3 pt-4 text-right d-none d-md-block">
                                <img src={mar} className=""></img>
                            </div>
                        </div>

                        <div id="history-card-left" className="row">
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-auto col-xs-auto pt-3 text-right d-none d-md-block">
                                <img src={present} className=""></img>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-auto col-xs-auto pt-5">
                                <p className="button-16">Present</p>
                                <p className="caption-12 text-left">Today, Waffle Time boasts of over 400 outlets nationwide and is still actively expanding into new regions and territories. Waffle Time is aiming, from being Ang Pambansang Waffle ng Pilipinas, to become the Best Waffles in the World!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default History;
