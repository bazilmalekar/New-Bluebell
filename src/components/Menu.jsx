import React, { useEffect } from "react";
import MenuDivNonVeg from "./MenuDivNonVeg";
import MenuDivVeg from "./MenuDivVeg";
import Aos from "aos";
import "aos/dist/aos.css";


const Menu = (props) => {
    useEffect(()=>{
        Aos.init({duration: 1000})
      }, []);
    // function callChange() {
    //     changeNav();
    // }

    // useEffect(()=>{
    //     callChange();
    // });
    return (
        <div className="menu-item" id="menu">
        <div className="nonveg"></div>
        <div data-aos="fade-up">
        <MenuDivNonVeg />
        </div>
        <div className="veg"></div>
        <div data-aos="fade-up">
        <MenuDivVeg />
        </div>
        </div>
    );
}

export default Menu;