import React from 'react'
import { render } from 'react-dom';

import { BrowserRouter, Match, Miss, Link } from 'react-router';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Home from './Home.jsx';
import Benefits from './Benefits.jsx';
import HowItWorks from './HowItWorks.jsx';
import Newsroom from './Newsroom.jsx';

import './styles/main.scss';


export default class App extends React.Component {
  constructor( props ) {
    super( props );
  }


  render() {

    return(
      <BrowserRouter>
        <div className="site-wrap">

          <Header />

          <Match exactly pattern="/" component={ Benefits }/>
          <Match pattern="/benefits" component={Benefits} />
          <Match pattern="/how-it-works" component={HowItWorks} />
          <Match pattern="/newsroom" component={ Newsroom } />

          <Footer />

        </div>
      </BrowserRouter>
    )
  }
}






render(<App/>, document.querySelector('#root'));


