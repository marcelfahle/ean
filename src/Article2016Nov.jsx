import React from 'react';
import './styles/Article.scss';

export default class Article2016Nov extends React.Component {
  constructor( props ) {
    super ( props );
  }

  render() {
    return(
      <main>
        <article className="article">

          <p className="article__date">November 03, 2016</p>

          <h2 className="article__title">European Aviation Network welcomes first airline customer</h2>

          <p className="article__intro">Deutsche Telekom and its partner Inmarsat are pleased to bring aboard the European Aviation Network’s first airline customer: International Airlines Group (IAG) has confirmed that it will introduce high speed inflight Wi-Fi provided by the European Aviation Network (EAN) across its airlines’ short-haul fleets.</p>

          <figure>
            <img src="./img/bi-161103-ean.jpg" alt="European Aviation Network welcomes first airline customer" />
          </figure>

          <p>
            Up to 341 short-haul aircraft will be fitted with the European Aviation Network’s next generation connectivity services to provide a 4G broadband network, giving customers the internet access they expect on the ground while in the air. These include 132 British Airways, 125 Vueling, 45 Iberia and 39 Aer Lingus A320 family aircraft.  
          </p>

          <p>
            The European Aviation Network seamlessly combines satellite connectivity from a new Inmarsat S-band satellite with an LTE-based ground network developed and run by Deutsche Telekom and is the world’s first combined high-speed network for the airspace above Europe. The EAN ground network will consist of approximately 300 sites across Europe, where special antennas are currently being installed. The service will be available from mid-2017 and offer customers broadband internet access on their own mobile devices for work or entertainment.
          </p>


        </article> </main>)
  }
}
