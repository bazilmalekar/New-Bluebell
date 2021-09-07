import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import MenuTableNonVeg from "./MenuTableNonVeg";

const MenuDivNonVeg = () => {
    
    return (
        <div className="custom-container">
        <div className="menu-div">
            <div className="menu-title">
            <h1>Non-Veg</h1>
            </div>
            <MenuTableNonVeg />
        </div>
        </div>
    );
}

export default MenuDivNonVeg;