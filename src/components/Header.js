import {LOGO_URL} from "../../utils/constants"
import { Component, useState } from "react";

const Header = () => {

    let [btnName,updateBtnName] = useState("Login");

    console.log("Header rendered");
    // everytime we click on the button the entire header Component will be Re-rendered 
    // and this console log will be printed

    return (
        <div className="header">

            <div>
                <img 
                className="logo" 
                src={LOGO_URL}
                />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button 
                        className="login" 
                        onClick=
                            {
                                ()=> 
                                {
                                    if(btnName==="Login") 
                                        updateBtnName("Logout"); 
                                    else
                                        updateBtnName("Login")
                                }
                                // updateBtnName here will update the btnName making changes in the virtual DOM through the state variable
                                // the diff algorithm will notice this change in the virtual DOM and Re-render the entire header component
                                // the header component with the changed state will then be rendered on the actual DOM
                            }
                    >
                        {btnName}
                    </button>
                </ul>
            </div>

        </div>
        
    )
}

export default Header;