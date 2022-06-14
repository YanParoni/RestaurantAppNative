import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/utils/theme";
import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { RestaurantContextProvider } from "./src/services/contexts/restaurant/restaurants.context";
import { LocationContextProvider } from "./src/services/contexts/geolocation/geolocation.context";
import { FavoritesContextProvider } from "./src/services/contexts/favorites/favorites.context";

import { Navigator } from "./src/utils/navigation/app.navigator";

const firebaseConfig = {
  apiKey: "AIzaSyDyb9MAiHep7zSWdDWsVqqQQE6GfHIl1pc",
  authDomain: "restaurantes-app-teste-native.firebaseapp.com",
  projectId: "restaurantes-app-teste-native",
  storageBucket: "restaurantes-app-teste-native.appspot.com",
  messagingSenderId: "1027428917487",
  appId: "1:1027428917487:web:eace804a3b37cb4af9bb1a",
};

export default function App() {
  const [oswaldLoad] = useFonts({
    Oswald_400Regular,
  });

  const [latoLoad] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoad || !latoLoad) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <FavoritesContextProvider>
          <LocationContextProvider>
            <RestaurantContextProvider>
              <Navigator />
            </RestaurantContextProvider>
          </LocationContextProvider>
        </FavoritesContextProvider>
      </ThemeProvider>
    </>
  );
}
