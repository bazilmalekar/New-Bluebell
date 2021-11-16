import React from "react";
import "aos/dist/aos.css";

const FishItems = () => {
    
    return (
        <>
        <div className="custom-container">
            <div className="menu-div">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="menu-title">
                            <h1>Fish Items (Seasonal Price)</h1>
                        </div>
                        <table className="table mt-4">
                        <tr>
                            <th><h5>Cuisine</h5></th>
                        </tr>
                        <tr>
                            <td><span className="table_cuesine_background">Fish Manchurian</span></td>    
                        </tr>
                        <tr>
                            <td><span className="table_cuesine_background">Fish Chilly</span></td>    
                        </tr>
                        <tr>
                            <td><span className="table_cuesine_background">Fish 65</span></td>    
                        </tr>
                        <tr>
                            <td><span className="table_cuesine_background">Fish Orwala</span></td>    
                        </tr>
                        <tr>
                            <td><span className="table_cuesine_background">Fish Tava/Rava/Masala</span></td>    
                        </tr>
                    </table>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default FishItems;