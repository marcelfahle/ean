import React from 'react';
import Link from 'react-router/Link'
import classNames from 'classnames';


export default class Header extends React.Component {
  constructor( props ) {
    super( props );



    this.toggleMenu = this.toggleMenu.bind( this );
  }




  toggleMenu( e ) {
    e.preventDefault();
    this.props.toggleMenu();
  }



  render() {

    const headerClass = classNames({
      'site-header': true,
      'menu': this.props.isMenu
    });

    return(
      <header className={headerClass} >

        <nav id="main-menu">
          <h1 className="main-menu__title">European Aviation Network</h1>
          <a href="#" 
            onClick={ this.toggleMenu }
            className="main-menu__close-btn main-menu__close-btn--mobile">
            <img src="./img/close-button-white.svg" alt="Close Main Menu" />
          </a>
          <a href="#" 
            onClick={ this.toggleMenu }
            className="main-menu__close-btn main-menu__close-btn--desk">
            <img src="./img/close-button-blue.svg" alt="Close Main Menu" />
          </a>


          <ul className="main-menu__items">

            <li className="main-menu__item">
              <Link onClick={this.props.closeMenu} to="/">
                Home
              </Link>
            </li>
            <li className="main-menu__item">
              <Link onClick={this.props.closeMenu} to="/benefits">
                Benefits
              </Link>
              <ul className="main-menu__submenu">
                <li className="main-menu__subitems">
                  <Link to="/benefits#benefits-of-ean" onClick={this.props.closeMenu}>Benefits of EAN</Link>
                </li>
                <li className="main-menu__subitems">
                  <Link to="/benefits#meeting-passenger-demands" onClick={this.props.closeMenu}>Meeting passenger demand</Link>
                </li>
              </ul>
            </li>
            <li className="main-menu__item">
              <Link onClick={this.props.closeMenu} to="/how-it-works">
                How it works
              </Link>
              <ul className="main-menu__submenu">
                <li className="main-menu__subitems">
                  <Link to="/how-it-works#elements-of-ean" onClick={this.props.closeMenu}>Elements of EAN</Link>
                </li>
                <li className="main-menu__subitems">
                  <Link to="/how-it-works#ean-aircraft-components" onClick={this.props.closeMenu}>EAN aircraft components</Link>
                </li>
                <li className="main-menu__subitems">
                  <Link to="/how-it-works#coverage-map" onClick={this.props.closeMenu}>Coverage Map</Link>
                </li>
              </ul>
            </li>
            <li className="main-menu__item">
              <Link onClick={this.props.closeMenu} to="/innovation-and-partnership">
                Innovation & partnership
              </Link>
              <ul className="main-menu__submenu">
                <li className="main-menu__subitems">
                  <Link to="/innovation-and-partnership#world-leading-innovation-for-europe" onClick={this.props.closeMenu}>World-leading innovation for Europe</Link>
                </li>
                <li className="main-menu__subitems">
                  <Link to="/innovation-and-partnership#strong-partners-for-an-innovative-service" onClick={this.props.closeMenu}>Strong partners for an innovative service</Link>
                </li>
              </ul>
            </li>
            <li className="main-menu__item">
              <Link onClick={this.props.closeMenu} to="/newsroom">
                Newsroom
              </Link>
              <ul className="main-menu__submenu">
                <li className="main-menu__subitems">
                  <Link to="/newsroom" onClick={this.props.closeMenu}>News</Link>
                </li>
                <li className="main-menu__subitems">
                  <Link to="/newsroom#media-kit" onClick={this.props.closeMenu}>Media Kit</Link>
                </li>
              </ul>
            </li>
          </ul>
          <img src="./img/co-branding.png" className="main-menu__branding" alt="Inmarsat / Deutsche Telekom"/>
        </nav>

        <div className="content-wrapper">
          <p className="site-header__logos">
            <Link to="/">
              <img src="./img/logo-inmarsat.png" className="site-header__logos--inmarsat" alt="inmarsat - The mobile satellite company" />
              <img src="./img/logo-telekom.png" className="site-header__logos--telekom" alt="Deutsche Telekom AG" />
            </Link>
          </p>
          
          <h1><Link to="/">European Aviation Network</Link></h1>
          
          <nav className="site-header__nav">
            <ul>
              <li>
                <a href="mailto:GlobalTechnicalSupport@inmarsat.com" 
                  className="button button__inverted button--contact">
                  <img src="./img/icon-contact-us-blue.svg" className="icon" alt="Contact Us" />  
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" 
                  onClick={ this.toggleMenu }
                  className="button button__inverted button--menu">
                  <img src="./img/icon-menu-blue.svg" className="icon" alt="Menu" />  
                  Menu
                </a>
              </li>
            </ul>
            
          </nav>
        </div>

      </header>

    )
  }
}
