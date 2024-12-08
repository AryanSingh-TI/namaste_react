import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockData";
import { useState } from "react";

const Body = () => {

    const [listOfRestaurants,setListOfRestaurants] = useState(resList);
    //creating a state variable using the useState Hook
    //Earlier without this state variable making changes in the listOfRestaurnts as a normal variable didn't change the UI when the listOfRestaurants changed
    
    //listOfRestaurants here is the variable in which the state variable will be created
    //resList here is the default Value
    //setListOfRestaurants is used to change the value of the listOfRestaurants
    
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