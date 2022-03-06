import React, {useEffect} from "react";
import { SRLWrapper } from "simple-react-lightbox";
import Aos from "aos";
import "aos/dist/aos.css";
import { useDispatch } from "react-redux";
import { navTrue} from "../redux/actions/index";
import {Helmet} from "react-helmet";

const Gallery = () => {
    useEffect(()=>{
        Aos.init({duration: 1000});
      }, []);

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(navTrue());
    }, []);
    return (
        <>
         <div className="row m-0 p-0" id="gallery" >
            <Helmet>
                <meta charSet="utf-8" />
                <title>New BlueBell: Gallery</title>                    
            </Helmet>
            <div className="col-11 mx-auto restaurant_gallery">
                <div data-aos="fade-up" className="restaurent-section">
                    <h1>Restaurant</h1>
                    <SRLWrapper>
                    <a href="/images/gallery/restaurent/g1.jpg" data-lightbox="mygallery"><img className="testimage" src="/images/gallery/restaurent/g1.jpg" alt="Restaurant pics"></img></a>
                    <a href="images/gallery/restaurent/g2.jpg" data-lightbox="mygallery"><img className="testimage" src="/images/gallery/restaurent/g2.jpg" alt="Restaurant pics"></img></a>
                    <a href="images/gallery/restaurent/g3.jpg" data-lightbox="mygallery"><img className="testimage" src="/images/gallery/restaurent/g3.jpg" alt="Restaurant pics"></img></a>
                    <a href="images/gallery/restaurent/g4.jpg" data-lightbox="mygallery"><img className="testimage" src="/images/gallery/restaurent/g4.jpg" alt="Restaurant pics"></img></a>
                    <a href="images/gallery/restaurent/g5.jpg" data-lightbox="mygallery"><img className="testimage" src="/images/gallery/restaurent/g5.jpg" alt="Restaurant pics"></img></a>
                    <a href="images/gallery/restaurent/g6.jpg" data-lightbox="mygallery"><img className="testimage" src="/images/gallery/restaurent/g6.jpg" alt="Restaurant pics"></img></a>
                    <a href="images/gallery/restaurent/g7.jpg" data-lightbox="mygallery"><img className="testimage" src="/images/gallery/restaurent/g7.jpg" alt="Restaurant pics"></img></a>
                    <a href="images/gallery/restaurent/g8.jpg" data-lightbox="mygallery"><img className="testimage" src="/images/gallery/restaurent/g8.jpg" alt="Restaurant pics"></img></a>
                    <a href="images/gallery/restaurent/g9.jpg" data-lightbox="mygallery"><img className="testimage" src="/images/gallery/restaurent/g9.jpg" alt="Restaurant pics"></img></a>
                    <a href="images/gallery/restaurent/g10.jpg" data-lightbox="mygallery"><img className="testimage" src="/images/gallery/restaurent/g10.jpg" alt="Restaurant pics"></img></a>
                    </SRLWrapper>
                </div>

                <div data-aos="fade-up" className="event-section">
                    <h1>Event Place</h1>
                    <SRLWrapper>
                    <a href="/images/gallery/event_place/e1.jpg" data-lightbox="mygallery"><img className="testimage" src="/images/gallery/event_place/e1.jpg" alt="Event Place"></img></a> 
                    <a href="images/gallery/event_place/e2.jpg" data-lightbox="mygallery"><img className="testimage" src="/images/gallery/event_place/e2.jpg" alt="Event Place"></img></a>
                    <a href="images/gallery/event_place/e3.jpg" data-lightbox="mygallery"><img className="testimage" src="/images/gallery/event_place/e3.jpg" alt="Event Place"></img></a>
                    <a href="images/gallery/event_place/e4.jpg" data-lightbox="mygallery"><img className="testimage" src="/images/gallery/event_place/e4.jpg" alt="Event Place"></img></a>
                    <a href="images/gallery/event_place/e5.jpg" data-lightbox="mygallery"><img className="testimage" src="/images/gallery/event_place/e5.jpg" alt="Event Place"></img></a>
                    <a href="images/gallery/event_place/e6.jpg" data-lightbox="mygallery"><img className="testimage" src="/images/gallery/event_place/e6.jpg" alt="Event Place"></img></a>
                    <a href="images/gallery/event_place/e7.jpg" data-lightbox="mygallery"><img className="testimage" src="/images/gallery/event_place/e7.jpg" alt="Event Place"></img></a>
                    <a href="images/gallery/event_place/e8.jpg" data-lightbox="mygallery"><img className="testimage" src="/images/gallery/event_place/e8.jpg" alt="Event Place"></img></a>
                    <a href="images/gallery/event_place/e9.jpg" data-lightbox="mygallery"><img className="testimage" src="/images/gallery/event_place/e9.jpg" alt="Event Place"></img></a>
                    <a href="images/gallery/event_place/e10.jpg" data-lightbox="mygallery"><img className="testimage" src="/images/gallery/event_place/e10.jpg" alt="Event Place"></img></a>                   
                    </SRLWrapper>
                </div>

            </div>
         </div>
        </>
    );
}

export default Gallery;