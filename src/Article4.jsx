import React from 'react';
import './styles/Article.scss';

export default class Article4 extends React.Component {
  constructor( props ) {
    super ( props );
  }
  componentDidMount() {
    console.log('should update');
  }

  render() {
    return(
      <main>
        <article className="article">

          <p className="article__date">February 25, 2016</p>

          <h2 className="article__title">Inmarsat selects Thales to develop critical infrastructure for European Aviation Network</h2>

          <p className="article__intro">
            CGC terminal agreement signed for ground-breaking inflight connectivity solution
          </p>

            <figure>
              <img src="./img/a04i1.jpg" alt="Inmarsat selects Thales to develop critical infrastructure for European Aviation Network" />
            </figure>

          <p>
            Inmarsat has selected Thales to develop and manufacture a Complementary Ground Component (CGC) terminal for its European Aviation Network (EAN) high-speed inflight connectivity solution.
          </p>


          <p>
            The agreement marks a key milestone for EAN, which was unveiled by Inmarsat last year as the first aviation passenger connectivity solution across European airspace to integrate an advanced satellite network and LTE-based ground network, the latter will be operated by Deutsche Telekom.
          </p>

          <p>
            Aircraft will switch automatically between satellite and terrestrial connectivity using an onboard network communicator for optimal service delivery. As a result, airlines will be able to offer reliable, high-speed onboard internet access to passengers across Europe’s high-traffic flight paths, utilising Inmarsat’s 30MHz (2 x 15MHz) S-band spectrum allocation in all 28 EU member states.
          </p>

          <p>
            Thales has already commenced development of the CGC terminal, which will be fitted onto aircraft to provide a crucial link with the LTE-based ground network. Development work is scheduled for completion in March 2017, prior to system trials and formal entry into service in the same year.
          </p>

          <p>
            Leo Mondale, President of Inmarsat Aviation, said: “The development of Inmarsat’s European Aviation Network will continue at full pace this year, bringing airlines and their passengers a step closer to unprecedented levels of inflight connectivity, rivalling the standards that have previously only been available on the ground. Thales Alenia Space expects to complete the production of our S-band satellite for EAN in the second half of 2016, and our other European partners, including Deutsche Telekom, Cobham SATCOM, OTE and now Thales, are also making great progress with other important components in this ambitious project.”
          </p>

          <p>
            Thales’ selection as the CGC terminal developer and manufacturer for EAN is a clear demonstration of its continuing commitment and investment in global communications and connectivity.
          </p>

          <p>
            Peter Hitchcock, VP Avionics of Thales, said: “Thales is one of the only companies with the technical expertise and skills to deliver this new technology for the European Aviation Network. Our extensive experience in civil aviation connectivity combined with our relationships with OEMs and operators makes us one of the industry’s leading innovators. This development will dramatically enhance the passenger experience across Europe.”
          </p>



          <p>
            <strong>Inmarsat</strong><br/>
            Jonathan Sinnatt<br/>
            Director of Corporate Communications<br/>
            <a href="mailto:jonathan.sinnatt@inmarsat.com">jonathan.sinnatt@inmarsat.com/</a><br/>
            +44 (0)20 7728 1935
          </p>

          <p>
            <strong>Inmarsat</strong><br/>
            Robeel Haq<br/>
            PR Manager, Aviation<br/>
            <a href="mailto:robeel.haq@inmarsat.com">robeel.haq@inmarsat.com</a><br/>
            +44 (0)20 7728 1352
          </p>

          <p>
            <strong>Thales</strong><br/>
            Giamie Porcu<br/>
            Media Manager<br/>
            <a href="mailto:giaime.porcu@thalesgroup.com">giaime.porcu@thalesgroup.com</a><br/>
            +33 6 88238479
          </p>



          <h3>
            About Inmarsat
          </h3>

          <p>
            Inmarsat plc is the leading provider of global mobile satellite communications services. Since 1979, Inmarsat has been providing reliable voice and high-speed data communications to governments, enterprises and other organizations, with a range of services that can be used on land, at sea or in the air. Inmarsat employs around 1,600 staff in more than 60 locations around the world, with a presence in the major ports and centres of commerce on every continent. Inmarsat is listed on the London Stock Exchange (LSE:ISAT.L).
          </p>

          <p>
            The Inmarsat press release newsfeed and corporate updates are on <a href="https://twitter.com/inmarsatglobal" target="_blank">@InmarsatGlobal</a>.  
          </p>

          <h3>About Thales</h3>

          <p>
            Thales is a global technology leader for the Aerospace, Transport, Defence and Security markets. With 61,000 employees in 56 countries, Thales reported sales of €13 billion in 2014. With over 20,000 engineers and researchers, Thales has a unique capability to design and deploy equipment, systems and services to meet the most complex security requirements. Its unique international footprint allows it to work closely with its customers all over the world.
          </p>



        </article> </main>)
  }
}
