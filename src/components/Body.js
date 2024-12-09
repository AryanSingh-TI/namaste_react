import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {


    const [searchText,setSearchText] = useState("");
    //used to store and update the searcText and make corresponding changes in the UI

    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    //initially the default value of the listOfRestaurants will be an empty list
    const [filteredRestaurants,setFilteredSetRestaurants] = useState([]);

    useEffect(()=>{
        console.log("useEffect Called");
        fetchData();
    },[]);
    //useEffect is a React Hook that takes two arguments, a call back function and a Dependency Arrow
    //useEffect calls the call back function as soon as the render cycle is finished and the components are loaded.

    // 4) useEffect() will be called in the end after components have been rendered
    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4558205&lng=77.03665649999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
          ) //changed the link because API call changed
        //making a call to a random swiggy api and waiting till the API call is finished and the data is fetched
      
        const json = await data.json();
        //converting the data(string) to a JSON format and waiting till that has finished execution
        
        res = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants //changed the way by which we extracted relevant restaurant card info
        console.log(res);
        //logging that json data

        setListOfRestaurants(res)
        setFilteredSetRestaurants(res)
        //then changing the value of the listOfRestaurant "useState" State variable and putting some restaurant values in it using the resList from the mockData.js
        //This will Re-render the UI and add some restaurant cards in the UI only after the API call is finished
      
    } //this fetchData() method is used to make API calls
    
    console.log("before rendering");
    // 1) this will be console logged before rendering the components

    //Conditional Rendering
    if (listOfRestaurants.length===0){
        return <h1><Shimmer/></h1> //Shimmer here is used to render the shadow of the cards before they are actually rendered and it makes for a smooth user experience, its like a loading screen but more interactive
    } 
    // 2) putting a loading screen until the Restaurant Card component is populated with values after the API call is finished

    // 3) the components will be rendered from this return statement
    return (
        <div className="body">
            <div className="Filter">

                <div className="search">
                    <input className="search-box" type="text" 
                        value={searchText}
                        //this ties the searchText with the input tag
                        onChange={  
                                    (e)=>setSearchText(e.target.value)
                                 }
                        //this will update the value inside the input tab incase of any change
                        //without this we wont see anything inside the input tag even if we type inside it, because the state variables only get updated by calling their update functions with the changed value as the argument
                        //everytime we enter literally anything inside the input tab will also Re-render the whole Body Component
                        //because changes in the state variable affect the virtual DOM and hence making changes in the UI
                        //the Re-rendering is very fast because React has very Fast Reconciliation Cycles with optimized algorithms
                        //React is fast because of it's fast reconciliation processes(Re-rendering Processes) where the difference algorithm effeciently notices the difference between the previous and the current Virtual DOM and rerenders the UI in case of any change
                        />
                        <button 
                            onClick={
                                        () =>
                                        {

                                            const filteredRestaurants = listOfRestaurants.filter(
                                                (res) => res.data.name.toLowerCase().includes(searchText.toLowerCase())
                                            )
                                            //filtering the listOfRestaurant on the condition that it includes the searchText
                                            //filteredRestaurants contains the list of restaurants filtered on the following condition and is passed as an argument in setFilteredSetRestaurants() to set the filteredRestaurants state variable

                                            setFilteredSetRestaurants(filteredRestaurants)
                                            //updating the listOfRestaurants on the filtered data
                                            //here we use the filteredRestaurant state variable and not listOfRestaurant because we want the original listOfRestaurant entact and not updated to able to make new searches in future from the exhaustive list of all the restaurants and not only the updated filtered restaurants
                                            //thus we do not want to update or change the listOfRestaurant, it is used to store the Orginal listOfRestaurant containing all the restaurants and the filtering searches are applied on this
                                            //if we update the listOfRestaurant instead it will be filtered and its value will be updated losing the data of the other restaurants
                                            
                                        }
                                    }
                        >
                            Search
                        </button>
                </div>

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
                    filteredRestaurants.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
                    //filteredRestaurants are used here instead of listOfRestaurants to render from the filtered Restaurant `List
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