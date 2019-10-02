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
      <div id = "events-f-section" className = "row">
        <div className = "col-xl-12 col-lg-12 col-md-12 col-xs-12 col-sm-12 text-center mb-1">
          <p className = "headline-h3 text-center">What's New</p>
          <img src={rec}></img>
        </div>
        <div className = "col-xl-2 col-lg-2 col-md-2 col-xs-12 col-sm-12">
        </div>
        <div id = "event-slider" className = "col-xl-8 col-lg-8 col-md-8 col-xs-12 col-sm-12 text-center">
        <Slider {...settings}>
          
        <div className = "zoom evtf">
            <a href="https://www.facebook.com/WaffleTimeInc/posts/10157447168432726" target="_blank" rel=" noreferrer noopener">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-xs-12 col-sm-12">
                        <img className = "img-fluid " src = {fevents1} />
                    </div>
                    <div className="col-xl-8 col-lg-8 col-md-8 col-xs-12 col-sm-12">
                        <p className = "color-yellow button-16 mt-xl-2 mt-lg-2 mt-sm-0 mr-3 text-left">
                        7 Sep 2019
                        </p>
                        <p className = "title-24 text-left text-white pt-3">
                        Waffle Time Honors Grandparents on National Grandparent&apos;s Day
                        </p>
                        <p className = "w-75 event-description text-left text-white">
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
                        <img className = "img-fluid " src = {fevents2} />
                    </div>
                    <div className="col-xl-8 col-lg-8 col-md-8 col-xs-12 col-sm-12">
                        <p className = "color-yellow button-16 mt-xl-2 mt-lg-2 mt-sm-0 mr-3 text-left">
                        8 Aug 2019
                        </p>
                        <p className = "title-24 text-left text-white pt-3">
                        Waffle Time Group of Companies in partnership with Red Cross Iloilo Chapter holds "Dugo para sa Dengue" Bloodletting Drive
                        </p>
                        <p className = "w-75 event-description text-left text-white">
                        Volunteer, bring a friend and let us all save lives. Inaanyayahan po namin ang lahat na mag donate ng dugo bilang suporta sa aming kampanya na maka tulong sa mga pasyente ng dengue na nangangailangan ng dugo sa lalawigan ng Iloilo. Maki-isa tayo sa pagsagip ng buhay!

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
                        <img className = "img-fluid " src = {fevents3} />
                    </div>
                    <div className="col-xl-8 col-lg-8 col-md-8 col-xs-12 col-sm-12">
                        <p className = "color-yellow button-16 mt-xl-2 mt-lg-2 mt-sm-0 mr-3 text-left">
                        3 Aug 2019
                        </p>
                        <p className = "title-24 text-left text-white pt-3">
                        Malasakit sa Kapwa Project
                        </p>
                        <p className = "w-75 event-description text-left text-white">
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
                        <img className = "img-fluid " src = {fevents4} />
                    </div>
                    <div className="col-xl-8 col-lg-8 col-md-8 col-xs-12 col-sm-12">
                        <p className = "color-yellow button-16 mt-xl-2 mt-lg-2 mt-sm-0 mr-3 text-left">
                        27 May 2019
                        </p>
                        <p className = "title-24 text-left text-white pt-3">
                        Waffle Time participates in Brigada Eskwela 2019
                        </p>
                        <p className = "w-75 event-description text-left text-white">
                        Waffle Time supports the following schools:

                        Ungka II Elementary School,
                        Pagsanga-an Elementary School,
                        Tigum ANP Pilot Elementary School, and
                        Donato M. Pison Sr. Memorial School

                        for Brigada Eskwela 2019's Theme: "Matatag na Bayan para sa Maunlad na Paaralan" 
                        #20YearsOfBakingFreshness
                        </p>              
                    </div>
                </div>
            </a>
        </div>


          <div className = "zoom evt">
            <a href="https://www.facebook.com/WaffleTimeInc/photos/a.411614677725/10157461150387726/?type=3&theater" target="_blank" rel=" noreferrer noopener">
                <div className="row">
                    <div class="col-xl-6 col-lg-6 col-md-6 col-xs-12 col-sm-12">
                        <img className = "img-fluid w-50" src = {events1} />
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-xs-12 col-sm-12">
                        <small className = "overline mt-xl-2 mt-lg-2 mt-sm-0 mr-3">
                        13 Sep 2019
                        </small>
              
                        <p className = "event-description">
                        Waffle Time celebrates 21st National Waffle Time Day
                        </p>             
                    </div>
                </div>

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
          {/* <div className = "zoom evt">
          <small className = "overline mt-xl-2 mt-lg-2 mt-sm-0 mr-3 float-right">
                7 Sep 2019
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
                1 Jul 2019
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
                1 Sep 2019
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
                18 Jun 2019
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

          <div className = "zoom evt">
          <small className = "overline mt-xl-2 mt-lg-2 mt-sm-0 mr-3 float-right">
                Thur, 12 September 2019
              </small>
              <a href="https://www.facebook.com/WaffleTimeInc/photos/a.411614677725/10157459117677726/?type=3&theater" target="_blank" rel=" noreferrer noopener">
            <img className = "img-size" src = {events8} />
              <p className = "event-description">
                Waffle Time is looking for capable service crew, apply now!
              </p>
              <p className = "mt-1 mx-1 event-description text-justify">

              </p>
              </a>
          </div>

          <div className = "zoom evt">
          <small className = "overline mt-xl-2 mt-lg-2 mt-sm-0 mr-3 float-right">
                Tue, 10 September 2019
              </small>
              <a href="https://www.facebook.com/WaffleTimeInc/photos/a.411614677725/10157436925537726/?type=3&theater" target="_blank" rel=" noreferrer noopener">
            <img className = "img-size" src = {events9} />
              <p className = "event-description">
                Interested in our business? Waffle Time is holding a franchise orientation
              </p>
              <p className = "mt-1 mx-1 event-description text-justify">

              </p>
              </a>
          </div> */}
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
