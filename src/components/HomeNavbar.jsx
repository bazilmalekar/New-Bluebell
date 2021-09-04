import React from "react";
import { NavLink } from "react-router-dom";

const HomeNavbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                 </button>

             <div className="collapse navbar-collapse" id="navbarSupportedContent">
                 <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/menu">Menu</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="#">Contact Us</NavLink>
                    </li>
                </ul>
            </div>
            </nav>
        </div>
    );
}

export default HomeNavbar;