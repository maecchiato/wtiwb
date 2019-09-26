import React from 'react';
import Youtube from '@u-wave/react-youtube';

import recyellow from '../assets/img/rec-yellow.jpg';

class Decades extends React.Component {
    render() {
        return (
            <div id="decades-section" className="row">
                <p className="headline-h4 w-100 text-white">Waffle Time through the Decades</p>
                <img src={recyellow}></img>
                <div className="container-fluid row">
                    <div id="decades-video" className="col-xl-6 col-lg-6 col-md-6 col-xs-12 col-sm-12 justify-content-center">
                        <div className="youtube-parent mt-1 h-100">
                            <div className="youtube-display pt-5 h-50 d-xl-block d-none">
                                <Youtube
                                    video="mogEZnukIgM"
                                    autoplay
                                    muted
                                    width="100%"
                                    height="320px"
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
                    <div className="col-xl-6 col-lg-6 col-md-6 col-xs-12 col-sm-12 pt-5">
                        <p className="body-reg-14 text-left text-white">Waffle Time, best recognized for tasty and delectable waffles stocked with various delicious fillings, is one of the most reputable and nationally known brands in the food kiosk and franchising industry in the Philippines today. It began as small business in Iloilo City in 1998 as a food cart located in the heart of the city. After two formidable decades, Waffle Time celebrates its 20th Grand Anniversary.</p>
                        <p className="body-reg-14 text-left text-white">The first ever Waffle Time outlet opened at The Atrium Mall in Iloilo City. Soon after, Waffle Time opened offices and commissaries in key cities nation-wide, penetrating the highly-competitive Metro Manila market sometime in June 2002. Waffle Time began franchising in 2004, and in the same year opened offices and commissaries in Cebu and Cagayan de Oro, and a Davao office in 2005. To date, Waffle Time has over 400 company-owned and franchised outlets in the whole Philippines. </p>
                        {/* <button className="btn-small">DISCOVER MORE</button> */}
                    </div>
                </div>
                <p className="body-reg-14 text-left text-white">It goes without saying that the Waffle Time opened its doors to franchising, this gave a lot of hope to aspiring entrepreneurs who for long have dreamt of establishing their own businesses. The partnership formed affirms the credo that choosing the right business partner is one of the ways to attain success.</p>
                <p className="body-reg-14 text-left text-white">Because of its phenomenal rise and owing to the trust and confidence of its faithful clients, let alone its good reputation in the business and franchising industries, Waffle Time was hailed as the Most Promising Franchise in 2006, the Best Corporate Social Responsibility Program, and recipient of The Hall of Fame Award granted by the Department of Trade and Industry (DTI) and the Philippine Franchise Association (PFA).</p>
                <p className="body-reg-14 text-left text-white">Do you know that people love to refer to Waffle Time as the  “Pambansang Waffle ng Pilipinas”? Simply put, because its mouth-watering, savoury and sweet fillings suit everyone’s palate, Filipinos have grown to be very fond of this kind of waffle through the years. What’s more, Waffle Time never ceases to create new and innovate fillings to satisfy the customers’m taste and cravings. By the way, Waffle Time Party Packages are readily available to ensure a fun and unforgettable moments to special events such as birthdays, reunions, and kid parties, or any gatherings. </p>
                <p className="body-reg-14 text-left text-white">Waffle Time has truly come a long way from a single food cart in Iloilo City into a nationally-recognized brand. Now on its 20th year, Waffle Time remains steadfast in inspiring Filipinos to be entrepreneurs. </p>
                <p className="body-reg-14 text-left text-white">In like manner, the Pambansang Waffle ng Pilipinas will always serve delicious waffles freshly baked at the site. So make your time a Waffle Time!</p>

            </div>
        )
    }
}

export default Decades;