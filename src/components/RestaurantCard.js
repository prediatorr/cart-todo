import { IMG_CDN_URL } from "../Constant";

const RestaurantCard = ({
    name,
    cuisines,
    avgRatingString,
    cloudinaryImageId,
  }) => {
    return (
      <div className="card">
        <img alt="" src={IMG_CDN_URL + cloudinaryImageId} />
        <h2>{name}</h2>
        <h3>{cuisines?.join(", ")}</h3>
        <h4>{avgRatingString} Stars</h4>
      </div>
    );
  };

  export default RestaurantCard ;