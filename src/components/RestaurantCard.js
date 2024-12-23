import React, { useContext } from "react";
import userContext from "../utils/userContext";

const RestaurantCard = ({ resData }) => {
  const {
    name,
    cuisines,
    avgRating,
    lastMileTravelString,
    cloudinaryImageId,
    costForTwo,
  } = resData;
  const {LoggedInUser} = useContext(userContext)
  return (
    <div className="m-4 w-[250px] p-4 rounded-lg border border-solid border-grey-300 bg-pink-100 hover:bg-slate-100">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        className="rounded-lg"
      />
      <h3 className="font-bold py-1 text-lg">{name}</h3>
      <h4 className="text-sm">{cuisines.join(", ")}</h4>
      <h4 className="text-sm">{avgRating}</h4>
      {/* <h4 className="text-sm">{costForTwo/100} FOR TWO</h4> */}
      <h4>{avgRating} stars</h4>
      <p>{lastMileTravelString} minutes</p>
      <p>{LoggedInUser}</p>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute p-1 m-2 text-green-600 bg-blue-300 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
