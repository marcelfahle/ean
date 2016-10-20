import React from 'react';
import { render } from 'react-dom';


export default class HowItWorks extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return(
    
      <main>
        <article className="howitworks-intro">

        </article>

        <article className="howitworks-components">
          <section className="howitworks-components__intro">
            <h3>
              Components of EAN
            </h3>
            <p>
              The European Aviation Network consists of two main compontents, the MSS satellite component from Inmarsat which covers Europe and the surrounding oceanic regions and the complementary ground component of Deutsche Telekom which provides the required capacity in areas with extensive air traffic.
            </p>
          </section>

          <section className="howitworks-components__annotations">
            <div className="howitworks-components__annotations--inmarsat">
              <ol>
                <li>
                  Description geostationary satellite, Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </li>
                <li>
                  Description satellite terminal, Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam.
                </li>
                <li>
                  The ground station that will serve as a gateway towards the satellite and connects the feeder links to the core network.
                </li>
                <li>
                  All traffic streams are aggregated in the MeetMe Point in NL.
                </li>
              </ol>
            </div>
            <div className="howitworks-components__annotations--telekom">
              <ol>
                <li>
                  Radio Access Network or terrestrial base stations in locations throughout Europe.
                </li>
                <li>
                  Evolved Packet Core or Core Network, the place where all the LTE traffic is converged.
                </li>
                <li>
                  The CGC terminal system on board an aircraft that communicates with the terrestrial base stations.
                </li>
                <li>  
                  The ISP Platform can be T-Mobile Hot Spot GmbH or third-party ISP. In addition the ISP Platform of Deutsche Telekom enables authentification, authorisation and accounting of the internet service and its users. 
                </li>
              </ol>
            
            </div>

          </section>

          <p className="howitworks-components__techpaper">
            <a className="button button__big button--pdf" href="#">
              <img src="./img/icon-pdf.svg" className="icon" alt="View indepth market research" />
              View technical paper
            </a>
          </p>
         
        </article>

        <article className="howitworks-aircraft-components">

          <section className="howitworks-aircraft-components__benefits">
            <p className="hac-benefits__intro">
              Tapping into the EAN requires only moderate adjustments to airfleets, thanks to lightweight, low cost hardware extensions which fit in all regional airframes.
            </p>
            <div className="hac-benefits__row">
              {/* 1 */}
              <div className="hac-benefits__item">
                <img src="./img/hac-benefits1.png" alt="Low weight and drag minimizes additional fuel costs ($)" />
                <p>
                  Low weight and drag minimizes additional fuel costs ($)
                </p>
              </div>
              {/* 2 */}
              <div className="hac-benefits__item">
                <img src="./img/hac-benefits2.png" alt="Fits on all regional airframes." />
                <p>
                  Fits on all regional airframes.
                </p>
              </div>
              {/* 3 */}
              <div className="hac-benefits__item">
                <img src="./img/hac-benefits3.png" alt="Antenna has no moving parts - high MTBF provides a service with superior availability." />
                <p>
                  Antenna has no moving parts - high MTBF provides a service with superior availability.
                </p>
              </div>
            </div>
            {/* ROW 2 */}
            <div className="hac-benefits__row">
              {/* 4 */}
              <div className="hac-benefits__item">
                <img src="./img/hac-benefits4.png" alt="Quick turn repairs minimize opportunity costs (aircraft back in service more quickly)." />
                <p>
                  Quick turn repairs minimize opportunity costs (aircraft back in service more quickly).
                </p>
              </div>
              {/* 5 */}
              <div className="hac-benefits__item">
                <img src="./img/hac-benefits5.png" alt="High availability requires fewer LRUs to support, EAN LRUs are smaller and lighter vs. Satcom solutions." />
                <p>
                  High availability requires fewer LRUs to support, EAN LRUs are smaller and lighter vs. Satcom solutions.
                </p>
              </div>
              {/* 6 */}
              <div className="hac-benefits__item">
                <img src="./img/hac-benefits6.png" alt="LRUs are smaller, lighter and easier to access, fewer personnel, less equipment and less time required vs. Satcom solutions." />
                <p>
                  LRUs are smaller, lighter and easier to access, fewer personnel, less equipment and less time required vs. Satcom solutions.
                </p>
              </div>
            </div>
            {/* ROW 3 */}
            <div className="hac-benefits__row">
              {/* 7 */}
              <div className="hac-benefits__item">
                <img src="./img/hac-benefits7.png" alt="Less downtime improves customer perception and experience." />
                <p>
                  Less downtime improves customer perception and experience.
                </p>
              </div>
              {/* 8 */}
              <div className="hac-benefits__item">
                <img src="./img/hac-benefits8.png" alt="In addition, airlines can utilise the benefits of high-speed broadband to improve the operational efficiency of their aircraft." />
                <p>
                  In addition, airlines can utilise the benefits of high-speed broadband to improve the operational efficiency of their aircraft.
                </p>
              </div>
              {/* 9 */}
              <div className="hac-benefits__item">
                <p>
                </p>
              </div>
            </div>
          </section>

        </article>



      </main>

    )
  }
}
