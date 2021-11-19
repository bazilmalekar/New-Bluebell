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
import EggMainCourse from "./EggMainCourse";
import ChickenMainCourse from "./ChickenMainCourse";
import FruitJuice from "./FruitJuice";
import ColdDrinks from "./ColdDrinks";
import IceCream from "./IceCream";
import Aos from "aos";
import "aos/dist/aos.css";
import { useDispatch } from "react-redux";
import { navTrue} from "../redux/actions/index";
import {Helmet} from "react-helmet";

const Menu = () => {
    useEffect(()=>{
        Aos.init({duration: 1000})
      }, []);

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(navTrue());
    }, []);

    return (
        <>                 
            <div className="menu-item" id="menu">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>New BlueBell: Menu</title>                    
                </Helmet>

                <div className="apetizers" id="Apetizers"></div>
                <div data-aos="fade-up">
                    <Apetizers />
                </div>

                <div className="special_mocktail" id="SpecialMocktail"></div>
                <div data-aos="fade-up">
                    <SpecialMocktail />
                </div>

                <div className="veg_soup" id="VegSoup"></div>
                <div data-aos="fade-up">
                    <VegSoup />
                </div>

                <div className="chicken_soup" id="NonVegSoup"></div>
                <div data-aos="fade-up">
                    <NonVegSoup />
                </div>

                <div className="veg_starters" id="VegStarters"></div>
                <div data-aos="fade-up">
                    <VegStarters />
                </div>

                <div className="egg_starters" id="EggStarters"></div>
                <div data-aos="fade-up">
                    <EggStarters />
                </div>

                <div className="non_veg_starters" id="NonVegStarters"></div>
                <div data-aos="fade-up">
                    <NonVegStarters />
                </div>

                <div className="fish_items" id="FishItems"></div>
                <div data-aos="fade-up">
                    <FishItems />
                </div>

                <div className="veg_tandoori" id="VegTandooriStarters"></div>
                <div data-aos="fade-up">
                    <VegTandooriStarters />
                </div>

                <div className="non_veg_tandoori" id="NonVegTandooriStarters"></div>
                <div data-aos="fade-up">
                    <NonVegTandooriStarters />
                </div>

                <div className="noodles" id="Noodles"></div>
                <div data-aos="fade-up">
                    <Noodles />
                </div>

                <div className="sizzlers" id="Sizzlers"></div>
                <div data-aos="fade-up">
                    <Sizzlers />
                </div>

                <div className="veg_main_course" id="VegMainCourse"></div>
                <div data-aos="fade-up">
                    <VegMainCourse />
                </div>

                <div className="egg_main_course" id="EggMainCourse"></div>
                <div data-aos="fade-up">
                    <EggMainCourse />
                </div>

                <div className="chicken_main_course" id="ChickenMainCourse"></div>
                <div data-aos="fade-up">
                    <ChickenMainCourse />
                </div>

                <div className="fruit_juice" id="FruitJuice"></div>
                <div data-aos="fade-up">
                    <FruitJuice />
                </div>

                <div className="cold_drinks" id="ColdDrinks"></div>
                <div data-aos="fade-up">
                    <ColdDrinks />
                </div>

                <div className="ice_cream" id="IceCream"></div>
                <div data-aos="fade-up">
                    <IceCream />
                </div>

            </div>  
        </>
    );
}

export default Menu;