import React from 'react';
import './styles/Article.scss';

export default class Article2016Oct extends React.Component {
  constructor( props ) {
    super ( props );
  }

  render() {
    return(
      <main>
        <article className="article">

          <p className="article__date">October 28, 2016</p>

          <h2 className="article__title">Meet us at the Wireless Global Congress, 2016</h2>

          <p className="article__intro">Secure an outstanding user experience through the global deployment of next generation Wireless is the aim of the Wireless Broadband Alliance (WBA) together with its over 130 members.</p>

          <p>
            The future of the converged wireless eco-system will be discussed in thought-leading presentations and panels during its Wireless Global Congress in San Jose, USA.
          </p>

          <p>
            Join our session on November 16th on innovation! We are looking forward to meeting you there!
          </p>


        </article> </main>)
  }
}
