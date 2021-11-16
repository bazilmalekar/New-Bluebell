import React from "react";
import "aos/dist/aos.css";

const Sizzlers = () => {
    
    return (
        <>
        <div className="custom-container">
            <div className="menu-div">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="menu-title">
                            <h1>Sizzlers</h1>
                        </div>
                        <table className="table">
                        <tr>
                            <th><h5>Cuisine</h5></th>
                            <th><h5>Price</h5></th>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Veg Sizzlers</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹249</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Chicken Sizzlers</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹349</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Veg American Choupsey</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹249</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Chicken American Choupsey</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹349</span></td>
                        </tr>
                    </table>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Sizzlers;