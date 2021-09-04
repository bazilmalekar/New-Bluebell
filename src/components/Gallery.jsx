import React, {useEffect} from "react";
import { SRLWrapper } from "simple-react-lightbox";
import Aos from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
    useEffect(()=>{
        Aos.init({duration: 1000})
      }, []);
    return (
        <div className="custom-container" id="gallery">
        <div className="restaurant_gallery">
        <div data-aos="fade-up" className="restaurent-section">
        <h1>Restaurant</h1>
        <SRLWrapper>
        <a href="/images/gallery/image1.jpg" data-lightbox="mygallery"><img className="testimage" src="/images/gallery/image1.jpg" alt="Restaurant pics"></img></a>
        <a href="/images/gallery/image1.jpg" data-lightbox="mygallery"><img className="testimage" src="/images/gallery/image1.jpg" alt="Restaurant pics"></img></a>
        <a href="/images/gallery/image1.jpg" data-lightbox="mygallery"><img className="testimage" src="/images/gallery/image1.jpg" alt="Restaurant pics"></img></a>
        <a href="/images/gallery/image1.jpg" data-lightbox="mygallery"><img className="testimage" src="/images/gallery/image1.jpg" alt="Restaurant pics"></img></a>
        <a href="/images/gallery/image1.jpg" data-lightbox="mygallery"><img className="testimage" src="/images/gallery/image1.jpg" alt="Restaurant pics"></img></a>
        <a href="/images/gallery/image1.jpg" data-lightbox="mygallery"><img className="testimage" src="/images/gallery/image1.jpg" alt="Restaurant pics"></img></a>
        <a href="/images/gallery/image1.jpg" data-lightbox="mygallery"><img className="testimage" src="/images/gallery/image1.jpg" alt="Restaurant pics"></img></a>
        <a href="/images/gallery/image1.jpg" data-lightbox="mygallery"><img className="testimage" src="/images/gallery/image1.jpg" alt="Restaurant pics"></img></a>
        <a href="/images/gallery/image1.jpg" data-lightbox="mygallery"><img className="testimage" src="/images/gallery/image1.jpg" alt="Restaurant pics"></img></a>
        <a href="/images/gallery/image1.jpg" data-lightbox="mygallery"><img className="testimage" src="/images/gallery/image1.jpg" alt="Restaurant pics"></img></a>
        </SRLWrapper>
        </div>
        <div data-aos="fade-up" className="event-section">
        <h1>Event Place</h1>
        <SRLWrapper>
        <a href="/images/gallery/image1.jpg" data-lightbox="mygallery"><img className="testimage" src="/images/gallery/image1.jpg" alt="Restaurant pics"></img></a>
        <a href="/images/gallery/image1.jpg" data-lightbox="mygallery"><img className="testimage" src="/images/gallery/image1.jpg" alt="Restaurant pics"></img></a>
        <a href="/images/gallery/image1.jpg" data-lightbox="mygallery"><img className="testimage" src="/images/gallery/image1.jpg" alt="Restaurant pics"></img></a>
        <a href="/images/gallery/image1.jpg" data-lightbox="mygallery"><img className="testimage" src="/images/gallery/image1.jpg" alt="Restaurant pics"></img></a>
        <a href="/images/gallery/image1.jpg" data-lightbox="mygallery"><img className="testimage" src="/images/gallery/image1.jpg" alt="Restaurant pics"></img></a>
        <a href="/images/gallery/image1.jpg" data-lightbox="mygallery"><img className="testimage" src="/images/gallery/image1.jpg" alt="Restaurant pics"></img></a>
        <a href="/images/gallery/image1.jpg" data-lightbox="mygallery"><img className="testimage" src="/images/gallery/image1.jpg" alt="Restaurant pics"></img></a>
        <a href="/images/gallery/image1.jpg" data-lightbox="mygallery"><img className="testimage" src="/images/gallery/image1.jpg" alt="Restaurant pics"></img></a>
        <a href="/images/gallery/image1.jpg" data-lightbox="mygallery"><img className="testimage" src="/images/gallery/image1.jpg" alt="Restaurant pics"></img></a>
        <a href="/images/gallery/image1.jpg" data-lightbox="mygallery"><img className="testimage" src="/images/gallery/image1.jpg" alt="Restaurant pics"></img></a>
        </SRLWrapper>
        </div>
        {/*===SAMPLE=== */}
        {/* <div className="overflowtest">
        <img className="testimage1" src="/images/dummy.jpg" alt="Restaurant pics"></img>
        </div> */}
        </div>
        </div>
    );
}

export default Gallery;