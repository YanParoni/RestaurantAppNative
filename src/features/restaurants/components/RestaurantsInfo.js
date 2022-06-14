import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Text } from "../../../components/typography/TextComponent";
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  RatingContainer,
  IsOpenContainer,
  Adress,
} from "./RestaurantsInfoStyles";
import { FavoriteComponent } from "../../../components/favorites/FavoriteComponent";
import { View } from "react-native";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Don Gordão",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/02/pizza-with-ricotta-cheese-close-up-1024x683.jpg",
    ],
    vicinity = "Rua Gentil Braga, 632",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;
  const ratingArr = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5} style={{ backgroundColor: "white" }}>
      <View>
        <FavoriteComponent restaurant={restaurant} />
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      </View>

      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <RatingContainer>
            {ratingArr.map((_, i) => (
              <SvgXml key={i} width={22} height={22} xml={star} />
            ))}

            {isOpenNow && (
              <>
                <IsOpenContainer>
                  <SvgXml width={22} height={22} xml={open} />
                </IsOpenContainer>
              </>
            )}
          </RatingContainer>
        </Section>
        <Adress>{vicinity}</Adress>
      </Info>
    </RestaurantCard>
  );
};
