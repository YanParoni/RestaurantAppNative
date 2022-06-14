import React from "react";
import { Platform } from "react-native";
import { Text } from "../../../components/typography/TextComponent";
import {CalloutImage,Item,WebViewImg} from './CalloutComponentStyles'

const isAndroid = Platform.OS ==='android'

export const CalloutComponent = ({ restaurant,isMap }) => {
    const Image = isMap && isAndroid? WebViewImg : CalloutImage
  return (
    <>
      <Item>

        <Image source={{uri:restaurant.photos[0]}}  />
        <Text center variant="caption" numberOfLines={3}>
          {restaurant.name}
        </Text>
      </Item>
    </>
  );
};
