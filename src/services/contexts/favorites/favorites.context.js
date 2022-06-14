import React, { createContext, useState,useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavourites] = useState([]);

  const saveFav = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@favorites", jsonValue);
    } catch (e) {
      console.log(e);
    }
  };
  const getFav = async () => {
    try {
      const value = await AsyncStorage.getItem("@favorites");
      if(value!==null){
        setFavourites(JSON.parse(value))
      }
    } catch (e) {
      console.log(e);
    }
  };
  const add = (restaurant) => {
    setFavourites([...favorites, restaurant]);
  };

  const remove = (restaurant) => {
    const newFavourites = favorites.filter(
      (x) => x.placeId !== restaurant.placeId
    );
    setFavourites(newFavourites);
  };
  useEffect(()=>{
    getFav()
      },[])
  useEffect(()=>{
saveFav(favorites)
  },[favorites])
  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites: add,
        removeFromFavorites: remove,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
