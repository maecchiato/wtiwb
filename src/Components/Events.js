import React from 'react';
import Slider from 'react-slick';
import ReactDOM from 'react-dom';
import  { HashLink } from 'react-router-hash-link';

import events1 from '../assets/img/advertisements/200101.jpg';
import events2 from '../assets/img/advertisements/200106.jpg';
import events3 from '../assets/img/advertisements/200114.jpg';
import events4 from '../assets/img/advertisements/200115.jpg';
import events5 from '../assets/img/advertisements/200203.jpg';
import events6 from '../assets/img/advertisements/events6.jpg';
import events7 from '../assets/img/advertisements/events7.jpg';
import events8 from '../assets/img/advertisements/events8.jpg';
import events9 from '../assets/img/advertisements/events9.jpg';
import events10 from '../assets/img/advertisements/events10.jpg';
import events14 from '../assets/img/advertisements/events14.jpg';
import events17 from '../assets/img/advertisements/events17.jpg';
import rec from '../assets/img/Heading/rec.jpg';

class Events extends React.Component{
  render(){
    var settings = {
      dots: true,
      mobileFirst: true,
       centerMode: true,
       centerPadding: '40px',
       slidesToShow: 1,
       slidesToScroll: 1,
       speed: 1000,
       autoplay: true,
       arrows:true,
       autoplaySpeed: 4500,
       responsive: [
         {
           breakpoint: 768,
           settings: {
             arrows: true,
             centerMode: true,
             centerPadding: '60px',
             slidesToShow: 2,
             slidesToScroll: 2
           }
         },
         {
           breakpoint: 1200,
           settings: {
             arrows: false,
             centerMode: true,
             centerPadding: '60px',
             slidesToShow: 3,
             slidesToScroll: 3
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
        <div className = "col-xl-4 col-lg-4 col-md-4 col-xs-12 col-sm-12">
          
        </div>
        <div id = "event-slider" className = "col-xl-4 col-lg-4 col-md-4 col-xs-12 col-sm-12 text-center">
        <Slider {...settings}>


        <div className = "zoom evt">
          <small className = "overline mt-xl-2 mt-lg-2 mt-sm-0 mr-3 float-right">
                01 Jan 2020
              </small>
              
              <a href="https://www.facebook.com/WaffleTimeInc/posts/10157762779542726" target="_blank" rel=" noreferrer noopener">
            <img className = "img-size" src = {events1} />
              <p className = "event-description">
              Mula noon hanggang ngayon kami ay patuloy na nagbibigay saya sa inyong paboritong waffle. Isang Manigong Bagong Taon ang handog sa inyo ng Waffle Time.
              </p>
              <p className = "mt-1 mx-1 event-description text-justify">

              </p>
              </a>
          </div>

          <div className = "zoom evt">
          <small className = "overline mt-xl-2 mt-lg-2 mt-sm-0 mr-3 float-right">
                06 Jan 2020
              </small>
              <a href="https://www.facebook.com/WaffleTimeInc/posts/10157782288702726" target="_blank" rel=" noreferrer noopener">
            <img className = "img-size" src = {events2} />
              <p className = "event-description">
              Nandito na ang pambansang waffle ng Pilipinas. Matitikman ang Freshly Baked Waffles sa Marianing Superstore, Kalibo, Aklan.
              </p>
              <p className = "mt-1 mx-1 event-description text-justify">

              </p>
              </a>
          </div>                                               

          <div className = "zoom evt">
          <small className = "overline mt-xl-2 mt-lg-2 mt-sm-0 mr-3 float-right">
               14 Jan 2020
              </small>
              
              <a href="https://www.facebook.com/WaffleTimeInc/posts/10157793557777726" target="_blank" rel=" noreferrer noopener">
            <img className = "img-size" src = {events3} />
              <p className = "event-description">
              Discount para sa inyo! Attend our Free Franchise Orientation and qualify for a SPECIAL DISCOUNT*. Hurry, limited seats only! Simply text your full name and address at 0933 851 4522. See you!
              </p>
              <p className = "mt-1 mx-1 event-description text-justify">

              </p>
              </a>
          </div>

          <div className = "zoom evt">
          <small className = "overline mt-xl-2 mt-lg-2 mt-sm-0 mr-3 float-right">
          15 Jan 2020
              </small>
              <a href="https://www.facebook.com/WaffleTimeInc/posts/10157815915542726" target="_blank" rel=" noreferrer noopener">
            <img className = "img-size" src = {events4} />
              <p className = "event-description">
              Few days until #IloiloDinagyangFestival2020! Waffle Time joins Kaon Ta, Iloilo Dinagyang Food Fest on January 24, 25, and 26, 2020 at Arsenal Street, Iloilo City! See you all soon!
              </p>
              <p className = "mt-1 mx-1 event-description text-justify">

              </p>
              </a>
          </div>

          <div className = "zoom evt">
          <small className = "overline mt-xl-2 mt-lg-2 mt-sm-0 mr-3 float-right">
          03 Feb 2020
              </small>
              <a href="https://www.facebook.com/WaffleTimeInc/posts/10157872567972726" target="_blank" rel=" noreferrer noopener">
            <img className = "img-size" src = {events5} />
              <p className = "event-description">
              SAVE THE DATE! Attend our Free Franchise Orientation and qualify for a SPECIAL DISCOUNT*. Hurry, limited seats only!              </p>
              <p className = "mt-1 mx-1 event-description text-justify">

              </p>
              </a>
          </div>
          
         </Slider>
        </div>
        
        <div className = "col-xl-12 col-lg-12 col-md-12 col-xs-12 col-sm-12 text-center mb-1">
          <HashLink to ="/events/#fillings-section"><button className="btn-med"> View More Events</button></HashLink> 
        </div>
      </div>

    )
  }
}


 ReactDOM.render( <Slider  /> ,
   document.getElementById('root')
 );
export default Events;
