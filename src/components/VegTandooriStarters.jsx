import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const VegTandooriStarters = () => {
    
    return (
        <>
        <div className="custom-container">
            <div className="menu-div">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="menu-title">
                            <h1>Tandoori Starters (Veg)</h1>
                        </div>
                        <table className="table">
                        <tr>
                            <th><h5>Cuisine</h5></th>
                            <th><h5>Price</h5></th>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Paneer Tikka</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹169</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Paneer Hariyali Tikka</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹169</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Paneer Seek Kabab</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹169</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Veg Seek Kabab</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹169</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Baby Corn Tandoori</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹169</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Gobi Gulnar</span></td>
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

export default VegTandooriStarters;