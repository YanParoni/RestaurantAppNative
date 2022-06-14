import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  marginBottom: ${(props) => props.theme.space[2]};

`;
export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};

`;
export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
export const Adress = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  paddingTop: ${(props) => props.theme.space[1]};

`;
export const RatingContainer = styled.View`
  display: flex;
  flex-direction: row;
  paddingTop: ${(props) => props.theme.space[2]};

`;

export const IsOpenContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;
