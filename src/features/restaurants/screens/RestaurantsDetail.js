import React from "react";
import { RestaurantInfo } from "../components/RestaurantsInfo";
import { RestaurantDetailMenuList } from "../components/RestaurantDetailsMenu";

export const RestaurantDetail = ({ route }) => {
  const { restaurant } = route.params;
  
  return (
    <>
      <RestaurantInfo restaurant={restaurant} />
        <RestaurantDetailMenuList/>
    
    </>
  );
};
