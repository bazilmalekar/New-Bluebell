import React from "react";
import "aos/dist/aos.css";

const Noodles = () => {
    
    return (
        <>
        <div className="custom-container">
            <div className="menu-div">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="menu-title">
                            <h1>Noodles</h1>
                        </div>
                        <table className="table">
                        <tr>
                            <th><h5>Cuisine</h5></th>
                            <th><h5>Price</h5></th>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Veg Hakka Noodles</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹119</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Veg Schezwan Noodles</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹129</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Veg Crispy Noodles</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹129</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Egg Hakka Noodles</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹139</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Egg Schewan Noodles</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹149</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Chicken Hakka Noodles</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹159</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Chicken Schewan Noodles</span></td>
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

export default Noodles;