import React from 'react';
import Slider from 'react-slick';
import ReactDOM from 'react-dom';
import  { HashLink } from 'react-router-hash-link';

import events1 from '../assets/img/advertisements/events1.jpg';
import events2 from '../assets/img/advertisements/events2.jpg';
import events3 from '../assets/img/advertisements/events3.jpg';
import events4 from '../assets/img/flavor-of-the-month-display.jpg';
import events5 from '../assets/img/advertisements/events5.jpg';
import events6 from '../assets/img/advertisements/events6.jpg';
import events7 from '../assets/img/advertisements/events7.jpg';
import events8 from '../assets/img/advertisements/events8.jpg';
import events9 from '../assets/img/advertisements/events9.jpg';
import events10 from '../assets/img/advertisements/events10.jpg';

import rec from '../assets/img/Heading/rec.jpg';

class Events extends React.Component{
  render(){
    var settings = {
      dots: true,
      mobileFirst: true,
       centerMode: true,
       centerPadding: '40px',
       slidesToShow: 1,
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
             slidesToShow: 2
           }
         },
         {
           breakpoint: 992,
           settings: {
             arrows: false,
             centerMode: true,
             centerPadding: '60px',
             slidesToShow: 3
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
                13 Sep 2019
              </small>
              
              <a href="https://www.facebook.com/WaffleTimeInc/photos/a.411614677725/10157461150387726/?type=3&theater" target="_blank" rel=" noreferrer noopener">
            <img className = "img-size" src = {events1} />
              <p className = "event-description">
                Waffle Time celebrates it&apos;s 21st National Waffle Time Day
              </p>
              <p className = "mt-1 mx-1 event-description text-justify">

              </p>
              </a>
          </div>
          <div className = "zoom evt">
          <small className = "overline mt-xl-2 mt-lg-2 mt-sm-0 mr-3 float-right">
          11 Sep 2019
              </small>
              <a href="https://www.facebook.com/WaffleTimeInc/photos/a.411614677725/10157458993177726/?type=3&theater" target="_blank" rel=" noreferrer noopener">
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
               7 Sep 2019
              </small>
              <a href="https://www.facebook.com/WaffleTimeInc/posts/10157447168432726?__tn__=-R" target="_blank" rel=" noreferrer noopener">
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
                16 Sept 2019
              </small>
              <a href="https://www.facebook.com/WaffleTimeInc/posts/10157468891597726" target="_blank" rel=" noreferrer noopener">
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
                1 Sept 2019
              </small>
              <a href="https://www.facebook.com/WaffleTimeInc/photos/a.411614677725/10157427057702726/?type=3&theater" target="_blank" rel=" noreferrer noopener">
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
               18 Jun 2019
              </small>
              <a href="https://www.facebook.com/WaffleTimeInc/posts/10157244875987726?__tn__=-R" target="_blank" rel=" noreferrer noopener">
            <img className = "img-size" src = {events6} />
              <p className = "event-description">
                Waffle Time recognizes franchisee awardees during 20th year Gala
              </p>
              <p className = "mt-1 mx-1 event-description text-justify">

              </p>
              </a>
          </div>

          <div className = "zoom evt">
          <small className = "overline mt-xl-2 mt-lg-2 mt-sm-0 mr-3 float-right">
                28 Sep 2019
              </small>
              
              <a href="https://www.facebook.com/WaffleTimeInc/posts/10157499245567726" target="_blank" rel=" noreferrer noopener">
            <img className = "img-size" src = {events10} />
              <p className = "event-description">
                Waffle Time opens at Imus Terminal Mall, Cavite
              </p>
              <p className = "mt-1 mx-1 event-description text-justify">

              </p>
              </a>
          </div>

          <div className = "zoom evt">
          <small className = "overline mt-xl-2 mt-lg-2 mt-sm-0 mr-3 float-right">
                3 Oct 2019
              </small>
              <a href="https://www.facebook.com/WaffleTimeInc/posts/10157512924567726" target="_blank" rel=" noreferrer noopener">
            <img className = "img-size" src = {events8} />
              <p className = "event-description">
                Waffle Time is hiring!
              </p>
              <p className = "mt-1 mx-1 event-description text-justify">

              </p>
              </a>
          </div>

          <div className = "zoom evt">
          <small className = "overline mt-xl-2 mt-lg-2 mt-sm-0 mr-3 float-right">
                30 Sept 2019
              </small>
              <a href="https://www.facebook.com/WaffleTimeInc/posts/10157504794417726" target="_blank" rel=" noreferrer noopener">
            <img className = "img-size" src = {events9} />
              <p className = "event-description">
                Interested in our business? Attend our Franchise Orientation!
              </p>
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
