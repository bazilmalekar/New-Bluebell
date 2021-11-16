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

                {/* <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light category_btn">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">Disabled</a>
                        </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav> */}

                <div className="category_btn">
                    <h1>hi</h1>
                </div>
                
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

                <div className="egg_main_course"></div>
                <div data-aos="fade-up">
                    <EggMainCourse />
                </div>

                <div className="chicken_main_course"></div>
                <div data-aos="fade-up">
                    <ChickenMainCourse />
                </div>

                <div className="fruit_juice"></div>
                <div data-aos="fade-up">
                    <FruitJuice />
                </div>

                <div className="cold_drinks"></div>
                <div data-aos="fade-up">
                    <ColdDrinks />
                </div>

                <div className="ice_cream"></div>
                <div data-aos="fade-up">
                    <IceCream />
                </div>

            </div>
        </>
    );
}

export default Menu;