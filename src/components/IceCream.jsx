import React from "react";
import "aos/dist/aos.css";

const IceCream = () => {
    
    return (
        <>
        <div className="custom-container">
            <div className="menu-div">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="menu-title">
                            <h1>Ice-Cream</h1>
                        </div>
                        <table className="table">
                        <tr>
                            <td><span className="table_cuesine_background">Cup Ice Cream</span></td>
                        </tr>
                        <tr>
                            <td><span className="table_cuesine_background">Cone Ice Cream</span></td>
                        </tr>
                        <tr>
                            <td><span className="table_cuesine_background">Candy</span></td>
                        </tr>
                    </table>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default IceCream;