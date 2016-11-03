import React from 'react';
import SkyLight from 'react-skylight';


export default class MediaKit extends React.Component {
  constructor( props ) {
    super( props );
  }


  openVideo( ref, e ) {
    e.preventDefault();
    console.log('open', ref, e);
    ref.show()
  }

  render() {

    var videoDialogStyles = {
      backgroundColor: '#000000',
      color: '#ffffff',
      width: '100%',
      textAlign: 'center',
      marginLeft: '-50%',
      padding: '20px 0', 
    }
    var telekomVideoDialogStyles = {
      backgroundColor: '#000000',
      color: '#ffffff',
    }

    return(
      <div>
        <section id="media-kit" className="newsroom-media">
          <h2 className="newsroom-media__title">
            Media Kit
          </h2>
        
          {/* ROW 1 */}
          <div className="mediakit__row">
            {/* ITEM 1  */}
            <div className="mediakit__item">
              <a href="/InmarsatALL-EuroSpecific.pdf" className="mediakit__item--link" target="_blank">
                <h3 className="mediakit__item--title">
                  Product Infosheet
                </h3>
                <img src="./img/icon-big-pdf.svg" alt="Product Infosheet" />
              </a>
            </div>
            {/* ITEM 2 */}
            <div className="mediakit__item">
              <a href="#" onClick={(e) => this.openVideo( this.refs.vid1, e )} className="mediakit__item--link">
                <h3 className="mediakit__item--title">
                  Experts explanation of the European Aviation Network
                </h3>
                <img src="./img/icon-big-video.svg" alt="Experts explanation of the European Aviation Network" />
              </a>
            </div>
            {/* ITEM 3 */}
            <div className="mediakit__item">
              <a href="#" onClick={(e) => this.openVideo(this.refs.vid2, e)} className="mediakit__item--link">
                <h3 className="mediakit__item--title">
                  Fast Internet access on European flights
                </h3>
                <img src="./img/icon-big-video.svg" alt="Fast Internet access on European flights" />
              </a>
            </div>
          </div>
        
          {/* ROW 2 */}
          <div className="mediakit__row">
            {/* ITEM 4  */}
            <div className="mediakit__item">
              <a href="#" onClick={(e) => this.openVideo(this.refs.vid3, e)} className="mediakit__item--link">
                <h3 className="mediakit__item--title">
                  First site installation for EAN in the UK
                </h3>
                <img src="./img/icon-big-video.svg" alt="First site installation for EAN in the UK" />
              </a>
        
            </div>
            {/* ITEM 5 */}
            <div className="mediakit__item">
              <a href="#" onClick={(e) => this.openVideo( this.refs.vid4, e)} className="mediakit__item--link">
                <h3 className="mediakit__item--title">
                  High-speed broadband network for European airlines launched
                </h3>
                <img src="./img/icon-big-video.svg" alt="High-speed broadband network for European airlines launched" />
              </a>
            </div>
            {/* ITEM 6 */}
            <div className="mediakit__item">
            </div>
        
          </div>
        
        
        
        </section>


        <SkyLight 
          hideOnOverlayClicked 
          dialogStyles={telekomVideoDialogStyles} 
          ref="vid1">
          <iframe width="100%" height="100%" src="http://tv.telekom.com/index.php/lang/en_US/video/10392/aviation-network" frameBorder="0" scrolling="no" allowFullScreen></iframe>
        </SkyLight>

        <SkyLight 
          hideOnOverlayClicked 
          dialogStyles={telekomVideoDialogStyles} 
          ref="vid2">
          <iframe width="100%" height="100%" src="http://tv.telekom.com/index.php/lang/en_US/video/10357/internet-access" frameBorder="0" scrolling="no" allowFullScreen></iframe>
        </SkyLight>

        <SkyLight 
          hideOnOverlayClicked 
          dialogStyles={videoDialogStyles} 
          ref="vid3">
          <iframe width="100%" height="100%" src="//embed.wirewax.com/8040845/" frameBorder="0" scrolling="no" allowFullScreen></iframe>
        </SkyLight>

        <SkyLight 
          hideOnOverlayClicked 
          dialogStyles={videoDialogStyles} 
          ref="vid4">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/uxUk9u_Ewws" frameBorder="0" allowFullScreen></iframe>
        </SkyLight>


      </div>
    
    )
  }
}
