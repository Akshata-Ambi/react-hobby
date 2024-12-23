import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  const fetchRestaurantDetails = async () => {
    const restaurant = await fetch(`${MENU_API}${resId}`);
    const restaurantJson = await restaurant.json();
    setResInfo(restaurantJson?.data);
  };

  useEffect(() => {
    fetchRestaurantDetails();
  }, []);
  return resInfo;
};

export default useRestaurantMenu;
