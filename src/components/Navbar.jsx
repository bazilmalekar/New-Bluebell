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

    // const [navValue, setNavValue] = useState(false);
    const [scroll, setScroll] = useState(false);

    // function changeNav(){
    //     ()=> dispatch(navTrue());
    // }

    // function changeDefault(){
    //     setNavValue(false);
    // } 

    const scrollClass = "navbar navbar-expand-lg fixed-top navbar-dark bg-dark h-nav";
    const scrollChange = "navbar navbar-expand-lg fixed-top navbar-dark bg-dark h-nav change";

    window.addEventListener("scroll", ()=>{
        if(window.scrollY >= 480){
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
                    <HashLink on onClick={()=> dispatch(navFalse())}  className="nav-link" to="/New-Bluebell/home#header">Home</HashLink>
                    </li>
                    <li className="nav-item">
                    <NavLink onClick={()=> dispatch(navTrue())} className="nav-link" to="/New-Bluebell/menu">Menu</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink onClick={()=> dispatch(navTrue())} className="nav-link" to="/New-Bluebell/gallery">Gallery</NavLink>
                    </li>
                    <li className="nav-item">
                    <HashLink className="nav-link" to="/New-Bluebell/home#contact_us">Contact Us</HashLink>
                    </li>
                </ul>
            </div>
            </nav>
        </div>
    );
}

export default Navbar;