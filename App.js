import React from "react";
import ReactDOM from "react-dom/client";

/**-----------------------------------
 * |         NAMASTE FOOD APP        |
 * -----------------------------------
 * |>Header                          |
 * | - Logo                          |
 * | - Nav Items                     |
 * |>Body                            |
 * | - Search Bar                    |
 * | - Restaurant Card Container     |
 * |     - Restaurant Cards          |
 *         - Name of the restaurant  |
 *         - Img,Star Rating,Cuisine |
 * |>Footer                          |
 * |- Copyright                      |
 * |- Links                          |
 * |- Address                        |
 * |- Contact                        |
 * -----------------------------------
 */

const HeaderComponent = () => {
    return (
        <div className="header">

            <div>
                <img 
                className="logo" 
                src="https://i.pinimg.com/enabled_lo_mid/1200x/42/9e/b8/429eb8c5660116f24ff49ae0500649c3.jpg"
                />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
        
    )
}

const styleCard = {
    backgroundColor:"#D3D3D3",
};// inline css can be given with the help of a javascript object in jsx

const RestaurantCard = () => {
    return (
        <div className="res-card" style={styleCard}>
            <img 
            style={{width:"100%"}}
            alt="res-logo" 
            src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"
            />
            <h3>Mm..Food</h3>
            <h4>Biryani ,North Indian, Asian</h4>
            <h5>4.4 stars</h5>
            <h5>35mins</h5>
        </div>
    )
}
const Body = () => {
    return (
        <div className="body">
            <div className="Search">Search</div>
            <div className="res-container">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <HeaderComponent/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)