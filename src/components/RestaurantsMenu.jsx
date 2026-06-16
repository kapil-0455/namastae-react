import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { URL_API_MENU } from "../utils/constants";

const RestaurantsMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchRestro();
  }, [resId]);

  const fetchRestro = async () => {
    try {
      const data = await fetch(URL_API_MENU + resId);
      const json = await data.json();
      setResInfo(json);
    } catch (error) {
      console.error("Error fetching menu data:", error);
    }
  };

  if (resInfo === null) return <Shimmer />;

  const info = resInfo?.data?.cards?.find((c) => c?.card?.card?.info)?.card?.card?.info;
  const { name, cuisines, costForTwoMessage, avgRating, totalRatingsString } = info || {};

  const regularCards = resInfo?.data?.cards?.find((c) => c?.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
  
  // Find the first category containing itemCards (usually "Recommended" or similar)
  const categoryCard = regularCards.find((c) => c?.card?.card?.itemCards);
  const categoryTitle = categoryCard?.card?.card?.title || "Recommended";
  const itemCards = categoryCard?.card?.card?.itemCards || [];

  return (
    <div className="menu-container">
      <div className="menu-header">
        <h1 className="restaurant-name">{name}</h1>
        <div className="restaurant-meta">
          <p className="cuisine-list">{cuisines?.join(", ")}</p>
          <p className="cost-message">{costForTwoMessage}</p>
          {avgRating && (
            <span className="rating-tag">
              ★ {avgRating} ({totalRatingsString || "100+ ratings"})
            </span>
          )}
        </div>
      </div>
      
      <div className="menu-items-section">
        <h2 className="category-title">{categoryTitle} ({itemCards.length})</h2>
        <ul className="menu-list">
          {itemCards.map((item) => {
            const { id, name, price, defaultPrice, description } = item?.card?.info || {};
            return (
              <li key={id} className="menu-item-card">
                <div className="menu-item-info">
                  <h3 className="item-name">{name}</h3>
                  <p className="item-price">
                    ₹{price ? price / 100 : defaultPrice / 100}
                  </p>
                  <p className="item-description">{description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantsMenu;
