import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Cart from "../../components/Menu/Cart/Cart";
import InputList from "../../components/Menu/InputList/InputList";
import ListMenu from "../../components/Menu/ListMenu/ListMenu";
import {
  GridContainer,
  HeaderWrapper,
  SearchWrapper,
  MenuWrapper,
  CartWrapper,
} from "./styles";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>

      <SearchWrapper>
        <InputList onSearch={setSearchQuery} />
      </SearchWrapper>

      <GridContainer>
        <MenuWrapper>
          <ListMenu searchQuery={searchQuery} />
        </MenuWrapper>

        <CartWrapper>
          <Cart />
        </CartWrapper>
      </GridContainer>
    </>
  );
};

export default Home;
