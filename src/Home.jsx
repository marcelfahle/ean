import React from 'react';
import { Link } from 'react-router';
import { render } from 'react-dom';
import SkyLight from 'react-skylight';

import './styles/Home.scss';


export default class Benefits extends React.Component {
  constructor( props ) {
    super( props );
  }

  openVideo(ref, e) {
    e.preventDefault();
    ref.show();
  }

  render() {
    var videoDialogStyles = {
      backgroundColor: '#000000',
      color: '#ffffff',
      width: '800px',
      height: '434px',
      textAlign: 'center',
      marginLeft: '-400px',
      marginTop: '-217px',
    }
    return(
    
      <main>
        <article className="home-intro">
					<img src="./img/home-intro.png" alt="The European Aviation Network" className="home-intro__hero" />

          <div className="content-wrapper">
            <h2 className="home-intro__title">
              The European Aviation Network
            </h2>
            <p className="home-intro__intro">
              The European Aviation Network (EAN) is the world’s first integrated satellite and complementary LTE-based ground network that will bring unprecedented passenger connectivity to Europe’s aviation industry.
              <br/><br/>
              The new, innovative, and combined LTE-based terrestrial and satellite network of Deutsche Telekom and Inmarsat provides travellers in Europe with the advantage of in-flight, high-speed Internet access while airlines benefit from a cost-efficient, scalable connectivity solution.
            </p>
            <p className="home-intro__actions">

              <a className="button button__big button--video" 
                href="#"
                onClick={(e) => this.openVideo(this.refs.vid, e)}
              >
                <img className="icon" src="./img/icon-video-play.svg" alt="Watch video" />
                Watch video 
              </a>

              <Link className="button button__big button--none" to="/how-it-works">
                Get details of the network
              </Link>
              
            </p>
          
          </div>

        </article>


        <article className="home-teaser-grid">
          <div className="home-teaser-grid__wrapper">

            <Link className="home-teaser home-teaser--feature" to="/newsroom/european-aviation-network-ean-is-airborne">
              <img src="./img/Newskachel_0006@2x.jpg" alt="European Aviation Network welcomes first airline customer" />
              <p className="home-teaser__lower-third">
                <span className="date">
                  November 28, 2016
                </span>
                European Aviation Network (EAN) is airborne!
              </p>
            </Link>


            <Link className="home-teaser" to="/benefits#scalable">
              <p className="home-teaser__full-link">
                Scalable to meet <br/>growing demand
              </p>
            </Link>
          </div>


          <div className="home-teaser-grid__wrapper">
            <Link className="home-teaser" to="/benefits#low-total-cost">
              <p className="home-teaser__full-link">
                Low total cost<br/> of operation
              </p>
            </Link>
            <Link className="home-teaser home-teaser--feature" to="/newsroom/european-aviation-network-welcomes-first-airline-customer">
              <img src="./img/Home_Newskachel_0005.jpg" alt="European Aviation Network welcomes first airline customer" />
              <p className="home-teaser__lower-third">
                <span className="date">
                  November 03, 2016
                </span>
                European Aviation Network welcomes first airline customer
              </p>
            </Link>

          </div>
          <div className="home-teaser-grid__read-more">
            <p className="read-more">
              For further information about the European Aviation Network
            </p>
            <p>
              <Link className="button button__big button--none" to="/newsroom">
                Visit our newsroom
              </Link>
            </p>
          </div>

        </article>

        <SkyLight 
          hideOnOverlayClicked 
          dialogStyles={videoDialogStyles} 
          ref="vid">
          <iframe width="768" height="432" src="https://www.youtube.com/embed/uxUk9u_Ewws" frameBorder="0" allowFullScreen></iframe>
        </SkyLight>


      </main>

    )
  }
}
