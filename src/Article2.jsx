import React from 'react';

export default class Article2 extends React.Component {
  constructor( props ) {
    super ( props );
  }

  render() {
    return(
      <main>
        <article className="article">

          <p className="article__date">September 22, 2016</p>

          <h2 className="article__title">European Aviation Network – Installation of the first LTE antennas in the UK</h2>

            <figure>
              <img src="./img/a02i1.jpg" alt="European Aviation Network – Installation of the first LTE antennas in the UK" />
              <figcaption>Our engineers at work installing the first EAN antennas under a perfectly blue sky...soon airplanes like the one above will fly across Europe with LTE aboard.</figcaption>
            </figure>

          <p>
            The European Aviation Network makes further progress: The first LTE antennas are now in place in Hampshire in the South of England. EAN is the world’s first combined high-speed network for the airspace above Europe. Deutsche Telekom leads the project jointly with Inmarsat, the industry leader and pioneer of mobile satellite communications. Two strong partners working together to enable high-speed internet access on board as the EAN seamlessly combines satellite connectivity from a new Inmarsat S-band satellite with an LTE-based ground network developed and run by Deutsche Telekom. 
          </p>
          <p>
            The EAN ground network will consist of approximately 300 sites across Europe, where the special antennas will be installed. We will use already existing locations and will be working with current partners wherever possible. In England, for example, independent infrastructure provider Wireless Infrastructure Group provides access to its towers and T-Systems UK make significant contributions to that work. By mid-2017, passengers will be able to enjoy high-speed internet for work or entertainment, using apps, reading e-mails, or playing online games. 
          </p>
          <p>
            The foundation stone is now laid: The first three antennas of the first site of this innovative solution are installed, and work will continue in the UK and elsewhere in Europe. First visual impressions of the installation work for the EAN ground network can be found in our slideshow and also in our video.
          </p>



        </article>
      </main>
    )
  }
}
