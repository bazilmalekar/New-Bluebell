import React, {useEffect} from "react";

const Apetizers = () => {
    return(
        <>
        <div className="custom-container">
            <div className="menu-div">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="menu-title">
                            <h1>Apetisers</h1>
                        </div>
                        <table className="table">
                        <tr>
                            <th><h5>Cuisine</h5></th>
                            <th><h5>Price</h5></th>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Masala Papad</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹49</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Egg Burji</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹69</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Finger Chips</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹79</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Peanut Masala</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹69</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Onion Pakoda</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹89</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Chilly Pakoda</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹89</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Mix veg Pakoda</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹89</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Egg Pakoda</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹89</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Ring Onion Pakoda</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹89</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">G.P. Garlic Dry</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹89</span></td>
                        </tr>
                    </table>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Apetizers;