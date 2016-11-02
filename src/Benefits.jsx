import React from 'react';
import { render } from 'react-dom';

import './styles/Benefits.scss';


export default class Benefits extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return(
    
      <main>
        <article className="ean-benefits">
          <div className="ean-benefits__stars"></div>
          

          <section id="benefits-of-ean" className="content-wrapper ean-benefits__intro">
            <h2>
              Benefits of the<br/>
              European Aviation Network
            </h2>
            <h3>World-leading innovation</h3>

            <p>
              Developed in a partnership of leading innovators in mobile connectivity and aviation, the European Aviation Network (EAN) is the first integrated LTE / satellite connectivity network of its kind worldwide that combines an advanced S-band satellite service with a complimentary ground-to-air network to provide high-capacity coverage across Europe.
            </p>
          </section>

          <div className="ean-benefits__plane">
            <img src="./img/benefits-plane.png" className="show-desk" alt=""/>
            <img src="./img/benefits-plane-mobile.png" className="show-mobile" alt=""/>
          </div>

          <section className="content-wrapper benefits-copy ">
            <h3>Superior passenger experience</h3>
            <p>
              EAN will transform European air travellers’ in-flight experience. <br/>It meets passenger demand for true in-flight broadband with quality of service that is consistent both in the air and on the ground, letting travellers enjoy messaging, social media and high-bandwidth applications like email, web browsing, video streaming, and VPN access while they fly.
            </p>
          </section>

          <section className="content-wrapper benefits-copy">
            <h3>Designed for Europe by Europe</h3>
            <p>
              Engineered for high-density airspace and developed by European companies, EAN has coverage across all 28 EU member states, while increasing capacity for the busiest European routes and hubs.
            </p>
          </section>

          <section id="scalable" className="content-wrapper benefits-copy benefits-copy__scalable">
            <h3>Scalable solution to meet growing demand</h3>
            <p>
              EAN has a uniquely scalable architecture to match growing demand and increase network capacity quickly and affordably in response to traffic growth, more aircraft, route changes and evolving passenger behaviour.
            </p>
          </section>


        </article>

        <article className="benefits__commercially-attractive">


          <section id="low-total-cost" className="content-wrapper benefits-copy">
            <h3>Low total cost of operation</h3>
            <p>
              Unlocking new direct and indirect ancillary revenue streams, like e-commerce, advertising, sponsorship and paid IFE, EAN drives competitive advantage and passenger loyalty with new standards of service.
            </p>
            <p>
              It offers low capex, opex, installation and maintenance with lightweight, low-drag, highly reliable equipment -  a demand-driven, future proof solution with fast extension and no significant costs.
            </p>
          
          </section>
          
        
        </article>


        <article id="meeting-passenger-demands" className="benefits__passengers">
          <section className="benefits-copy benefits-copy--featured big-and-centered">
            <h3 className="benefits__passengers--title">
              Meeting the demands of passengers, <br/>now and in the future

            </h3>
            <p className="featured passengers__intro">
              Worldwide travellers now expect to stay connected via their smart devices and laptops when they are in the sky. In-flight connectivity has become a key differentiator in airline choice.
            </p>
          </section>  

          <section className="content-wrapper passenger-stats__wrapper">
            <div className="passenger-stats__featured">
              <div className="passenger-stats__featured--stats">
                <img src="./img/p80.png" alt="80% of European passengers are eager to have high-speed Internet on flights." />
                <p className="passenger-stats__subtext">
                  of European passengers are eager to have high-speed Internet on flights 
                </p>
              </div>
              <div className="passenger-stats__featured--description">
                <p>
                  The survey results underline the fact that airlines need to offer a reliable, high-quality broadband service to boost passenger levels and avoid losing out to their competitors.
                  <br/><br/>
                  Inmarsat and Deutsche Telekom have the networks, services and infrastructure to deliver the capacity that surging demand for fast, reliable and global connectivity requires, now and in the future.
                  <br/><br/>
                  The European Aviation Network will meet the connectivity needs of airlines flying across Europe.
                </p>
              </div>
            </div>

            <div className="passenger-stats__grid passenger-stats__grid--border">

              <div className="stat-wrapper">
                <img src="./img/stat1p83.png" alt="83% choose an airline based on broadband availability" />
                <p className="passenger-stats__subtext">choose an airline based on broadband availability</p>
              </div>
              <div className="stat-wrapper">
                <img src="./img/stat2p78.png" alt="78% expect onboard connectivity to replace in-flight entertainment in 5-10 years" />
                <p className="passenger-stats__subtext">expect onboard connectivity to replace in-flight entertainment in 5-10 years</p>
              </div>
              <div className="stat-wrapper">
                <img src="./img/stat3p54.png" alt="54% would choose staying online over in-flight meals" />
                <p className="passenger-stats__subtext">would choose staying online over in-flight meals</p>
              </div>
              <div className="stat-wrapper">
                <img src="./img/stat4p34.png" alt="34% bring 3 devices on Board" />
                <p className="passenger-stats__subtext">bring 3 devices on Board</p>
              </div>
              <div className="stat-wrapper">
                <img src="./img/stat5p69.png" alt="69% are willing to pay on any flight length in Europe" />
                <p className="passenger-stats__subtext">are willing to pay on any flight length in Europe</p>
              </div>
              <div className="stat-wrapper">
                <img src="./img/stat6p75.png" alt="75% say a relieable connection is more important than speed" />
                <p className="passenger-stats__subtext">say a relieable connection is more important than speed</p>
              </div>
               
            </div>

            <div className="passenger-stats__footnote">
              <p className="footnote">
                * 2015 In-Flight Connectivity Survey conducted by Inmarsat (LSE: ISAT.L), the leading provider of global mobile satellite communications services, and market research company GfK.
                <br/>
                <a href="/InmarsatALL-EuroSpecific.pdf" target="_blank" className="button button__big button--pdf">
                  <img src="./img/icon-pdf.svg" className="icon" alt="View market survey" />
                  View market survey
                </a>

              </p>
            </div>
          
          </section>


        </article>
      </main>

    )
  }
}
