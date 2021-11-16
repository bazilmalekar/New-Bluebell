import React from "react";
import "aos/dist/aos.css";

const FruitJuice = () => {
    
    return (
        <>
        <div className="custom-container">
            <div className="menu-div">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="menu-title">
                            <h1>Fruit Juice & Milkshakes</h1>
                        </div>
                        <table className="table">
                        <tr>
                            <th><h5>Cuisine</h5></th>
                            <th><h5>Price</h5></th>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Orange Juice</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹79</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Mosambi Juice</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹79</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Pineapple Juice</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹79</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Watermelon Juice</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹79</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Mango Milkshake</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹79</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Vanila Milkshake</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹79</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Butterscotch Milkshake</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹79</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Strawberry Milkshake</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹79</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Buttermilk</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹49</span></td>
                        </tr>
                        <tr>
                            <td  className="dots_cuesine"><span className="table_cuesine_background">Sweet Lassi</span></td>
                            <td  className="dots_price"><span className="table_price_background">₹59</span></td>
                        </tr>
                    </table>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default FruitJuice;