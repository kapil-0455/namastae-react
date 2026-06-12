import React, { useEffect } from "react";
import { useState } from "react";
 
import ResCard from "./Restaurant";
import Shimmer from "./Shimmer"

const Body = () => {

    const [listRestaurants , setListRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
    } , []);

    const fetchData = async () => {
        try {
            const data = await fetch(
                "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001"
            );

            const json = await data.json();
            console.log("Fetched JSON:", json);

            // Optional chaining to find the correct restaurant card
            const restaurants =
                json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
                json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
                [];

            setListRestaurants(restaurants);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    if(listRestaurants.length === 0){
        return <Shimmer></Shimmer>
    }
    return (
        <div className="body">
            <div className="search">
                <button onClick={() => {
                    console.log("Button Clicked!");
                    const filteredList = listRestaurants.filter(
                        (res) => res.info.avgRating > 4.3
                    );
                    console.log("Filtered List:", filteredList);
                    setListRestaurants(filteredList);
                }}>
                    Tap to search top Rated
                </button>
            </div>
            <div className="res-container">
                {listRestaurants.map((restaurant) => {
                     return <ResCard key={restaurant.info.id} resData={restaurant}/>;
                })}
            </div>
        </div>
    );
};

export default Body;