import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../../utils/constants";
//useParams hook given by the react-router-dom is used to read the input link in the url and return it to include it in our API to make dynamic API calls for dynamic data to load on our web application according to the router/url

const RestaurantMenu = () => {

    const [resInfo,setResInfo] = useState(null);
    //dependency array is the second(optional) argument of the useEffect Hook
    //since we only have to make an API call once(first time the Component Renders) we will leave the dependency array as an empty list

    const {resId}  =  useParams();
    //destructuring params on the fly to get resId and using resId inside the API call

    useEffect(()=> {
        fetchMenu();
    },[]);


    const fetchMenu = async () => {
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        setResInfo(json)
    }

    if (resInfo=== null) return <Shimmer/>;

    const {name,cuisines,costForTwoMessage} = resInfo.data?.cards[2]?.card?.card?.info

    const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[7]?.card?.card

    console.log(itemCards)

    return (
        <div>
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
            <h2>{costForTwoMessage}</h2>
            <ul>
                { 
                    itemCards.map( 
                                    (item) => 
                                        { 
                                           return <li key={item.card.info.id}>{item.card.info.name + " " + item.card.info.defaultPrice || item.card.info.price}</li>;
                                        }   
                                ) 
                }
            </ul>
        </div>
    );
} 
export default RestaurantMenu;