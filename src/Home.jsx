import React from 'react';
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
              EAN is the World’s first integrated satellite and complementary LTE-based ground network that will bring unprecedented passenger connectivity to Europe’s aviation industry. 
              <br/><br/>
              The new, innovative, and combined LTE-based terrestrial and satellite network of Inmarsat and Deutsche Telekom provides travelers in Europe with the advantage of in-flight, high-speed Internet access while airlines benefit from a cost-efficient, scalable connectivity solution.
            </p>
            <p className="home-intro__actions">

              <a className="button button__big button--video" href="#">
                <img className="icon" src="./img/icon-video-play.svg" alt="Watch video" />
                Watch video 
              </a>

              <a className="button button__big button--none" href="/benefits">
                Get details to the network
              </a>
              
            </p>
          
          </div>

        </article>


        <article className="home-teaser-grid">
          <div className="home-teaser-grid__wrapper">
            <div className="home-teaser home-teaser--feature">
              <img src="./img/home-teaser-apex.png" alt="26. September 2016 - Visit us at apex EXPO 2016 in Singapore, October 24-27, 2016" />
              <p className="home-teaser__lower-third">
                <span className="date">
                  26. September 2016 
                </span>
                Visit us at apex EXPO 2016 in Singapore, October 24-27, 2016
              </p>
            </div>
            <div className="home-teaser">
              <p className="home-teaser__full-link">
                Scalable to meet<br/> growing demand
              </p>
            </div>
          </div>
          <div className="home-teaser-grid__wrapper">
            <div className="home-teaser">
              <p className="home-teaser__full-link">
                Low total cost<br/> of operation
              </p>
            </div>
            <div className="home-teaser">
              <img src="./img/home-teaser-news2.png" alt="15 September 2016 - Inmarsat announces sponsorship for safety H.E.R.O" />
              <p className="home-teaser__lower-third">
                <span className="date">
                  15 September 2016
                </span>
                Inmarsat announces sponsorship for safety H.E.R.O
              </p>
            </div>
            <div className="home-teaser">
              <img src="./img/home-teaser-news3.png" alt="14 September 2016 - Inmarsat and MCN sign agreement to provide aviation safety services" />
              <p className="home-teaser__lower-third">
                <span className="date">
                  14 September 2016
                </span>
                Inmarsat and MCN sign agreement to provide aviation safety services
              </p>
            </div>

          </div>
          <div className="home-teaser-grid__read-more">
            <p className="read-more">
              For further information about the European Aviation Network
            </p>
            <p>
              <a className="button button__big button--none" href="#">
                Visit our newsroom
              </a>
            </p>
          </div>

        </article>


      </main>

    )
  }
}
