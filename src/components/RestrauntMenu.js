import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../Constant";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../Constant";
import useRestaurant from "./utils/useRestaurant";
const RestaurantMenu = () => {
  //how to read dynamic URL params
  const params = useParams(); // or const {id}=useparams();
  const { resId } = params;
  
  

  const {restaurant,menu} = useRestaurant(resId)
  //const [restaurant, setRestaurant] = useState(null);
  
  
  if (!restaurant) {
    return <Shimmer></Shimmer>;
  }
  //console.log(Object.values(restaurant))
  return (
    <div>
      <div  >
        <h1>Restaruant id:{resId}</h1>
        <h2>{restaurant?.name}</h2>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} alt="" />
        <h3>{restaurant?.area}</h3>
        <h3> {restaurant?.city} </h3>
        <h3> {restaurant?.avgRatingString} </h3>
        <h3> {restaurant?.costForTwoMessage} </h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>{
            Object.values(menu).map((item)=><li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>)
          }
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
