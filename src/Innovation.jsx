import React from 'react';
import { Link } from 'react-router';
import ReadmoreParagraph from './ReadmoreParagraph.jsx';

import './styles/Innovation.scss';

import InmarsatMobile from './img/partner-header-inmarsat.png';
import TelekomMobile from './img/partner-header-telekom.png';

export default class Innovation extends React.Component {
  constructor( props ) {
    super ( props );
  }

  render() {
    return(
      <main>
        <div className="innovation">
          <section id="world-leading-innovation-for-europe" className="innovation__intro">
            <img src="./img/innovation-header-mobile.png" className="innovation__intro--header innovation__intro--header-mobile" alt="Innovation & Partnership"/>
            <img src="./img/innovation-header.jpg" className="innovation__intro--header innovation__intro--header-desk" alt="Innovation & Partnership"/>

            <div className="innovation__intro--content">
              
              
              <h2 className="innovation__title">
                For Europe by Europe
              </h2>
              <h3 className="innovation__subtitle">
                European leadership and innovation wins with the<br/>
                European Aviation Network
              </h3>
              
              <p>
                Nowadays, Europeans expect broadband connectivity wherever they are. With the full support of the European Commission, broadband takes to the skies. Passengers welcome the advantages, productivity and connection to their family and friends across Europe. 
              </p>
              <p>
                Satisfying these expectations demands investments in innovation by Inmarsat and Deutsche Telekom have stepped up to deliver the world’s first integrated satellite and terrestrial network –the European Aviation Network (EAN). EAN will provide a true in-flight broadband experience to Europe’s aviation industry and the millions of passengers cut off from reliable broadband access when flying within Europe until now. The Inmarsat S-band satellite component will grant Europe-wide, multi-beam coverage, seamlessly combined with a powerful, ground-based mobile broadband network, covering approximately 300 sites, built and managed by Deutsche Telekom.
              </p>
              <p>
                The cooperation of Inmarsat and Deutsche Telekom with other market-leaders across Europe, including Thales, Nokia, Cobham SATCOM and OTE, on this pioneering development will strengthen Europe’s position as a global technology innovator and support the continued growth of its aviation industry.
              </p>
            </div>

          </section>


          <section id="strong-partners-for-an-innovative-service" className="partner">
            <h2 className="innovation__title">Innovative products need strong partners!</h2>
            <h3 className="innovation__subtitle">Deutsche Telekom and Inmarsat – A sustainable cooperation</h3>

            <img className="partner__header" src="./img/partners.png" alt="Deutsche Telekom and Inmarsat – A sustainable cooperation" />

            <div className="partner__wrapper">
              <div className="partner__col partner__inmarsat">

                <ReadmoreParagraph
                  mobileImage={InmarsatMobile}
                  intro="Over 25 years of aviation experience Provides marketleading satcom solutions to more than 11,500  aircraft worldwide"
                  copy="Inmarsat is the leading provider of global mobile satellite communications services. Since 1979, it has been providing reliable voice and high-speed data communications to governments, enterprises and other organisations, with a range of services that can be used in the air, on land or at sea.<br/><br/>It launched EAN as the world’s first integrated satellite and air-to-ground network dedicated to providing a true in-flight broadband experience for Europe’s aviation industry and for millions of passengers who have been cut-off from fast, reliable and consistent broadband access during their flights.<br/><br/>Inmarsat's S-band satellite for EAN has been custom-designed to provide mobile satellite services (MSS) to aircraft flying over the dense European routes, exploiting Inmarsat’s 30MHz (2 x 15MHz) S-band spectrum allocation in all 28 EU member states, plus Norway and Switzerland.<br/><br/>It will be integrated with a LTE-based ground network covering approximately 300 sites, operated by Inmarsat’s partner Deutsche Telekom. Aircraft will switch automatically between satellite and terrestrial connectivity using an on–board network communicator for optimal service delivery."
                  linkURL="http://inmarsat.com"
                  linkText="Visit Inmarsat"
                />
              
              </div>
              <div className="partner__col partner__telekom">
                <ReadmoreParagraph 
                  mobileImage={TelekomMobile}
                  intro="One of the world’s leading integrated telecommunications companies with around 156 million mobile customers, 29 million landlines and over 18 million broadband lines."
                  copy="With the development of the European Aviation Network, Deutsche Telekom (DT) is the first telecommunications operator to take the advantages of LTE technology to European airspace. The new, powerful, mobile broadband network of about 300 LTE sites will be rolled out across multiple countries in parallel, supported by Deutsche Telekom's national companies and local T-Systems business units. Benefiting from DT’s broad international footprint and many years of experience in international and cross-functional cooperation across the Group, its technology leadership provides the solid foundation for the best customer experience possible."
                  linkURL="http://telekom.com"
                  linkText="Visit Deutsche Telekom"
                />
              

              </div>
            </div>
          </section>


          <section className="more-partners">
            <h2 className="mpartners__title">Further partnerships</h2>   
            <p className="mpartners__subtitle">Our combined assets perfectly meet the broadband connectivity requirements in the crowded European airspace by forming a world-leading connectivity platform.</p>

            
            <div className="more-partners__wrapper">
              
              <div className="more-partners__row">
                <div className="more-partners__logo">
                  <img src="./img/logo-cobham.svg" alt="Cobham"/>
                </div>
                <div className="more-partners__copy">
                  <h4>Designing and producing an advanced Mobile Satellite Services (MSS) terminal for EAN</h4>
                  <p>
                    Cobham SATCOM is designing and producing an advanced Mobile Satellite Services (MSS) terminal for EAN. The compact, lightweight and cost effective terminal will exploit the latest advances in Broadband Global Area Network (BGAN) technology to enable a direct connection between aircraft and Inmarsat’s S-band satellite. Cobham SATCOM is also responsible for updating the Inmarsat BGAN ground infrastructure to accommodate S-band operation as part of its agreement with Inmarsat.
                    <br/><br/>
                    <a href="http://www.cobham.com" target="_blank">www.cobham.com</a>
                  </p>
                </div>
              </div>



              <div className="more-partners__row">
                <div className="more-partners__logo">
                  <img src="./img/logo-nokia.svg" alt="Nokia"/>
                </div>
                <div className="more-partners__copy">
                  <h4>Deploying LTE technology and services partner for the ground network</h4>
                  <p>
                    Nokia is providing the technical equipment for the ground network component of the European Aviation Network (EAN) to Deutsche Telekom. The ground network is based on Nokia´s complete LTE network, using specially adapted radios for Inmarsat´s S-band spectrum, and Nokia´s IP Mobile Core. The company is also providing network operations and field service support for the LTE ground network.
                    <br/><br/>
                    <a href="http://www.nokia.com" target="_blank">www.nokia.com</a>
                  </p>
                </div>
              </div>




              <div className="more-partners__row">
                <div className="more-partners__logo">
                  <img src="./img/logo-ote.svg" alt="OTE"/>
                </div>
                <div className="more-partners__copy">
                  <h4>Operating EAN’s Satellite Access Station</h4>
                  <p>
                    EAN’s Satellite Access Station (SAS) will be located in Nemea, Greece. It will serve as a gateway towards Inmarsat’s S-band satellite and the  Mobile Satellite Services (MSS) terminal. OTE Group, the largest telecommunications provider in the Greek market, and one of the leading telecom groups in Southeastern Europe, will deliver and operate the satellite teleport facilities.
                    <br/><br/>
                    <a href="http://www.cosmote.gr" target="_blank">www.cosmote.gr</a>
                  </p>
                </div>
              </div>


              <div className="more-partners__row">
                <div className="more-partners__logo">
                  <img src="./img/logo-thales.svg" alt="Thales"/>
                </div>
                <div className="more-partners__copy">
                  <h4>Building EAN’s S-band satellite and manufacturing a Complementary Ground Component (CGC) terminal</h4>
                  <p>
                    Thales Alenia Space is building EAN's S-band satellite, a state-of the-art platform, to provide multi-beam pan-European coverage. The satellite is custom-designed to offer innovative mobile satellite services (MSS) to commercial and business airlines flying over the dense European routes, exploiting Inmarsat’s 30MHz (2 x 15MHz) S-band spectrum allocation in all 28 EU member states.
                    <br/><br/>
                    <a href="http://www.thalesgroup.com" target="_blank">www.thalesgroup.com</a>
                  </p>
                </div>
              </div>


            
            </div>




          </section>


        </div>
      </main>
    )
  }
}
