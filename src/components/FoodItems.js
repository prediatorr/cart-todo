import { IMG_CDN_URL } from "../Constant";

const FoodItems = ({
  name,
  description,
  imageId,
  price,
}) => {
  //console.log(user);
  return (
    <div className="w-56 p-2 m-2 shadow-lg h-full">
      <img alt="" src={IMG_CDN_URL + imageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{description}</h3>
      <h4 className="font-bold">Price-{price/100} </h4>
    </div>
  );
};

export default FoodItems;
