import { useState } from "react";
import { useEffect } from "react";
import { MENU_API_URL } from "../../Constant";
const useRestaurant =(resId)=>{
    const [restaurant,setRestaurant]=useState(null);
    
    const [menu,setMenu] = useState(); 
    //get data from API
    useEffect(() => {
        getRestaurantInfo();
      }, []);
    
      async function getRestaurantInfo() {
        const data = await fetch(MENU_API_URL + resId);
        const json = await data.json();
        //console.log(json);
        const resDetail = json?.data?.cards[0]?.card?.card?.info;
        setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
        setRestaurant(resDetail);
    }
    //return restaurant data
    return {restaurant,menu};
}

export default useRestaurant;