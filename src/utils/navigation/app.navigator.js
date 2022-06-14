import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "../../components/typography/TextComponent";
import { RestaurantsNavigator } from "./restaurant.navigator";
import { MapScreen } from "../../features/map/screens/MapScreen";

export const Navigator = () => {
  const Tab = createBottomTabNavigator();
  const Settings = () => <Text>Settings</Text>;
  const TAB_ICONS = {
    Restaurants: "restaurant",
    Map: "map",
    Settings: "settings",
  };

  const screenOptions = ({ route }) => {
    const icon = TAB_ICONS[route.name];
    return {
      tabBarIcon: ({ size, color }) => {
        return <Ionicons name={icon} size={size} color={color} />;
      },
      tabBarActiveTintColor: "tomato",
      tabBarInactiveTintColor: "gray",
      headerShown: false,
    };
  };
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
