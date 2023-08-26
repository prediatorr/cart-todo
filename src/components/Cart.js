import { useDispatch, useSelector } from "react-redux";
import FoodItems from "./FoodItems";
import { clearCart } from "./utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <h1 className="font-bold text-5xl ">Cart Item - {cartItems.length}</h1>
      <button
        className="bg-red-300 p-2 m-5 rounded-lg text-gray-600"
        onClick={() => handleClearCart()}
      >
        Clear Item
      </button>
      <div className="flex flex-wrap">
        {cartItems.map((item) => (
          <FoodItems key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
