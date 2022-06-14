import React from "react";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";
const items = [
  {
    title: "Breakfast",
    icon: "food-variant",
  },
  {
    title: "Lunch",
    icon: "bread-slice",
  },
  {
    title: "Dinner",
    icon: "hamburger",
  },
  {
    title: "Drinks",
    icon: "glass-wine",
  },
];

export const RestaurantDetailMenu = ({ item }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handlePress = () => setExpanded(!expanded);
  return (
    <List.Accordion
      title={item.title}
      expanded={expanded}
      onPress={handlePress}
      left={(props) => <List.Icon {...props} icon={item.icon} />}
    >
      <List.Item title="First item" />
      <List.Item title="Second item" />
    </List.Accordion>
  );
};
export const RestaurantDetailMenuList = () => {
  return (
    <ScrollView>
      <List.Section>
        {items.map((item,id)=>{
            return(
        <RestaurantDetailMenu key={id} item={item} />
        )
        })}
      </List.Section>
    </ScrollView>
  );
};
