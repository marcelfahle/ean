import React from 'react';

export default class Article extends React.Component {
  constructor( props ) {
    super ( props );
  }

  render() {
    return(
      <main>
        <article className="article">

          <p className="article__date">September 26, 2016</p>

          <h2 className="article__title">Meet us at APEX EXPO 2016</h2>

          <p className="article__intro">
            If you are heading to APEX EXPO 2016 in Singapore, make sure you visit Inmarsat Aviation on stand 1634 to discover more about our next-generation satellite services for passengers and airlines.
          </p>

          <p>
            The Airline Passenger Association (APEX) represents over 100 airlines and 150 vendors dedicated to improving the inflight passenger experience, and thousands of aviation professionals will descend upon the Marina Bay Sands Convention Center where the latest technologies, products and services will be on display.
          </p>

          <p>
            Inmarsat is the only provider of global, mobile satellite communications services for the entire aircraft, offering complete connectivity solutions from cockpit to cabin for over 11,000 aircraft worldwide.
          </p>


          <h3>Setting new standards</h3>

          <p>
            Find out how we are investing in the new technological innovations of the future now to meet the increasing demand for passenger Wi-Fi on board a flight and setting new standards in aviation safety:
          </p>

          <ul>
            <li>
              <strong>GX for Aviation</strong> – high-speed inflight broadband
                  around the globe will soon be a reality with our Ka-band
                  broadband service, providing passengers with the same Wi-Fi
                  experience in the air as they would expect on the ground.
                  Following an extremely successful system integration <a
                    href="http://www.inmarsat.com/aviation/gxperience"
                    target="_blank"> world test tour</a> with partner Honeywell
                  Aerospace, look out for the launch of our revolutionary new
                  service soon. 
            </li> 
            <li>
              <strong>European Aviation Network (EAN)</strong>– the world’s
              first hybrid satellite and air-to-ground network developed with
              partner Deutsche Telekom, the EAN is set to meet the growing
              demand for connectivity at 35,000 feet over Europe’s busy skies.
            </li>
            <li>
              <strong>SwiftBroadband-Safety </strong>– our new flight deck communications safety service provides global, high-speed, secure IP connectivity for the cockpit. Always-on, always-secure, it offers flight data streaming (Black Box in the Cloud) and new Electronic Flight Bag applications like graphical weather.
            </li>
            <li>
              <strong>Iris </strong>– a European Space Agency partnership utilising Inmarsat’s SwiftBroadband-Safety service for European ATM management, to enable Single European Skies Research (SESAR) programmes, including continual updating of flight plans.
            </li>
          </ul>

          <p>
            <a href="http://www.inmarsat.com/registration/apex-2016" target="_blank">Click here </a>to book a meeting with our Inmarsat Aviation team and see how we’re delivering the complete connected aircraft.
          </p>


        </article> </main>)
  }
}
