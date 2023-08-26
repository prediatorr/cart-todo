import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../Constant";
import useRestaurant from "./utils/useRestaurant";
import { addItem } from "./utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  //how to read dynamic URL params
  const params = useParams(); // or const {id}=useparams();
  const { resId } = params;

  const dispatch = useDispatch();

  const addFoodItem = (item)=>{
    dispatch(addItem(item));
  }

  const { restaurant, menu } = useRestaurant(resId);
  //const [restaurant, setRestaurant] = useState(null);

  if (!restaurant) {
    return <Shimmer></Shimmer>;
  }
  //console.log(Object.values(restaurant))
  return (
    <div className="flex flex-wrap">
      <div>
        <h1 className="text-2xl font-bold">Restaurant Id:{resId}</h1>
        <h2 className="font-semibold">{restaurant?.name}</h2>
        <img
          className="h-72"
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          alt=""
        />
        <h3 className="">{restaurant?.area}</h3>
        <h3 className="text-xl"> {restaurant?.city} </h3>
        <h3> {restaurant?.avgRatingString} </h3>
        <h3> {restaurant?.costForTwoMessage} </h3>
      </div>
      <div>
       
        <h1 className="text-2xl m-2 mx-5">Menu</h1>
        <ul className="flex  flex-col  justify-around gap-5 border mx-5  p-5">
          {Object?.values(menu).map((item) => (
            <li className="border w-90 p-3 m-2 flex justify-between" key={item?.card?.info?.id}>
              {item?.card?.info?.name}{" "}
              - <button onClick={()=>addFoodItem(item?.card?.info)} className="p-1 bg-green-50">Add-Item</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
