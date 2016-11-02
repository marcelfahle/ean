import React from 'react';
import './styles/Article.scss';

export default class Article6 extends React.Component {
  constructor( props ) {
    super ( props );
  }

  render() {
    return(
      <main>
        <article className="article">

          <p className="article__date">November 02, 2015</p>

          <h2 className="article__title">New satellite access station for European Aviation Network in Greece</h2>

           <p>
             <a href="http://inmarsat.com" target="_blank">Inmarsat</a> will locate the Satellite Access Station (SAS) for its <a href="http://www.inmarsat.com/european-aviation-network/" target="_blank">European Aviation Network (EAN)</a> high-speed inflight connectivity solution in Greece, under an agreement with OTE, the largest telecommunications provider in Greece and member of the Deutsche Telekom Group.
           </p>

           <p>
             The development of the SAS in Nemea, Peloponnese, will be a key infrastructure milestone for EAN, which was unveiled by Inmarsat last month as the first aviation passenger connectivity solution in Europe to combine an advanced satellite network and LTE-based ground network, the latter of which will be operated by Deutsche Telekom.
           </p>

             <figure>
               <img src="./img/a06i1.jpg" alt="New satellite access station for European Aviation Network in Greece" />
              </figure>


           <p>
             Aircraft will switch automatically between satellite and terrestrial connectivity using an onboard network communicator for optimal service delivery. As a result, airlines will be able to offer reliable, high-speed onboard internet access to passengers across Europe’s high-traffic flight paths, utilising Inmarsat’s 30MHz (2 x 15MHz) S-band spectrum allocation in all 28 EU member states.
           </p>

           <h3>
             SAS gateway
           </h3>
           <p>
             The new SAS at Nemea will serve as a gateway towards Inmarsat’s advanced S-band satellite, which is currently being manufactured by Thales Alenia Space, and a compact, lightweight Mobile Satellite Services (MSS) terminal being produced by Cobham SATCOM.
           </p>

           <p>
             OTE will deliver and operate the satellite teleport facilities on the same site that has also hosted Inmarsat’s Ka-band Global Xpress (GX) satellite access station since 2012.
           </p>

           <p>
             The SAS will contain a 13-metre antenna that provides feeder links to the satellite, a radio frequency sub-system and a radio access network, which will also be provided by Cobham SATCOM using reliable Broadband Global Area Network (BGAN) technology in sync with the MSS terminals.
           </p>

           <h3>
             Important development
           </h3>
           <p>
             Leo Mondale, President of Inmarsat Aviation, said: “The European Aviation Network is an important development for Inmarsat, for the aviation industry, and for Europe.
           </p>

           <p>
             “Our agreement with OTE to develop the satellite access station, and previous announcements with other European partners such as Thales Alenia Space, Deutsche Telekom and Cobham SATCOM, highlight that the various components of this exciting project are coming together.
           </p>

           <p>
             “OTE, as the existing operator of our Global Xpress SAS in Nemea, has already demonstrated its abilities as a successful and efficient supplier for Inmarsat. We are delighted to extend the partnership with our new EAN satellite access station, especially as the weather conditions in Nemea are optimal for high-quality feeder links.
           </p>

           <h3>
             Operational efficiencies
           </h3>
           <p>
             “This is also a cost effective decision, as the investment and operational expenditure will be minimal, and there are many important operational efficiencies of providing both the GX and EAN service from the same site.”
           </p>

           <p>
             Zacharias Piperidis, OTE Group Chief Operating Officer, noted: “With this partnership, which fits perfectly with current EAN cooperation between Inmarsat and DT, the OTE Group shows that besides providing traditional satellite services, it can reliably support the demanding global market of new generation technologies, which require infrastructure and services of the highest standards.
           </p>

           <p>
             “OTE Group’s Satellite Communications Centres in Nemea and Thermopylae have now become the most important ones in the wider region of Europe, Middle East and Africa and can service the most important satellite organisations worldwide.”
           </p>


        </article> </main>)
  }
}
