import React from 'react';
import './styles/Article.scss';

export default class Article5 extends React.Component {
  constructor( props ) {
    super ( props );
  }

  render() {
    return(
      <main>
        <article className="article">

          <p className="article__date">February 19, 2016</p>

          <h2 className="article__title">European Aviation Network on Fast Track to Takeoff</h2>

          <ul>
            <li>Development of 300 new LTE antenna sites has begun</li>
            <li>First test flights scheduled in 2016</li>
            <li>Coverage for Germany and Western Europe planned for mid-2017</li>
          </ul>

          <p>
            In September 2015, Deutsche Telekom and Inmarsat announced the launch of the European Aviation Network (EAN) − a technological innovation that will bring unprecedented passenger connectivity to Europe’s aviation industry and its customers by 2018. With the EAN, travelers in Europe will no longer have to stop working, gaming or simply communicating when in the air. It will provide high-speed Internet access in-flight by seamlessly combining satellite connectivity from an Inmarsat S-band satellite with a LTE-based ground network developed and run by Deutsche Telekom.
          </p>

          <p>
            Deutsche Telekom is already forging ahead with the scheduled development and construction of the 300 new LTE sites across Europe. Just four months after the original announcement, the first sites for rollout of the network's LTE component have been identified in the south-west of the United Kingdom. And from here, the project will go from strength to strength: First test flights are now scheduled to initially trial the service before the end of this year.
          </p>

          <p>
            Claudia Nemat, Board Member Europe and Technology, says, "We made a promise to deliver together with our partner Inmarsat the world's first hybrid network dedicated to aviation passenger connectivity in Europe with a customer experience similar to the comfort of high-speed broadband at home. We already started with the preparations for the trials now to deliver upon this ambitious technological challenge."
          </p>

          <p>
            The trials at the end of this year will be the first step in a phased approach to rollout. Step two is a commercial pilot scheduled to start in March 2017, followed by further coverage extensions in Germany and large parts of Western Europe by mid-2017. Full coverage across Europe is then expected by early 2018, when the commercial launch for EAN is planned.
          </p>

              <p>
                "We will roll out our new LTE network across multiple countries in parallel, supported by Deutsche Telekom's national companies and our local T-Systems business units, as we deliver another cutting-edge service to customers in Europe," says Claudia Nemat. "A speedy implementation is important to us and in this regard, we are benefiting from our broad international footprint and many years of experience in international and cross-functional cooperation across the Group."
              </p>

          <p><strong>
            The EAN will be demonstrated at the Mobile World Congress 2016, Deutsche Telekom Stand L20, Hall 3.
          </strong></p>

          <h3>
            About Deutsche Telekom
          </h3>
          <p>
            Deutsche Telekom is one of the world's leading integrated telecommunications companies, with around 151 million mobile customers, 30 million fixed-network lines and more than 17 million broadband lines (as of December 31, 2014). The Group provides fixed-network, mobile communications, Internet and IPTV products and services for consumers, and ICT solutions for business customers and corporate customers. Deutsche Telekom is present in more than 50 countries and has approximately 228,000 employees worldwide. The Group generated revenues of 62.7 billion euros in the 2014 financial year – more than 60 percent of it outside Germany.
          </p>




        </article> </main>)
  }
}
