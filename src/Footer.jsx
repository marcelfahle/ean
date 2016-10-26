import React from 'react';


export default class Footer extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return(
      <footer>
        <section className="contact-cta">
          <p>
            Would you like to talk to us?
            <br/>
            We look forward to hearing from you!
          </p>
            
          <a className="button button__big button--pdf" href="mailto:GlobalTechnicalSupport@inmarsat.com">
            <img className="icon" src="./img/icon-contact-us.svg" alt="Contact Us" />
            Contact Us
          </a>
        </section>

        <section className="contact-info">

          <div className="contact-info__details">
            <div className="contact-info__logos">
              <img src="./img/logo-inmarsat.png" className="site-header__logos--inmarsat" alt="inmarsat - The mobile satellite company" />
              <img src="./img/logo-telekom.png" className="site-header__logos--telekom" alt="Deutsche Telekom AG" />
            </div>
            
            <div className="contact-info__inmarsat">
              <strong>Inmarsat Global Ltd</strong>
              <br/><br/>
              Corporate Communications<br/>
              Tel.: +44 (0)207 728 1492<br/>
              E-Mail: <a href="mailto:media@inmarsat.com">media@inmarsat.com</a><br/>
              <br/>
              <a href="http://www.inmarsat.com/">inmarsat.com</a>
            </div>
            
            <div className="contact-info__telekom">
              <strong>Deutsche Telekom AG</strong><br/>
              <br/>
              Corporate Communications<br/>
              Tel.: +49 228 181 - 4949<br/>
              E-Mail: <a href="mailto:media@telekom.de">media@telekom.de</a><br/>
              <br/>
              Further information for the media at:<br/>
              <a href="http://www.telekom.com/media">www.telekom.com/media</a>
            </div>
          </div>
          
          <div className="contact-info__meta">
            <ul className="contact-info__meta-links">
              <li>© Inmarsat plc. & Deutsche Telekom AG</li>
              <li><a href="http://www.inmarsat.com/terms-and-conditions/" target="_blank">Terms & Conditions</a></li>
              <li><a href="http://www.inmarsat.com/privacy-policy/" target="_blank">Privacy</a></li>
              <li><a href="http://www.inmarsat.com/aviation/aviation-connectivity-services/european-aviation-network/">inmarsat.com</a></li>
              <li><a href="http://www.telekom.com/">telekom.com</a></li>
            </ul>
          </div>
        </section>
      
      </footer>

    )
  }   
}
