import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const MainBody = () => {
    useEffect(()=>{
      Aos.init({duration: 2000})
    }, []);
    
    return(
        <>
         <div className="row m-0 p-0">
           <div className="col-9 mx-auto">
             <div className="row pt-5 pb-5">

               <div className="col-lg-6 col-md-12" data-aos="fade-up">
                  <div className="intro_column1">                   
                    <div class="flip-box">
                      <div class="flip-box-inner">
                        <div class="flip-box-front">
                          <img src="https://bazilmalekar.github.io/New-Bluebell/images/landingPage/fl.jpg"></img>
                        </div>
                        <div class="flip-box-back">
                          <img src="https://bazilmalekar.github.io/New-Bluebell/images/landingPage/b1.jpg"></img>
                        </div>
                      </div>
                    </div>
                    <div className="intro_text mt-1">
                      <h1>Family Restaurant</h1>
                      <p>Enjoy best of the local cuisine. Satisfy your snack attack</p>            
                    </div>
                  </div>
               </div>

               <div className="col-lg-6 col-md-12" data-aos="fade-up">
                  <div className="intro_column2">    
                    <div class="flip-box">
                      <div class="flip-box-inner">
                        <div class="flip-box-front">
                          <img src="images/dummy.jpg"></img>
                        </div>
                        <div class="flip-box-back">
                          <img src="images/dummy.jpg"></img>
                        </div>
                      </div>
                    </div>
                    <div className="intro_text mt-1">
                      <h1>Event Place</h1>
                      <p>Create your cheerful memories at our New Bluebell event place</p>
                    </div>
                  </div>
               </div>

             </div>
           </div>
         </div>
        </>
    );
}

export default MainBody;