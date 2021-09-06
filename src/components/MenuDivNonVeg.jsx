import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import MenuTableNonVeg from "./MenuTableNonVeg";

const MenuDivNonVeg = () => {
    
    return (
        <div className="custom-container">
        <div className="menu-div">
            <h1>This is Menu</h1>
            <MenuTableNonVeg />
        </div>
        </div>
    );
}

export default MenuDivNonVeg;