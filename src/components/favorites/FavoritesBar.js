import React from "react";
import { Text } from "../typography/TextComponent";
import styled from "styled-components/native";
import { ScrollView, View,TouchableOpacity } from "react-native";
import { MapCalloutRestaurant } from "../../features/map/components/MapCallout";
const FavoritesWrapper = styled.View`
  paddingTop: 5px;
  
`;
export const FavoritesBar = ({ favorites,onDetail }) => {
  return (
    <>
      <FavoritesWrapper>
          <Text 
          style={{marginLeft:15,color:'red'}}
          variant='caption'>
              Favorites
          </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {favorites.map((restaurant) => {
            return (<>
                <TouchableOpacity onPress={()=>onDetail("RestaurantDetail", {
                    restaurant,
                 })
               }>
              <View style={{marginLeft:13,}}>
                 
                <MapCalloutRestaurant restaurant={restaurant} />
              </View>
              </TouchableOpacity>
              </>
            );
          })}
        </ScrollView>
      </FavoritesWrapper>
    </>
  );
};
