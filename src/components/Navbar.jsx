import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { useState } from "react";
import { Zoom } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import {navFalse, navTrue} from "../redux/actions/index";

const Navbar = (props) => {
    const navState = useSelector((state)=> state.changeNav);
    const dispatch = useDispatch();
    const [scroll, setScroll] = useState(false);

    const scrollClass = "navbar navbar-expand-lg fixed-top navbar-dark bg-dark h-nav";
    const scrollChange = "navbar navbar-expand-lg fixed-top navbar-dark bg-dark h-nav change";

    window.addEventListener("scroll", ()=>{
        if(window.scrollY >= 400){
            setScroll(true);
        }else{
            setScroll(false);
        }
    });

    return (
        <div>
            <nav className={navState ? "navbar navbar-expand-lg fixed-top navbar-dark bg-dark r-nav" : scroll ? scrollChange : scrollClass}>
                <Zoom in={true}>
                <HashLink onClick={()=> dispatch(navFalse())} className="navbar-brand" to="/New-Bluebell/home"><i class="fas fa-bell custom_icon"></i> New BlueBell</HashLink>
                </Zoom>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                 </button>

             <div className="collapse navbar-collapse" id="navbarSupportedContent">
                 <ul className="navbar-nav ml-auto custom-nav-list">
                    <li className="nav-item">
                    <HashLink  onClick={()=> dispatch(navFalse())}  className="nav-link" to="/New-Bluebell/home#header">Home</HashLink>
                    </li>
                    <li className="nav-item dropdown" >
                        <NavLink onClick={()=> dispatch(navTrue())} className="nav-link dropdown-toggle" to="/New-Bluebell/menu/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Menu
                        </NavLink>
                        <div className="dropdown-menu bg-dark mr-5 active" aria-labelledby="navbarDropdown">
                            <HashLink className="dropdown-item bg-dark" to="/New-Bluebell/menu/#Apetizers">Apetizers</HashLink>
                            <HashLink className="dropdown-item bg-dark" to="/New-Bluebell/menu/#SpecialMocktail">Special Mocktails</HashLink>
                            <HashLink className="dropdown-item bg-dark" to="/New-Bluebell/menu/#VegSoup">Veg Soup</HashLink>
                            <HashLink className="dropdown-item bg-dark" to="/New-Bluebell/menu/#NonVegSoup">Non Veg Soup</HashLink> 
                            <HashLink className="dropdown-item bg-dark" to="/New-Bluebell/menu/#VegStarters">Veg Starters</HashLink>
                            <HashLink className="dropdown-item bg-dark" to="/New-Bluebell/menu/#EggStarters">Egg Starters</HashLink>
                            <HashLink className="dropdown-item bg-dark" to="/New-Bluebell/menu/#NonVegStarters">Non Veg Starters</HashLink>
                            <HashLink className="dropdown-item bg-dark" to="/New-Bluebell/menu/#FishItems">Fish Items</HashLink>
                            <HashLink className="dropdown-item bg-dark" to="/New-Bluebell/menu/#VegTandooriStarters">Tandoori Starters(Veg)</HashLink>
                            <HashLink className="dropdown-item bg-dark" to="/New-Bluebell/menu/#NonVegTandooriStarters">Tandoori Starters(Non Veg)</HashLink>
                            <HashLink className="dropdown-item bg-dark" to="/New-Bluebell/menu/#Noodles">Noodles</HashLink>
                            <HashLink className="dropdown-item bg-dark" to="/New-Bluebell/menu/#Sizzlers">Sizzlers</HashLink>
                            <HashLink className="dropdown-item bg-dark" to="/New-Bluebell/menu/#VegMainCourse">Veg Main Course</HashLink>
                            <HashLink className="dropdown-item bg-dark" to="/New-Bluebell/menu/#EggMainCourse">Egg Main Course</HashLink>
                            <HashLink className="dropdown-item bg-dark" to="/New-Bluebell/menu/#ChickenMainCourse">Chicken Main Course</HashLink>
                            <HashLink className="dropdown-item bg-dark" to="/New-Bluebell/menu/#FruitJuice">Fruit Juice</HashLink>
                            <HashLink className="dropdown-item bg-dark" to="/New-Bluebell/menu/#ColdDrinks">Cold Drinks</HashLink>
                            <HashLink className="dropdown-item bg-dark" to="/New-Bluebell/menu/#IceCream">Ice-Cream</HashLink>         
                        </div>
                    </li>
                    <li className="nav-item">
                    <NavLink onClick={()=> dispatch(navTrue())} className="nav-link" to="/New-Bluebell/gallery">Gallery</NavLink>
                    </li>
                    <li className="nav-item">
                    <HashLink onClick={()=> dispatch(navTrue())} className="nav-link" to="/New-Bluebell/home#contact_us">Contact Us</HashLink>
                    </li>
                </ul>
            </div>
            </nav>
        </div>
    );
}

export default Navbar;