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
import events10 from '../assets/img/advertisements/events10.jpg';
import events11 from '../assets/img/advertisements/events11.jpg';
import events12 from '../assets/img/advertisements/events12.jpg';
import events13 from '../assets/img/advertisements/events13.jpg';

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
                14 Oct 2019
              </small>
              <a href="https://www.facebook.com/WaffleTimeInc/posts/10157543410812726" target="_blank" rel=" noreferrer noopener">
            <img className = "img-size" src = {events13} />
              <p className = "event-description">
                Waffle Time opens at Bulacan State University
              </p>
              <p className = "mt-1 mx-1 event-description text-justify">

              </p>
              </a>
          </div>

        <div className = "zoom evt">
          <small className = "overline mt-xl-2 mt-lg-2 mt-sm-0 mr-3 float-right">
                7 Oct 2019
              </small>
              <a href="https://www.facebook.com/WaffleTimeInc/posts/10157523950552726" target="_blank" rel=" noreferrer noopener">
            <img className = "img-size" src = {events13} />
              <p className = "event-description">
                Waffle Time opens at Lyceum of the Philippines - Davao
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
          25 Sep 2019
              </small>
              <a href="https://www.facebook.com/WaffleTimeInc/posts/10157491309767726" target="_blank" rel=" noreferrer noopener">
            <img className = "img-size" src = {events11} />
              <p className = "event-description">
              Waffle Time opens at Robinsons Supermarket Merville, Parañaque
              </p>
              <p className = "mt-1 mx-1 event-description text-justify">

              </p>
              </a>
          </div>

          <div className = "zoom evt">
          <small className = "overline mt-xl-2 mt-lg-2 mt-sm-0 mr-3 float-right">
                17 Sep 2019
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

          <div className = "zoom evt">
          <small className = "overline mt-xl-2 mt-lg-2 mt-sm-0 mr-3 float-right">
                13 Sep 2019
              </small>
              <a href="https://www.facebook.com/WaffleTimeInc/posts/10157461231432726" target="_blank" rel=" noreferrer noopener">
            <img className = "img-size" src = {events12} />
              <p className = "event-description">
                Waffle Time opens at Robinsons Place Iligan
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
