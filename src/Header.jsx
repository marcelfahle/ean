import React from 'react';
import Link from 'react-router/Link'


export default class Header extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      isMenu:false 
    }

    this.toggleMenu = this.toggleMenu.bind( this );
  }

  componentWillReceiveProps( nextProps ) {
    this.closeMenu();
  }

  toggleMenu( e ) {
    e.preventDefault();
    this.setState( { isMenu: !this.state.isMenu } );
  }

  closeMenu() {
    this.setState( { isMenu: false } );
  }


  render() {
    return(
      <header className={(this.state.isMenu)? 'site-header menu' : 'site-header'} >

        <nav id="main-menu">
          <img src="./img/co-branding.png" className="main-menu__branding" alt="Inmarsat / Deutsche Telekom"/>
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
            <li className="main-menu__item"><Link to="/">Home</Link></li>
            <li className="main-menu__item"><Link to="/benefits">Benefits</Link></li>
            <li className="main-menu__item"><Link to="/how-it-works">How it works</Link></li>
          </ul>
        </nav>

        <div className="content-wrapper">
          <p className="site-header__logos">
            <img src="./img/logo-inmarsat.png" className="site-header__logos--inmarsat" alt="inmarsat - The mobile satellite company" />
            <img src="./img/logo-telekom.png" className="site-header__logos--telekom" alt="Deutsche Telekom AG" />
          </p>
          
          <h1>European Aviation Network</h1>
          
          <nav className="site-header__nav">
            <ul>
              <li>
                <a href="#" 
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
