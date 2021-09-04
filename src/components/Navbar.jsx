import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { useState } from "react";
import { Zoom } from "@material-ui/core";

const Navbar = (props) => {
    const [navValue, setNavValue] = useState(false);

    function changeNav(){
        setNavValue(true);
    }

    function changeDefault(){
        setNavValue(false);
    } 

    window.addEventListener("scroll", ()=>{
        if(window.scrollY >= 480){
            setNavValue(true);
        }else{
            setNavValue(false);
        }
    });

    return (
        <div>
            <nav className={navValue ? "navbar navbar-expand-lg fixed-top navbar-dark bg-dark r-nav" : "navbar navbar-expand-lg fixed-top navbar-dark bg-dark h-nav"}>
                <Zoom in={true}>
                <NavLink onClick={changeDefault} className="navbar-brand" to="/home"><i class="fas fa-bell custom_icon"></i> New BlueBells</NavLink>
                </Zoom>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                 </button>

             <div className="collapse navbar-collapse" id="navbarSupportedContent">
                 <ul className="navbar-nav ml-auto custom-nav-list">
                    <li className="nav-item">
                    <NavLink on onClick={changeDefault}  className="nav-link" to="/home">Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink onClick={changeNav} className="nav-link" to="/menu">Menu</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink onClick={changeNav} className="nav-link" to="/gallery">Gallery</NavLink>
                    </li>
                    <li className="nav-item">
                    <HashLink className="nav-link" to="/home#contact_us">Contact Us</HashLink>
                    </li>
                </ul>
            </div>
            </nav>
        </div>
    );
}

export default Navbar;