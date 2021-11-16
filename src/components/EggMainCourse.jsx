import React from "react";
import "aos/dist/aos.css";

const EggMainCourse = () => {
    
    return (
        <>
        <div className="custom-container">
            <div className="menu-div">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="menu-title">
                            <h1>Egg Main Course</h1>
                        </div>
                        <table className="table">
                        <tr>
                            <th><h5>Cuisine</h5></th>
                            <th><h5>Price</h5></th>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Egg Masala</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹149</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Egg Curry</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹149</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Egg Makhanwala</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹149</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Egg Hydrabadi</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹149</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Egg Kolhapuri</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹149</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Egg Kachcha Masala</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹149</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Egg Maharaj</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹149</span></td>
                        </tr>
                    </table>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default EggMainCourse;