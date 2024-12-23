import React, { useState, useEffect, useContext } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { Link } from "react-router-dom";
import { REST_LIST_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";

const Body = () => {
  const [restList, setRestList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [serachedRestList, setsearchedResList] = useState([]);
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchRestaurantList();
  }, []);
  const { LoggedInUser, setUserName } = useContext(userContext);
  const WithPromotedLabelRes = withPromotedLabel(RestaurantCard);
  const fetchRestaurantList = async () => {
    const list = await fetch(REST_LIST_API);
    const jsondata = await list.json();
    setRestList(
      jsondata?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setsearchedResList(
      jsondata?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const filterTopRated = () => {
    const filteredList = restList.filter((res) => res.info.avgRating > 4.3);
    setRestList(filteredList);
  };

  if (!onlineStatus)
    return <h1>YOU are offline !! Please check your internet connection</h1>;

  return restList?.length === 0 ? (
    <p>Loading...</p>
  ) : (
    <div className="">
      <div className="flex p-4 m-4 ">
        <div>
          <input
            className="border rounded-lg mr-4 text-center text-sm h-10"
            type="text"
            name="search"
            placeholder="Search"
            onChange={(e) => setSearchText(e.target.value.toLowerCase())}
            value={searchText}
          />
          <button
            className="bg-green-200 rounded-lg px-4 py-2"
            onClick={() => {
              console.log(searchText);
              const searchedList = restList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setsearchedResList(searchedList);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex p-2 m-2 border border-solid-black">
          <input
            type="text"
            value={LoggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div className="filter">
          <button
            className="bg-green-200 rounded-lg px-4 py-2 ml-2"
            onClick={filterTopRated}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="flex flex-wrap">
        {serachedRestList?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurants/${restaurant.info.id}`}
          >
            {restaurant.info.type === "F" ? (
              <WithPromotedLabelRes resData={restaurant.info} />
            ) : (
              <RestaurantCard resData={restaurant.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
