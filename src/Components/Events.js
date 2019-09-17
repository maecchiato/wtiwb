import React from 'react';
import Slider from 'react-slick';

import events1 from '../assets/img/advertisements/events1.jpg';
import events2 from '../assets/img/advertisements/events2.jpg';
import events3 from '../assets/img/advertisements/events3.jpg';
import events4 from '../assets/img/flavor-of-the-month-display.jpg';
import events5 from '../assets/img/advertisements/events5.jpg';
import events6 from '../assets/img/advertisements/events6.jpg';
import rec from '../assets/img/Heading/rec.jpg';

class Events extends React.Component{
  render(){
    var settings = {
      dots: true,
       centerMode: true,
       centerPadding: '60px',
       slidesToShow: 3,
       speed: 1000,
       autoplay: true,
       autoplaySpeed: 4500,
       responsive: [
         {
           breakpoint: 768,
           settings: {
             arrows: false,
             centerMode: true,
             centerPadding: '40px',
             slidesToShow: 3
           }
         },
         {
           breakpoint: 480,
           settings: {
             arrows: false,
             centerMode: true,
             centerPadding: '40px',
             slidesToShow: 1
           }
         }
       ]
    };

    return(
      <div id = "events-section" className = "row">
        <div className = "col-xl-12 col-lg-12 col-md-12 col-xs-12 col-sm-12 text-center mb-1">
          <p className = "headline-h3 text-center">What's New</p>
          <img src={rec}></img>
        </div>
        <div className = "col-xl-2 col-lg-2 col-md-2 col-xs-12 col-sm-12">
        </div>
        <div id = "event-slider" className = "col-xl-8 col-lg-8 col-md-8 col-xs-12 col-sm-12 text-center">
        <Slider {...settings}>
          <div className = "zoom evt">
          <small className = "overline mt-xl-2 mt-lg-2 mt-sm-0 mr-3 float-right">
                Friday, 13 Sep 2019
              </small>
              <a href="https://www.facebook.com/WaffleTimeInc/photos/a.411614677725/10157461150387726/?type=3&theater">
            <img className = "img-size" src = {events1} />
              <p className = "event-description">
                Waffle Time celebrates 21st National Waffle Time Day
              </p>
              <p className = "mt-1 mx-1 event-description text-justify">

              </p>
              </a>
          </div>
          <div className = "zoom evt">
          <small className = "overline mt-xl-2 mt-lg-2 mt-sm-0 mr-3 float-right">
          Wednesday, 11 Sep 2019
              </small>
              <a href="https://www.facebook.com/WaffleTimeInc/photos/a.411614677725/10157458993177726/?type=3&theater">
            <img className = "img-size" src = {events2} />
              <p className = "event-description">
              Waffle Time Joins PFA on Franchise Negosyo activities Nationwide!
              </p>
              <p className = "mt-1 mx-1 event-description text-justify">

              </p>
              </a>
          </div>
          <div className = "zoom evt">
          <small className = "overline mt-xl-2 mt-lg-2 mt-sm-0 mr-3 float-right">
                Saturday, 7 Sep 2019
              </small>
              <a href="https://www.facebook.com/WaffleTimeInc/posts/10157447168432726?__tn__=-R">
            <img className = "img-size" src = {events3} />
              <p className = "event-description">
                Waffle Time Foundation honors grandparents on National Grandparent&apos;s Day
              </p>
              <p className = "mt-1 mx-1 event-description text-justify">

              </p>
              </a>
          </div>
          <div className = "zoom evt">
          <small className = "overline mt-xl-2 mt-lg-2 mt-sm-0 mr-3 float-right">
                Monday, 1 Jul 2019
              </small>
              <a href="https://www.facebook.com/WaffleTimeInc/photos/a.411614677725/10157277864907726/?type=3&theater">
            <img className = "img-size" src = {events4} />
              <p className = "event-description">
                Fillings of the Month is here!
              </p>
              <p className = "mt-1 mx-1 event-description text-justify">

              </p>
              </a>
          </div>
          
          <div className = "zoom evt">
          <small className = "overline mt-xl-2 mt-lg-2 mt-sm-0 mr-3 float-right">
                Sunday, 1 Sep 2019
              </small>
              <a href="https://www.facebook.com/WaffleTimeInc/photos/a.411614677725/10157427057702726/?type=3&theater">
            <img className = "img-size" src = {events5} />
              <p className = "event-description">
              WaffleTime now accepts GCash! Exclusive to selected Iloilo, Kalibo, and Roxas branches
              </p>
              <p className = "mt-1 mx-1 event-description text-justify">

              </p>
              </a>              
          </div>
          
          <div className = "zoom evt">
          <small className = "overline mt-xl-2 mt-lg-2 mt-sm-0 mr-3 float-right">
                Tuesday, 18 Jun 2019
              </small>
              <a href="https://www.facebook.com/WaffleTimeInc/posts/10157244875987726?__tn__=-R">
            <img className = "img-size" src = {events6} />
              <p className = "event-description">
                Waffle Time recognizes franchisee awardees during 20th year Gala
              </p>
              <p className = "mt-1 mx-1 event-description text-justify">

              </p>
              </a>
          </div>

         </Slider>
        </div>
        <div className = "col-xl-2 col-lg-2 col-md-2 col-xs-12 col-sm12">
        </div>
        <div className = "col-xl-12 col-lg-12 col-md-12 col-xs-12 col-sm-12 text-center mb-1">
          <button className="btn-med"> View More Events</button>
        </div>
      </div>

    )
  }
}

export default Events;
