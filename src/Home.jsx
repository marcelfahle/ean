import React from 'react';
import { Link } from 'react-router';
import { render } from 'react-dom';


export default class Benefits extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
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

              <a className="button button__big button--video" href="https://www.youtube.com/watch?v=uxUk9u_Ewws" target="_blank">
                <img className="icon" src="./img/icon-video-play.svg" alt="Watch video" />
                Watch video 
              </a>

              <Link className="button button__big button--none" to="/how-it-works">
                Get details to the network
              </Link>
              
            </p>
          
          </div>

        </article>


        <article className="home-teaser-grid">
          <div className="home-teaser-grid__wrapper">
            <Link className="home-teaser home-teaser" to="/newsroom/apex-expo">
              <img src="./img/news-1610.png" alt="Meet us at APEX Expo 2016" />
              <p className="home-teaser__lower-third">
                <span className="date">
                  October 24 - 27, 2016
                </span>
                Meet us at APEX Expo 2016
              </p>
            </Link>
            <Link className="home-teaser home-teaser--feature" to="/newsroom/european-aviation-network-installation-of-the-first-lte-antennas-in-the-uk">
              <img src="./img/news-1609.png" alt="EAN – Installation of the first LTE antennas in the UK" />
              <p className="home-teaser__lower-third">
                <span className="date">
                  September 22, 2016
                </span>
                EAN – Installation of the first LTE antennas in the UK
              </p>
            </Link>
          </div>
          <div className="home-teaser-grid__wrapper">
            <Link className="home-teaser" to="/benefits#scalable">
              <p className="home-teaser__full-link">
                Scalable to meet <br/>growing demand
              </p>
            </Link>
            <Link className="home-teaser home-teaser" to="/newsroom/satellite-constructed-on-schedule-for-inmarsats-ground-breaking-european-aviation-network">
              <img src="./img/news-1607.png" alt="Satellite constructed on schedule for Inmarsat’s ‘ground-breaking’ EAN" />
              <p className="home-teaser__lower-third">
                <span className="date">
                  July 12, 2016
                </span>
                Satellite constructed on schedule for Inmarsat’s ‘ground-breaking’ EAN
              </p>
            </Link>
            <Link className="home-teaser" to="/benefits#low-total-cost">
              <p className="home-teaser__full-link">
                Low total cost<br/> of operation
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


      </main>

    )
  }
}
