import React from 'react';
import { Link } from 'react-router';

import './styles/Newsroom.scss';

import MediaKit from './MediaKit.jsx';

export default class Newsroom extends React.Component {
  constructor( props ) {
    super ( props );
  }


  render() {
    return(
      <main>
        <div className="newsroom">
          <section id="news" className="newsroom__articles">
          
            <h2 className="newsroom__title">Newsroom</h2>



            <article className="newsroom__item">
              <p className="newsroom__item--date">November 28, 2016</p>
              <h3 className="newsroom__item--title">
                <Link to="/newsroom/european-aviation-network-ean-is-airborne">European Aviation Network (EAN) is airborne!</Link>
              </h3>
              <p className="newsroom__item--link">
                <Link to="/newsroom/european-aviation-network-ean-is-airborne">Read more</Link>
              </p>
            </article>

            <article className="newsroom__item">
              <p className="newsroom__item--date">November 03, 2016</p>
              <h3 className="newsroom__item--title">
                <Link to="/newsroom/european-aviation-network-welcomes-first-airline-customer">European Aviation Network welcomes first airline customer</Link>
              </h3>
              <p className="newsroom__item--link">
                <Link to="/newsroom/european-aviation-network-welcomes-first-airline-customer">Read more</Link>
              </p>
            </article>


            <article className="newsroom__item">
              <p className="newsroom__item--date">October 28, 2016</p>
              <h3 className="newsroom__item--title">
                <Link to="/newsroom/meet-us-at-the-wireless-global-congress-2016">Meet us at the Wireless Global Congress</Link>
              </h3>
              <p className="newsroom__item--link">
                <Link to="/newsroom/meet-us-at-the-wireless-global-congress-2016">Read more</Link>
              </p>
            </article>

            <article className="newsroom__item">
              <p className="newsroom__item--date">September 26, 2016</p>
              <h3 className="newsroom__item--title">
                <Link to="/newsroom/apex-expo">Meet us at APEX EXPO 2016</Link>
              </h3>
              <p className="newsroom__item--link">
                <Link to="/newsroom/apex-expo">Read more</Link>
              </p>
            </article>


            <article className="newsroom__item">
              <p className="newsroom__item--date">September 22, 2016</p>
              <h3 className="newsroom__item--title">
                <Link to="/newsroom/european-aviation-network-installation-of-the-first-lte-antennas-in-the-uk">European Aviation Network – Installation of the first LTE antennas in the UK</Link>
              </h3>
              <p className="newsroom__item--link">
                <Link to="/newsroom/european-aviation-network-installation-of-the-first-lte-antennas-in-the-uk">Read more</Link>
              </p>
            </article>


            <article className="newsroom__item">
              <p className="newsroom__item--date">July 21, 2016</p>
              <h3 className="newsroom__item--title">
                <Link to="/newsroom/satellite-constructed-on-schedule-for-inmarsats-ground-breaking-european-aviation-network">Satellite constructed on schedule for Inmarsat’s ‘ground-breaking’ European Aviation Network</Link>
              </h3>
              <p className="newsroom__item--link">
                <Link to="/newsroom/satellite-constructed-on-schedule-for-inmarsats-ground-breaking-european-aviation-network">Read more</Link>
              </p>
            </article>

            
            <article className="newsroom__item">
              <p className="newsroom__item--date">February 25, 2016</p>
              <h3 className="newsroom__item--title">
                <Link to="/newsroom/inmarsat-selects-thales-to-develop-critical-infrastructure-for-european-aviation-network">Inmarsat selects Thales to develop critical infrastructure for European Aviation Network</Link>
              </h3>
              <p className="newsroom__item--link">
                <Link to="/newsroom/inmarsat-selects-thales-to-develop-critical-infrastructure-for-european-aviation-network">Read more</Link>
              </p>
            </article>


            <article className="newsroom__item">
              <p className="newsroom__item--date">February 19, 2016</p>
              <h3 className="newsroom__item--title">
                <Link to="/newsroom/european-aviation-network-on-fast-track-to-takeoff">European Aviation Network on Fast Track to Takeoff</Link>
              </h3>
              <p className="newsroom__item--link">
                <Link to="/newsroom/european-aviation-network-on-fast-track-to-takeoff">Read more</Link>
              </p>
            </article>

            <article className="newsroom__item">
              <p className="newsroom__item--date">November 02, 2015</p>
              <h3 className="newsroom__item--title">
                <Link to="/newsroom/new-satellite-access-station-for-european-aviation-network-in-greece">New satellite access station for European Aviation Network in Greece</Link>
              </h3>
              <p className="newsroom__item--link">
                <Link to="/newsroom/new-satellite-access-station-for-european-aviation-network-in-greece">Read more</Link>
              </p>
            </article>


            <article className="newsroom__item">
              <p className="newsroom__item--date">October 07, 2015</p>
              <h3 className="newsroom__item--title">
                <Link to="/newsroom/european-aviation-network-terminal-manufacturer-selected">European Aviation Network terminal manufacturer selected</Link>
              </h3>
              <p className="newsroom__item--link">
                <Link to="/newsroom/european-aviation-network-terminal-manufacturer-selected">Read more</Link>
              </p>
            </article>

            <article className="newsroom__item">
              <p className="newsroom__item--date">September 21, 2015</p>
              <h3 className="newsroom__item--title">
                <Link to="/newsroom/deutsche-telekom-and-inmarsat-partner-to-deliver-european-aviation-network">Deutsche Telekom and Inmarsat partner to deliver European Aviation Network</Link>
              </h3>
              <p className="newsroom__item--link">
                <Link to="/newsroom/deutsche-telekom-and-inmarsat-partner-to-deliver-european-aviation-network">Read more</Link>
              </p>
            </article>



          </section>


          <MediaKit />


        </div>
      </main>
    )
  }
}
