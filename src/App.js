import React, { useState } from "react";
import { Route, Switch} from "react-router-dom";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  
  return (
    <div>
    <Navbar />
    <ScrollToTop />
    <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/New-Bluebell/home" component={Home} />
    <Route exact path="/New-Bluebell" component={Home} />
    <Route path="/New-Bluebell/menu" component={Menu} />
    <Route path="/New-Bluebell/gallery" component={Gallery} />
    </Switch>
    <Footer />
    </div>
  );
}

export default App;
