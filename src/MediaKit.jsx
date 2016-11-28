import React from 'react';
import SkyLight from 'react-skylight';
import Lightbox from 'react-image-lightbox';

const images = [
  './gallery/EAN-Antenna-of-the-terminal-equipment.jpg',
  './gallery/EAN-Antenna-Site-above-Stuttgart.jpg',
  './gallery/EAN-On-board-equipment-in-the-test-lab.jpg',
  './gallery/EAN-on-board-equipment.jpg',
  './gallery/EAN-Radio-heads-of-the-LTE-groundnetwork.jpg',
  './gallery/EAN-Team-working-on-test-flights.jpg',
  './gallery/EAN-Test-Aircraft.jpg',
  './gallery/EAN-Test-Lab-in-Stuttgart.jpg'
];

const titles = [
  'EAN antenna of the terminal equipment mounted on the hull of the aircraft',
  'One of the EAN antenna sites above Stuttgart',
  'EAN On Board Equipment in the Test Lab',
  'EAN On Board Equipment',
  'EAN Radio Heads of the LTE Groundnetwork',
  'EAN Team working on the test flight program',
  'Taking off: EAN Test Aicraft',
  'EAN Test lab in Stuttgart'
];




export default class MediaKit extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }


  openLightboxGallery( e ) {
    e.preventDefault();
    this.setState({isOpen: true});
  }

  openVideo( ref, e ) {
    e.preventDefault();
    //console.log('open', ref, e);
    ref.show()
  }

  render() {

    const videoDialogStyles = {
      backgroundColor: '#000000',
      color: '#ffffff',
      width: '100%',
      textAlign: 'center',
      marginLeft: '-50%',
      padding: '20px 0', 
    }
    const telekomVideoDialogStyles = {
      backgroundColor: '#000000',
      color: '#ffffff',
    }
    const {
      photoIndex,
      isOpen,
    } = this.state;

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
              <a href="#" onClick={(e) => this.openLightboxGallery(e)} className="mediakit__item--link">
                <h3 className="mediakit__item--title">
                  EAN First Testflight
                </h3>
                <img src="./img/icon-big-photo.svg" alt="EAN First Testflight" />
              </a>
            </div>
        
          </div>
        
        
        
        </section>


        <SkyLight 
          hideOnOverlayClicked 
          dialogStyles={telekomVideoDialogStyles} 
          ref="vid1">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/GPzC8J0WIuo" frameBorder="0" scrolling="no" allowFullScreen></iframe>
        </SkyLight>

        <SkyLight 
          hideOnOverlayClicked 
          dialogStyles={videoDialogStyles} 
          ref="vid2">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/pkg9pvEhF0I" frameBorder="0" scrolling="no" allowFullScreen></iframe>
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

        {isOpen &&
          <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}

          onCloseRequest={() => this.setState({ isOpen: false })}
          onMovePrevRequest={() => this.setState({
            photoIndex: (photoIndex + images.length - 1) % images.length,
          })}
          onMoveNextRequest={() => this.setState({
            photoIndex: (photoIndex + 1) % images.length,
          })}
          imageCaption={titles[photoIndex]}
            />
        }


      </div>
    
    )
  }
}
