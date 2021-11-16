import React from "react";
import "aos/dist/aos.css";

const ColdDrinks = () => {
    
    return (
        <>
        <div className="custom-container">
            <div className="menu-div">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="menu-title">
                            <h1>Cold Drinks</h1>
                        </div>
                        <table className="table">
                        <tr>
                            <th><h5>Cuisine</h5></th>
                            <th><h5>Price</h5></th>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Plain Soda</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹19</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Fresh Lemon Juice</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹49</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Fresh Lemon Soda</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹49</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Soft Drinks(300 ml)</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹30</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Mineral Water(1 ltr)</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹25</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Soft Drinks(500 ml)</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹60</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Mineral Water(2 ltr)</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹50</span></td>
                        </tr>
                    </table>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default ColdDrinks;