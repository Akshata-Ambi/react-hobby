import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const accordionClick = () => {
    setShowIndex();
  };
  return (
    <div className="w-6/12 p-2 shadow-lg mx-auto border border-b-violet-300 my-4 bg-gray-50">
      <div
        className="flex justify-between cursor-pointer"
        onClick={accordionClick}
      >
        <p>
          {data.title}({data.itemCards.length})
        </p>
        <p>{showItems ? "⬆" : "⬇"}</p>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
