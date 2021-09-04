import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer>
            <p><span className="inherent">©</span>Copyright <span className="inherent">{year}</span> | New Bluebell</p> 
        </footer>
    );
}

export default Footer;