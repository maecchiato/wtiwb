import React from 'react';
import Slider from 'react-slick';
import ReactDOM from 'react-dom';

import events1 from '../assets/img/advertisements/events1.jpg';
import events2 from '../assets/img/advertisements/events2.jpg';
import events3 from '../assets/img/advertisements/events3.jpg';
import events4 from '../assets/img/flavor-of-the-month-display.jpg';
import events5 from '../assets/img/advertisements/events5.jpg';
import events6 from '../assets/img/advertisements/events6.jpg';
import events7 from '../assets/img/advertisements/events7.jpg';
import events8 from '../assets/img/advertisements/events8.jpg';
import events9 from '../assets/img/advertisements/events9.jpg';

import rec from '../assets/img/Heading/rec.jpg';

class StoreOpenings extends React.Component{
  render(){
    var settings = {
      dots: true,
       centerMode: true,
       centerPadding: '60px',
       slidesToShow: 1,
       speed: 1000,
       autoplay: true,
       autoplaySpeed: 4500,
       responsive: [
         {
           breakpoint: 758,
           settings: {
             arrows: false,
             centerMode: true,
             centerPadding: '40px',
             slidesToShow: 1
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
          <p className = "headline-h3 text-center">Store Openings</p>
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
              
              <a href="https://www.facebook.com/WaffleTimeInc/photos/pcb.10157451754332726/10157451753902726/?type=3&theater" target="_blank" rel=" noreferrer noopener">
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
          11 Sep 2019
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
                Tue, 17 September 2019
              </small>
              <a href="https://www.facebook.com/WaffleTimeInc/posts/10157471033822726?__tn__=-R" target="_blank" rel=" noreferrer noopener">
            <img className = "img-size" src = {events7} />
              <p className = "event-description">
                Waffle Time opens at Corpus Christi School, Cagayan de Oro
              </p>
              <p className = "mt-1 mx-1 event-description text-justify">

              </p>
              </a>
          </div>

         </Slider>
        </div>        
      </div>
    )
  }
}


 ReactDOM.render( <Slider  /> ,
   document.getElementById('root')
 );
export default StoreOpenings;
