import React from 'react';
import { render } from 'react-dom';


export default class HowItWorks extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return(
    
      <main>

        <article id="elements-of-ean" className="howitworks-components">
          <section className="howitworks-components__intro">
            <h3 className="howitworks-components__intro--title">
              Powering Europe’s aviation connectivity
            </h3>
            <p className="howitworks-components__intro--intro" >
              The European Aviation Network (EAN) seamlessly combines S-band satellites and a complementary 4G LTE mobile terrestrial network – the first of its kind worldwide.
            </p>

            <h4 className="howitworks-components__intro--subtitle">
              Components of EAN
            </h4>
            <p className="howitworks-components__intro--copy">
              EAN consists of two main components, the MSS satellite component from Inmarsat which covers Europe and the surrounding oceanic regions, and the complementary ground component of Deutsche Telekom, which provides the required capacity in areas with extensive air traffic.
            </p>
          </section>

          <section className="howitworks-components__annotations">
            <div className="annotations-row">
              <div className="howitworks-components__annotations--satellite">
                <h4>MSS satellite component</h4>
                <ol>
                  <li>
                    The satellite access station serves as a gateway towards the satellite and connects the feeder links to the core network.
                  </li>
                  <li>
                    Inmarsat S-band satellite, a state-of the-art and custom-designed platform provides multi-beam pan-European coverage.
                  </li>
                  <li>
                    Satellite terminal installed in the aircraft that communicates with the satellite.
                  </li>
                </ol>
              </div>
              <div className="howitworks-components__annotations--ground">
                <h4>Complementary ground component</h4>
                <ol>
                  <li>
                    The CGC terminal system on board of the aircraft that communicates with the terrestrial base stations.
                  </li>
                  <li>
                    Terrestrial base stations located throughout Europe.
                  </li>
                  <li>
                    Evolved Packet Core (Core Network), the place where all the LTE traffic is converged.
                  </li>
                </ol>
              </div>
            </div>

            <div className="annotations-row">
            
              <div className="howitworks-components__annotations--meetme">
                <h4>Meet-Me-Point</h4>
                <ol>
                  <li>
                    The Inmarsat Meet-Me-Point aggregates all traffic streams, routes it to the ISP, to airline data centres or wherever required. It also contains the traffic shaping and the reporting functions.
                  </li>
                </ol>
              </div>
              <div className="howitworks-components__annotations--meetme howitworks-components__annotations--meetme2">
                <h4>&nbsp;</h4>
                <ol>
                  <li>
                    The ISP Platform of Deutsche Telekom enables authentication, authorisation and accounting of the internet service and its users.
                  </li>
                </ol>
              </div>
            </div>

          </section>

         
        </article>

        <article id="ean-aircraft-components" className="howitworks-aircraft-components">

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
                  Quick turn repairs minimize opportunity costs (aircraft back in service more quickly).
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
                  Less downtime improves customer perception and experience.
                </p>
              </div>
              {/* 5 */}
              <div className="hac-benefits__item">
                <img src="./img/hac-benefits5.png" alt="High availability requires fewer LRUs to support, EAN LRUs are smaller and lighter vs. Satcom solutions." />
                <p>
                  High availability requires fewer LRUs to support.
                </p>
              </div>
              {/* 6 */}
              <div className="hac-benefits__item">
                <img src="./img/hac-benefits6.png" alt="LRUs are smaller, lighter and easier to access, fewer personnel, less equipment and less time required vs. Satcom solutions." />
                <p>
                  Fits on all regional airframes.
                </p>
              </div>
            </div>
          </section>

        </article>


        <article id="coverage-map" className="howitworks-coverage">
          <h3>
            EAN Coverage Map
          </h3>
          <p>
            Placeholder, Cell coverage will be optimised with varying cell sizes up to a 150km radius depending on capacity needs per area. Flexibility to provide a wider MSS coverage.
          </p>

        </article>


      </main>

    )
  }
}
