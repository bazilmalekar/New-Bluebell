import React, {useEffect} from "react";
import Aos from "aos";

const Header = () => {
    useEffect(()=>{
        Aos.init({duration: 1000})
      }, []);
    return (
        <div>
        <header>
            <div className="header-text" id="header">
            <div data-aos="slide-down">
            <h1>New BlueBell</h1>
            <h4>Family Restaurant & Event Place</h4>
            </div>
            </div>
        </header>
        </div>
    );
}

export default Header;