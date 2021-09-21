import React, { useEffect } from "react";
import MenuDivNonVeg from "./MenuDivNonVeg";
import MenuDivVeg from "./MenuDivVeg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useDispatch } from "react-redux";
import { navTrue} from "../redux/actions/index";

const Menu = () => {
    useEffect(()=>{
        Aos.init({duration: 1000})
      }, []);

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(navTrue());
    }, []);

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