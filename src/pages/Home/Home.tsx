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
  return (
    <>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>

      <GridContainer>
        <SearchWrapper>
          <InputList />
        </SearchWrapper>

        <MenuWrapper>
          <ListMenu />
        </MenuWrapper>

        <CartWrapper>
          <Cart />
        </CartWrapper>
      </GridContainer>
    </>
  );
};

export default Home;
