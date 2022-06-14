import React from "react";
import { RestaurantsScreen } from "../../features/restaurants/screens/RestaurantsScreen";
import { createStackNavigator,TransitionPresets } from "@react-navigation/stack";
import { RestaurantDetail } from "../../features/restaurants/screens/RestaurantsDetail";
const RestaurantsStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantsStack.Navigator screenOptions={{ ...TransitionPresets.ModalPresentationIOS,headerShown: false }}>
      <RestaurantsStack.Screen
        name="Restaurant"
        component={RestaurantsScreen}
      />
      <RestaurantsStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetail}
      />
    </RestaurantsStack.Navigator>
  );
};
