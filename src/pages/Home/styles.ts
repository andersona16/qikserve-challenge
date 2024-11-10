import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-areas:
    "search search search"
    "menu menu cart";
  grid-template-columns: 1fr 300px 250px;
  grid-template-rows: auto auto 1fr;
  gap: 20px;
  padding: 20px;
  max-width: 1240px;
  margin: 0 auto;
`;

export const HeaderWrapper = styled.div`
  grid-area: header;
  width: 100%;
`;

export const SearchWrapper = styled.div`
  grid-area: search;
  width: 100%;
`;

export const MenuWrapper = styled.div`
  grid-area: menu;
  width: 100%;
`;

export const CartWrapper = styled.div`
  grid-area: cart;
  position: sticky;
  top: 20px;
  height: fit-content;
  background: white;
  border-radius: 8px;
  box-shadow: 0px 2px 14px 0px #00000024;
  padding: 16px;
`;
