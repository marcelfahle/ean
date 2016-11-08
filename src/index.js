import React from 'react'
import { render } from 'react-dom';

import { Match, Miss, Link } from 'react-router';
import Router from 'react-router/BrowserRouter'

import './styles/main.scss';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Home from './Home.jsx';
import Benefits from './Benefits.jsx';
import HowItWorks from './HowItWorks.jsx';
import Innovation from './Innovation.jsx';
import Newsroom from './Newsroom.jsx';

import Article from './Article.jsx';
import Article2 from './Article2.jsx';
import Article3 from './Article3.jsx';
import Article4 from './Article4.jsx';
import Article5 from './Article5.jsx';
import Article6 from './Article6.jsx';
import Article7 from './Article7.jsx';
import Article8 from './Article8.jsx';
import Article2016Oct from './Article2016Oct.jsx';
import Article2016Nov from './Article2016Nov.jsx';

import classNames from 'classnames';


import TransitionGroup from 'react-addons-transition-group';
import Page from './Page';



var loc = false;

var isSticky = false;


export default class App extends React.Component {
  constructor( props ) {
    super( props );


    this.toggleMenu = this.toggleMenu.bind( this );
    this.closeMenu = this.closeMenu.bind( this );
    this.setHeaderStickiness = this.setHeaderStickiness.bind( this );

    this.state = {
      isMenu: false,
      isHeaderSticky: false
    }
  }

  componentDidMount() {
		//var didScroll = false;

		//window.onscroll = checkScrollPosition;

		//function checkScrollPosition() {
		//		didScroll = true;
		//}

		//setInterval(() => {
		//		if(didScroll) {
		//			didScroll = false;
    //      console.log('sticky check', window.pageYOffset);
		//			if(window.pageYOffset > 100) {
    //        console.log('set sticky');
    //        this.setHeaderStickiness( true );
    //      } else {

    //        console.log('set UNsticky');
    //        this.setHeaderStickiness( false );
    //      }

		//		}
		//}, 100);
    
    window.onscroll = () => {
      if(window.pageYOffset > 100) {
        this.setHeaderStickiness( true );
      } else {
        this.setHeaderStickiness( false );
      }
    }


  }




  toggleMenu( e ) {
    this.setState( { isMenu: !this.state.isMenu } );
  }

  closeMenu() {
    this.setState( { isMenu: false } );
  }

  setHeaderStickiness( sticky ) {
    if (sticky !== isSticky) {
      isSticky = sticky;
      const wrap = document.getElementsByClassName('site-wrap')[0];
      wrap.classList.toggle( 'sticky' );
      console.log('ok, action', wrap.classList);

    }

  }

  render() {
    console.log('isSticky', isSticky);
    const wrapperClass = classNames({
      'site-wrap': true,
      'menu': this.state.isMenu,
      'sticky': isSticky
    });


    return(
      <Router history={ history }>
        <div className={wrapperClass} >

          <Header 
            toggleMenu={ this.toggleMenu } 
            closeMenu={ this.closeMenu } 
            isMenu={ this.state.isMenu } 
            />

          <CustomMatch exactly pattern="/" component={ Home }/>
          <CustomMatch pattern="/benefits" component={ Benefits } />
          <CustomMatch pattern="/how-it-works" component={HowItWorks} />
          <CustomMatch pattern="/innovation-and-partnership" component={ Innovation } />
          <CustomMatch exactly pattern="/newsroom" component={ Newsroom } />

          <CustomMatch pattern="/newsroom/apex-expo" component={ Article } />
          <CustomMatch pattern="/newsroom/european-aviation-network-installation-of-the-first-lte-antennas-in-the-uk" component={ Article2 } />
          <CustomMatch pattern="/newsroom/satellite-constructed-on-schedule-for-inmarsats-ground-breaking-european-aviation-network" component={ Article3 } />
          <CustomMatch pattern="/newsroom/inmarsat-selects-thales-to-develop-critical-infrastructure-for-european-aviation-network" component={ Article4 } />
          <CustomMatch pattern="/newsroom/european-aviation-network-on-fast-track-to-takeoff" component={ Article5 } />
          <CustomMatch pattern="/newsroom/new-satellite-access-station-for-european-aviation-network-in-greece" component={ Article6 } />
          <CustomMatch pattern="/newsroom/european-aviation-network-terminal-manufacturer-selected" component={ Article7 } />
          <CustomMatch pattern="/newsroom/deutsche-telekom-and-inmarsat-partner-to-deliver-european-aviation-network" component={ Article8 } />
          <CustomMatch pattern="/newsroom/meet-us-at-the-wireless-global-congress-2016" component={ Article2016Oct } />
          <CustomMatch pattern="/newsroom/european-aviation-network-welcomes-first-airline-customer" component={ Article2016Nov } />

          <Footer />

        </div>
      </Router>
    )
  }
}



class CustomMatch extends React.Component {
  render() {
    return(
      <Match {...this.props} render={(matchProps) => (
        <Page>
          <this.props.component {...matchProps}/>
        </Page>
      )}/>

    )
  }
}




render(<App/>, document.querySelector('#root'));


