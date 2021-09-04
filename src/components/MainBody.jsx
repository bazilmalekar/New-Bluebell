import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const MainBody = () => {
    useEffect(()=>{
      Aos.init({duration: 2000})
    }, []);
    return(
        <div className="custom-container">
        <div className="home-mainbody">
          <div className="row">
            <div data-aos="fade-right" className=" column-1 col-lg-6 col-md-12 col-sm-12">
                <div className="figure">
                <div className="flip-box">
                      <div className="flip-box-inner">
                        <div className="flip-box-front">
                        <img src="/images/dummy.jpg" alt="Reataurent image" />
                        </div>
                        <div className="flip-box-back">
                        <img src="/images/dummy.jpg" alt="Reataurent image" />
                        </div>
                      </div>
                    </div>
                    
                </div>
                <div className="description">
                <h1>What is Lorem Ipsum?</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                </div>
             </div>
             <div data-aos="fade-left" className=" column-1 col-lg-6 col-md-12 col-sm-12">
                <div className="figure">
                <div class="flip-box">
                      <div className="flip-box-inner">
                        <div className="flip-box-front">
                        <img src="/images/dummy.jpg" alt="Reataurent image"/>
                        </div>
                        <div className="flip-box-back">
                        <img src="/images/dummy.jpg" alt="Reataurent image"/>
                        </div>
                      </div>
                    </div>
                    
                </div>
                <div className="description">
                <h1>Why do we use it?</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                </div>
             </div>
            </div>
          </div>      
        </div>
    );
}

export default MainBody;