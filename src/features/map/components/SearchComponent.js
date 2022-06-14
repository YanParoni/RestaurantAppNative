import React, { useState, useEffect, useContext } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/contexts/geolocation/geolocation.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  position:absolute;
  z-index:10;
  top:30px;
  width:100%
`;

export const SearchMap = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword)
  }, [keyword])
  
  return (
    <SearchContainer>
      <Searchbar
        icon='map'
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
