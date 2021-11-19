import React from "react";
import Header from "./Header";
import MainBody from "./MainBody";
import ContactUs from "./ContactUs";
import {Helmet} from "react-helmet";

const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>New BlueBell</title>                    
            </Helmet>
            <Header />
            <MainBody />
            <ContactUs />
        </div>
    );
}

export default Home;