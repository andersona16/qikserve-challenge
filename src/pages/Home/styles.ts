import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-areas: "menu menu cart";
  grid-template-columns: 1fr 300px 320px;
  grid-template-rows: auto auto 1fr;
  gap: 20px;
  padding: 32px 40px;
  max-width: 1240px;
  margin: 0 auto;

  background: #f8f9fa;

  @media screen and (max-width: 425px) {
    grid-template-areas: "menu";
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    gap: 20px;
    padding: 16px 20px;
    background: #fff;
  }
`;

export const HeaderWrapper = styled.div`
  grid-area: header;
  width: 100%;
`;

export const SearchWrapper = styled.div`
  width: 100%;

  max-width: 1240px;
  margin: 0 auto;

  padding: 6px 16px;
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

  @media screen and (max-width: 425px) {
    display: none;
  }
`;
