import React, { useEffect } from "react";
import { useState } from "react";

import ResCard from "./Restaurant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listRestaurants, setListRestaurants] = useState([]);
  const [filterdData, setFilterdData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001",
      );

      const json = await data.json();
      console.log("Fetched JSON:", json);

      // Optional chaining to find the correct restaurant card
      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
        [];

      setListRestaurants(restaurants);
      setFilterdData(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (listRestaurants.length === 0) {
    return <Shimmer></Shimmer>;
  }
  return (
    <div className="body">
      <div className="filter-container">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search restaurants..."
            value={searchText}
            className="search-input"
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button
            className="btn-search"
            onClick={() => {
              const filterData = listRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );

              setFilterdData(filterData);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="btn-filter"
          onClick={() => {
            console.log("Button Clicked!");
            const filteredList = listRestaurants.filter(
              (res) => res.info.avgRating > 4.3,
            );
            console.log("Filtered List:", filteredList);
            setFilterdData(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filterdData.map((restaurant) => {
          return (
            <Link
              className="res-link"
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <ResCard resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
