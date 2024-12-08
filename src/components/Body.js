import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {

    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    //initially the default value of the listOfRestaurants will be empty

    useEffect(()=>{
        console.log("useEffect Called");
        fetchData();
    },[]);
    //useEffect is a React Hook that takes two arguments, a call back function and a Dependency Arrow
    //useEffect calls the call back function as soon as the render cycle is finished and the components are loaded.

    // 4) useEffect() will be called in the end after components have been rendered
    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
          )
        //making a call to a random swiggy api and waiting till the API call is finished and the data is fetched
      
        const json = await data.json();
        //converting the data(string) to a JSON format and waiting till that has finished execution
        
        console.log(json);
        //logging that json data

        setListOfRestaurants(resList)
        //then changing the value of the listOfRestaurant "useState" State variable and putting some restaurant values in it using the resList from the mockData.js
        //This will Re-render the UI and add some restaurant cards in the UI only after the API call is finished
      
    } //this fetchData() method is used to make API calls
    
    console.log("before rendering");
    // 1) this will be console logged before rendering the components

    if (listOfRestaurants.length===0){
        return <h1>Loading...</h1>
    }
    // 2) putting a loading screen until the Restaurant Card component is populated with values after the API call is finished

    // 3) the components will be rendered from this return statement
    return (
        <div className="body">
            <div className="Filter">
                <button 
                    className="filter-btn" 
                    onClick={
                                () =>
                                {
                                    const filteredList = listOfRestaurants.filter( (res) => res.data.avgRating > 4 );
                                    console.log(listOfRestaurants);
                                    setListOfRestaurants(filteredList);
                                }  
                            }
                >
                        Top Rated Restaurants
                </button>
            </div>
            <div 
                className="res-container">
                {
                    listOfRestaurants.map((restaurant) => <RestaurantCard key={restaurant.data.id} resData={restaurant}/>)
                }
                    {/* keys need to be added while using iterative functions like map to uniquely identify the components in case of insertion or other operations so that react knows where to insert
                    and doesn't render all the components again
                    unique IDs are preferred as keys if there are no unique IDs we can use index like 0,1,2 of the list
                    but its not a good practice as the list might change and so will the index, but it is still preferred to having no keys
                    otherwise it will raise a warning in the console to have keys in the functions like map which are iterative and not hard coded
                    */}
            </div>
        </div>
    )
}

export default Body;