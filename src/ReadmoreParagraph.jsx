import React from 'react';

export default class ReadmoreParagraph extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      showCopy: false
    }
    this.showCopy = this.showCopy.bind( this );
  }

  showCopy( e ) {
    e.preventDefault();
    this.setState( { showCopy : true} );
  }

  markup(html) {
    return {__html: html};
  }

  render() {
    return( 
      <div className="partner__readmore--wrapper">
        <h4 className="partner__intro">{ this.props.intro }</h4>

        <p className={ (this.state.showCopy)? "partner__copy open" : "partner__copy" } dangerouslySetInnerHTML={ this.markup(this.props.copy) }></p>
        <p className="partner__readmore">
          <a className="readmore" href="#" onClick={ this.showCopy }>
            <img src="./img/bullet-down.png" alt="Read more"/><br/>
            Read more
          </a>
        </p>
        <p className="partner__visit">
          <a href={this.props.linkURL} className="button button__big button--none" target="_blank">{this.props.linkText}</a>
        </p>
      </div>

    )
  }
}
