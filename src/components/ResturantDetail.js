import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantDetails = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0);
  const restDetails = useRestaurantMenu(resId);
  if (restDetails === null) return <p>Loading....</p>;
  const { name, costForTwo, cuisines } =
    restDetails?.cards[2]?.card?.card?.info;
  const category =
    restDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(category);
  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl text-violet-800 my-5">{name}</h1>
      <p className="text-lg font-bold">Cuisines: {cuisines.join(", ")}</p>
      {category.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
        />
      ))}
    </div>
  );
};

export default RestaurantDetails;
