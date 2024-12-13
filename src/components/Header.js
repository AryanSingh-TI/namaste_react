import {LOGO_URL} from "../../utils/constants"
import { useEffect , useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [btnName,updateBtnName] = useState("Login");

    console.log("Header rendered");
    // everytime we click on the button the entire header Component will be Re-rendered 
    // and this console log will be printed

    useEffect
    (
        () => 
        {
            console.log("useEffect is called after every render of that component");
        },
        [btnName] //dependency array is the second argument of useEffect and it is not a mandato ry argument
    )
    //if there is no dependency array useEffect will be called everytime the component is rendered
    //an empty list [] as the dependency array(second argument of useEffect) would imply that the useEffect will only be called during the first render
    //if dependency array is [btnNameReact] => useEffect() will be called everytime btnNameReact changes

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
                    <li><Link to="/">Home</Link></li>
                    <li><a href="/about">About</a></li>
                    {/* We prefer not to use the anchor tag because it re-renders everything even the header when the about us page has the same header */}
                    <li><Link to="/contact">Contact Us</Link></li>
                    {/* instead we prefer to use the Link tag  it will not re-render the entire page*/}
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