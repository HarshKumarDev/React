import RestaurantCard from "./Restaurantcard";
import resList from "../utils/mockData";
import { useState} from "react";
const Body = () => {

    //local State variable - Super powerful
    const [listOfRestaurants, setListOfRestaurant] = useState(resList);
    // Normal JS variable
    // let listOfRestaurantsJs= [
    //     { }, { }];
    return (
      <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={ () => {
                // Filter logic here
                const filteredList= listOfRestaurants.filter( res => res.info.avgRating > 4);
                setListOfRestaurant(filteredList);
            }}> Top Rated Restaurants</button>
        </div>
        <div className="res-container">
          {listOfRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };
export default Body;