import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const EggStarters = () => {
    
    return (
        <>
        <div className="custom-container">
            <div className="menu-div">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="menu-title">
                            <h1>Egg Starters</h1>
                        </div>
                        <table className="table">
                        <tr>
                            <th><h5>Cuisine</h5></th>
                            <th><h5>Price</h5></th>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Egg Chilly</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹169</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Egg Manchurian</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹169</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Egg Orwala</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹179</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Egg Pakoda</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹169</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Egg 65</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹169</span></td>
                        </tr>
                    </table>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default EggStarters;