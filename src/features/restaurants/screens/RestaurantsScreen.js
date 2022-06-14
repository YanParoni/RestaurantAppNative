import React, { useContext } from "react";
import { StatusBar, FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { RestaurantInfo } from "../components/RestaurantsInfo";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Search } from "../../../components/search/SearchComponent";
import { FavoritesBar } from "../../../components/favorites/FavoritesBar";
import { RestaurantContext } from "../../../services/contexts/restaurant/restaurants.context";
import { FavoritesContext } from "../../../services/contexts/favorites/favorites.context";

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`}
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantContext);
  const { favorites } = useContext(FavoritesContext);

  const [isToggled, setToggled] = React.useState(false);
  return (
    <StyledSafeAreaView>
      <Search toggled={isToggled} onToggle={() => setToggled(!isToggled)} />
      {isToggled && (
        <FavoritesBar favorites={favorites} onDetail={navigation.navigate} />
      )}
      {isLoading ? (
        <ActivityIndicator animating={true} color={Colors.red500} />
      ) : (
        <FlatList
          style={{ padding: 10 }}
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("RestaurantDetail", {
                      restaurant: item,
                    })
                  }
                >
                  <RestaurantInfo restaurant={item} />
                </TouchableOpacity>
              </>
            );
          }}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ padding: 5 }}
        />
      )}
    </StyledSafeAreaView>
  );
};
