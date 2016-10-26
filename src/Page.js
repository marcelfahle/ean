import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

import Scroll from 'react-scroll';

const scroll = Scroll.animateScroll;

export default class Page extends Component {
  constructor( props ) {
    super( props );
  }

  componentDidMount() {
    this.scrollToTarget();

  } 

  componentDidUpdate() {
    this.scrollToTarget();
  }


  scrollToTarget() {
    const el = document.getElementById( location.hash.substring(1) );
    if (el) {
      setTimeout( () => {
        scroll.scrollTo( el.offsetTop - 94);
      }, 400);
    } else {
      window.scroll(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}
