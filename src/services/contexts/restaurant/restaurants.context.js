import React, { useState, createContext, useEffect, useMemo,useContext} from "react";
import { restaurantRequest, transformData } from "./restaurant.service";
import { LocationContext } from "../geolocation/geolocation.context";
export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, seError] = useState(null);
  const { location } = useContext(LocationContext);
  const retrieveRestaurants = (location) => {
    setIsLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      restaurantRequest(location)
        .then(transformData)
        .then((restaurants) => {
          setIsLoading(false);
          setRestaurants(restaurants);
        });
    }, 1500);
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantContext.Provider value={{ restaurants, isLoading }}>
      {children}
    </RestaurantContext.Provider>
  );
};
