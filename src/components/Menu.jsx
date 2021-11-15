import React, { useEffect } from "react";
import Apetizers from "./Apetizers";
import SpecialMocktail from "./SpecialMocktail";
import VegSoup from "./VegSoup";
import NonVegSoup from "./NonVegSoup";
import VegStarters from "./VegStarters";
import EggStarters from "./EggStarters";
import NonVegStarters from "./NonVegStarters";
import FishItems from "./FishItems";
import VegTandooriStarters from "./VegTandooriStarters";
import NonVegTandooriStarters from "./NonVegTandooriStarters";
import Noodles from "./Noodles";
import Sizzlers from "./Sizzlers";
import VegMainCourse from "./VegMainCourse";
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

            <div className="apetizers"></div>
            <div data-aos="fade-up">
                <Apetizers />
            </div>

            <div className="special_mocktail"></div>
            <div data-aos="fade-up">
                <SpecialMocktail />
            </div>

            <div className="veg_soup"></div>
            <div data-aos="fade-up">
                <VegSoup />
            </div>

            <div className="chicken_soup"></div>
            <div data-aos="fade-up">
                <NonVegSoup />
            </div>

            <div className="veg_starters"></div>
            <div data-aos="fade-up">
                <VegStarters />
            </div>

            <div className="egg_starters"></div>
            <div data-aos="fade-up">
                <EggStarters />
            </div>

            <div className="non_veg_starters"></div>
            <div data-aos="fade-up">
                <NonVegStarters />
            </div>

            <div className="fish_items"></div>
            <div data-aos="fade-up">
                <FishItems />
            </div>

            <div className="veg_tandoori"></div>
            <div data-aos="fade-up">
                <VegTandooriStarters />
            </div>

            <div className="non_veg_tandoori"></div>
            <div data-aos="fade-up">
                <NonVegTandooriStarters />
            </div>

            <div className="noodles"></div>
            <div data-aos="fade-up">
                <Noodles />
            </div>

            <div className="sizzlers"></div>
            <div data-aos="fade-up">
                <Sizzlers />
            </div>

            <div className="veg_main_course"></div>
            <div data-aos="fade-up">
                <VegMainCourse />
            </div>

        </div>
    );
}

export default Menu;