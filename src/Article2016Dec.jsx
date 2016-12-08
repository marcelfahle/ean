import React from 'react';
import './styles/Article.scss';

export default class Article2016Dec extends React.Component {
  constructor( props ) {
    super ( props );
  }

  render() {
    return(
      <main>
        <article className="article">

          <p className="article__date">December 08, 2016</p>

          <h2 className="article__title">Inmarsat signs contract to launch European Aviation Network satellite with Arianespace
        </h2>


          <p>
            Inmarsat (LSE:ISAT.L), the world’s leading provider of global mobile satellite communications, has today signed a contract with Arianespace to launch its S-band satellite for the European Aviation Network (EAN) on an Ariane 5 heavy lift launch vehicle.  The EAN payload is part of a ‘condosat’ constructed by Thales Alenia Space, which incorporates a second payload for Hellas-Sat.  The condosat is scheduled to be launched from the Guiana Space Center in Kourou, French Guiana in mid-2017.
          </p>

          <p>
            The condosat was originally scheduled for launch with SpaceX.  However, following the delay in SpaceX’s launch schedule, Inmarsat and Hellas-Sat took the decision to move the condosat to an Arianespace launch.
          </p>

          <p>
            Inmarsat will launch Inmarsat-5 F4, a Global Xpress (GX) satellite, with SpaceX.  This launch is planned for H1 2017 and Inmarsat is looking forward to continuing to work with SpaceX going forward.
          </p>

          <p>
            “We are delighted with flexibility that Arianespace has shown in being able to provide a launch slot that enables us to place our European Aviation Network S-band satellite in orbit by mid-2017,” said Michele Franci, CTO, Inmarsat. “This launch schedule supports the introduction of our ground-breaking integrated satellite and air-to-ground network, developed by Inmarsat and Deutsche Telekom, which will deliver a very high capacity broadband Wi-Fi experience for passengers flying throughout Europe.”
          </p>



        </article> </main>)
  }
}
