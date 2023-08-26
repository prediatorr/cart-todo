import { IMG_CDN_URL } from "../Constant";

const RestaurantCard = ({
  name,
  cuisines,
  avgRatingString,
  cloudinaryImageId,
}) => {
  //console.log(user);
  return (
    <div className="w-56 p-2 m-2 shadow-lg h-full">
      <img alt="" src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines?.join(", ")}</h3>
      <h4>{avgRatingString} Stars</h4>
    </div>
  );
};

export default RestaurantCard;
