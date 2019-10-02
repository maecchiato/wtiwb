import React from 'react';
import Slider from 'react-slick';
import ReactDOM from 'react-dom';
import  { HashLink } from 'react-router-hash-link';
import fevents1 from '../assets/img/advertisements/fevents1.jpg';
import fevents2 from '../assets/img/advertisements/fevents2.jpg';
import fevents3 from '../assets/img/advertisements/fevents3.jpg';
import fevents4 from '../assets/img/advertisements/fevents4.jpg';
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

class EventFoundation extends React.Component{
  render(){
    var settings = {
      dots: true,
       centerMode: true,
       centerPadding: '60px',
       slidesToShow: 1,
       speed: 1000,
       autoplay: false,
       arrows: true,
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
      <div id = "events-f-section" className = "row">
        <div className = "col-xl-2 col-lg-2 col-md-2 col-xs-12 col-sm-12">
        </div>
        <div id = "event-slider" className = "col-xl-8 col-lg-8 col-md-8 col-xs-12 col-sm-12 text-center">
        <Slider {...settings}>
          
        <div className = "zoom evtf">
            <a href="https://www.facebook.com/WaffleTimeInc/posts/10157447168432726" target="_blank" rel=" noreferrer noopener">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-xs-12 col-sm-12">
                        <img id="eventf-img" className = "img-fluid " src = {fevents1} />
                    </div>
                    <div className="col-xl-8 col-lg-8 col-md-8 col-xs-12 col-sm-12 ">
                        <p className = "color-yellow button-16 mt-xl-2 mt-lg-2 mt-sm-0 mr-3 text-left ml-4">
                        7 Sep 2019
                        </p>
                        <p id="eventf-title" className = "title-24 text-left text-white pt-3 ml-4">
                        Waffle Time Honors Grandparents on National Grandparent&apos;s Day
                        </p>
                        <p className = "w-75 event-description text-left text-white ml-4">
                        Ang Waffle Time sa pamamagitan ng Waffle Time Foundation ay nag-diriwang at nagbibigay pugay sa ating mga Lolo at Lola na nasa pangangalaga ng House of Nazareth. #waffletimefoundation
                        #waffletimecares
                        #lakingwaffletime
                        #nationalgrandparentsdaypinas
                        </p>              
                    </div>
                </div>
            </a>
        </div>

        <div className = "zoom evtf">
            <a href="https://www.facebook.com/WaffleTimeInc/posts/10157372564772726" target="_blank" rel=" noreferrer noopener">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-xs-12 col-sm-12">
                        <img id="eventf-img" className = "img-fluid" src = {fevents2} />
                    </div>
                    <div className="col-xl-8 col-lg-8 col-md-8 col-xs-12 col-sm-12">
                        <p className = "color-yellow button-16 mt-xl-2 mt-lg-2 mt-sm-0 mr-3 text-left ml-4">
                        8 Aug 2019
                        </p>
                        <p id="eventf-title" className = "title-24 text-left text-white pt-3 ml-4">
                        WTI holds Bloodletting Drive
                        </p>
                        <p className = "w-75 event-description text-left text-white ml-4">
                        In partnership with Red Cross Iloilo Chapter, Waffle Time Group of Companies conducted "Dugo para sa Dengue" to promote the health of employees and gather blood donations.  
                        #AngPambansangWaffleNgPilipinas
                        #WaffleTimeFoundation
                        #WaffleTimeCares
                        </p>              
                    </div>
                </div>
            </a>
        </div>

        <div className = "zoom evtf">
            <a href="https://www.facebook.com/WaffleTimeInc/posts/10157360042642726" target="_blank" rel=" noreferrer noopener">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-xs-12 col-sm-12">
                        <img id="eventf-img" className = "img-fluid " src = {fevents3} />
                    </div>
                    <div className="col-xl-8 col-lg-8 col-md-8 col-xs-12 col-sm-12">
                        <p className = "color-yellow button-16 mt-xl-2 mt-lg-2 mt-sm-0 mr-3 text-left ml-4">
                        3 Aug 2019
                        </p>
                        <p id="eventf-title" className = "title-24 text-left text-white pt-3 ml-4">
                        Malasakit sa Kapwa Project
                        </p>
                        <p className = "w-75 event-description text-left text-white ml-4">
                        Waffle Time Foundation donates 20 folding beds to the Fifth District of Iloilo. Beds are received by the office of the Board Member, Atty. Carol Espinosa. #WaffleTimeFoundation #LakingWaffleTime
                        </p>              
                    </div>
                </div>
            </a>
        </div>

        <div className = "zoom evtf">
            <a href="https://www.facebook.com/WaffleTimeInc/posts/10157188534582726" target="_blank" rel=" noreferrer noopener">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-xs-12 col-sm-12">
                        <img id="eventf-img" className = "img-fluid " src = {fevents4} />
                    </div>
                    <div className="col-xl-8 col-lg-8 col-md-8 col-xs-12 col-sm-12">
                        <p className = "color-yellow button-16 mt-xl-2 mt-lg-2 mt-sm-0 mr-3 text-left ml-4">
                        27 May 2019
                        </p>
                        <p id="eventf-title" className = "title-24 text-left text-white pt-3 ml-4">
                        Waffle Time participates in Brigada Eskwela 2019
                        </p>
                        <p className = "w-75 event-description text-left text-white ml-4">
                        Waffle Time supports the following schools:

                        Ungka II Elementary School,
                        Pagsanga-an Elementary School,
                        Tigum ANP Pilot Elementary School, and
                        Donato M. Pison Sr. Memorial School

                        for Brigada Eskwela 2019's Theme: "Matatag na Bayan para sa Maunlad na Paaralan" 
                        #WaffleTimeFoundation
                        #WaffleTimeCares
                        </p>              
                    </div>
                </div>
            </a>
        </div>


          
         </Slider>
        </div>
        
        <div className = "col-xl-2 col-lg-2 col-md-2 col-xs-12 col-sm-12 text-center mb-1">
        </div>
      </div>

    )
  }
}


 ReactDOM.render( <Slider  /> ,
   document.getElementById('root')
 );
export default EventFoundation;
