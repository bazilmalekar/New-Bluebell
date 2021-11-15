import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const NonVegSoup = () => {
    
    return (
        <>
        <div className="custom-container">
            <div className="menu-div">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="menu-title">
                            <h1>Non Veg Soup</h1>
                        </div>
                        <table className="table">
                        <tr>
                            <th><h5>Cuisine</h5></th>
                            <th><h5>Price</h5></th>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Chicken Manchow Soup</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹99</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Chicken Hot & Sour Soup</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹99</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Chicken Sweet Corn Soup</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹99</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Chicken Soup</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹99</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Chicken Wants Soup</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹99</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Mutton Yakini Soup</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹99</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Mutton Manchow Soup</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹99</span></td>
                        </tr>
                    </table>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default NonVegSoup;