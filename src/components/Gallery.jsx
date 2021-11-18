import React, {useEffect} from "react";
import { SRLWrapper } from "simple-react-lightbox";
import Aos from "aos";
import "aos/dist/aos.css";
import { useDispatch } from "react-redux";
import { navTrue} from "../redux/actions/index";

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
            <div className="col-11 mx-auto restaurant_gallery">
                <div data-aos="fade-up" className="restaurent-section">
                    <h1>Restaurant</h1>
                    <SRLWrapper>
                    <a href="https://bazilmalekar.github.io/New-Bluebell/images/gallery/image1.jpg" data-lightbox="mygallery"><img className="testimage" src="https://bazilmalekar.github.io/New-Bluebell/images/gallery/image1.jpg" alt="Restaurant pics"></img></a>
                    <a href="https://bazilmalekar.github.io/New-Bluebell/images/gallery/image1.jpg" data-lightbox="mygallery"><img className="testimage" src="https://bazilmalekar.github.io/New-Bluebell/images/gallery/image1.jpg" alt="Restaurant pics"></img></a>
                    <a href="https://bazilmalekar.github.io/New-Bluebell/images/gallery/image1.jpg" data-lightbox="mygallery"><img className="testimage" src="https://bazilmalekar.github.io/New-Bluebell/images/gallery/image1.jpg" alt="Restaurant pics"></img></a>
                    <a href="https://bazilmalekar.github.io/New-Bluebell/images/gallery/image1.jpg" data-lightbox="mygallery"><img className="testimage" src="https://bazilmalekar.github.io/New-Bluebell/images/gallery/image1.jpg" alt="Restaurant pics"></img></a>
                    <a href="https://bazilmalekar.github.io/New-Bluebell/images/gallery/image1.jpg" data-lightbox="mygallery"><img className="testimage" src="https://bazilmalekar.github.io/New-Bluebell/images/gallery/image1.jpg" alt="Restaurant pics"></img></a>
                    <a href="https://bazilmalekar.github.io/New-Bluebell/images/gallery/image1.jpg" data-lightbox="mygallery"><img className="testimage" src="https://bazilmalekar.github.io/New-Bluebell/images/gallery/image1.jpg" alt="Restaurant pics"></img></a>
                    <a href="https://bazilmalekar.github.io/New-Bluebell/images/gallery/image1.jpg" data-lightbox="mygallery"><img className="testimage" src="https://bazilmalekar.github.io/New-Bluebell/images/gallery/image1.jpg" alt="Restaurant pics"></img></a>
                    <a href="https://bazilmalekar.github.io/New-Bluebell/images/gallery/image1.jpg" data-lightbox="mygallery"><img className="testimage" src="https://bazilmalekar.github.io/New-Bluebell/images/gallery/image1.jpg" alt="Restaurant pics"></img></a>
                    <a href="https://bazilmalekar.github.io/New-Bluebell/images/gallery/image1.jpg" data-lightbox="mygallery"><img className="testimage" src="https://bazilmalekar.github.io/New-Bluebell/images/gallery/image1.jpg" alt="Restaurant pics"></img></a>
                    <a href="https://bazilmalekar.github.io/New-Bluebell/images/gallery/image1.jpg" data-lightbox="mygallery"><img className="testimage" src="https://bazilmalekar.github.io/New-Bluebell/images/gallery/image1.jpg" alt="Restaurant pics"></img></a>
                    </SRLWrapper>
                </div>

                <div data-aos="fade-up" className="event-section">
                    <h1>Event Place</h1>
                    <SRLWrapper>
                    <a href="https://bazilmalekar.github.io/New-Bluebell/images/gallery/image1.jpg" data-lightbox="mygallery"><img className="testimage" src="https://bazilmalekar.github.io/New-Bluebell/images/gallery/image1.jpg" alt="Event Place"></img></a>
                    <a href="https://bazilmalekar.github.io/New-Bluebell/images/gallery/image1.jpg" data-lightbox="mygallery"><img className="testimage" src="https://bazilmalekar.github.io/New-Bluebell/images/gallery/image1.jpg" alt="Event Place"></img></a>
                    <a href="https://bazilmalekar.github.io/New-Bluebell/images/gallery/image1.jpg" data-lightbox="mygallery"><img className="testimage" src="https://bazilmalekar.github.io/New-Bluebell/images/gallery/image1.jpg" alt="Event Place"></img></a>
                    <a href="https://bazilmalekar.github.io/New-Bluebell/images/gallery/image1.jpg" data-lightbox="mygallery"><img className="testimage" src="https://bazilmalekar.github.io/New-Bluebell/images/gallery/image1.jpg" alt="Event Place"></img></a>
                    <a href="https://bazilmalekar.github.io/New-Bluebell/images/gallery/image1.jpg" data-lightbox="mygallery"><img className="testimage" src="https://bazilmalekar.github.io/New-Bluebell/images/gallery/image1.jpg" alt="Event Place"></img></a>
                    <a href="https://bazilmalekar.github.io/New-Bluebell/images/gallery/image1.jpg" data-lightbox="mygallery"><img className="testimage" src="https://bazilmalekar.github.io/New-Bluebell/images/gallery/image1.jpg" alt="Event Place"></img></a>
                    <a href="https://bazilmalekar.github.io/New-Bluebell/images/gallery/image1.jpg" data-lightbox="mygallery"><img className="testimage" src="https://bazilmalekar.github.io/New-Bluebell/images/gallery/image1.jpg" alt="Event Place"></img></a>
                    <a href="https://bazilmalekar.github.io/New-Bluebell/images/gallery/image1.jpg" data-lightbox="mygallery"><img className="testimage" src="https://bazilmalekar.github.io/New-Bluebell/images/gallery/image1.jpg" alt="Event Place"></img></a>
                    <a href="https://bazilmalekar.github.io/New-Bluebell/images/gallery/image1.jpg" data-lightbox="mygallery"><img className="testimage" src="https://bazilmalekar.github.io/New-Bluebell/images/gallery/image1.jpg" alt="Event Place"></img></a>
                    <a href="https://bazilmalekar.github.io/New-Bluebell/images/gallery/image1.jpg" data-lightbox="mygallery"><img className="testimage" src="https://bazilmalekar.github.io/New-Bluebell/images/gallery/image1.jpg" alt="Event Place"></img></a>
                    </SRLWrapper>
                </div>

            </div>
         </div>
        </>
    );
}

export default Gallery;