import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "./utils/helper";
import useOnline from "./utils/useOnline"
//hooks are normal function
 


const Body = () => {
  //const searchTxt ="KFC";
  //searchText is a local state variable
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState();
  //use state returns an array: [variable name , function to update the variable]
  //usestate is a hook which used to: create state variable

  //useffect: empty dependency array called once after render
  //dep arr[searchText] =>once after initial render + everytime after rerender when searchText changes
  useEffect(() => {
    getRestaurants();
  }, []); //params (callbackFn, dependencyarr[])

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    //optional chaining
    setAllRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
    // const isOnline= useOnline();
    // if(!isOnline ){
    //   return <h1 >Offline,please check your internet connection!!</h1>
    // }

  //not render component (early return)
  if (!allRestaurants) return null;
  // if(filteredRestaurants?.length===0) return <h1> No restaurants found</h1>

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search"
        />

        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      {filteredRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list">
          {filteredRestaurants?.map((restaurant) => {
            return (
              <Link to={"/restaurant/"+restaurant?.info?.id} key={restaurant?.info?.id}><RestaurantCard
                key={restaurant?.info?.id}
                {...restaurant?.info}
              /></Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
