import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 16px;
  background-color: #f9f9f9;
  border-radius: 8px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  cursor: pointer;
  z-index: 1;

  color: #4f372f;

  background: white;
`;

export const ModalContent = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 425px) {
    border-radius: 0;
    width: 100%;
    max-width: 100%;

    padding: 16px 16px;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;

  @media screen and (max-width: 425px) {
    background-color: #fff;
    align-items: baseline;
  }
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #ddd;
`;

export const ItemDetails = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  gap: 10px;

  > div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  }

  > h2 {
    font-size: 16px;
    margin: 0;
  }

  > b {
    font-size: 16px;
    color: #555;
  }

  > p {
    font-size: 16px;
    color: #888;
  }
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Button = styled.button`
  background-color: #4f372f;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;

  height: 20px;
  width: 20px;

  font-size: 20px;

  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #3e2d24;
  }
`;

export const TotalPrice = styled.div`
  font-size: 18px;
  text-align: right;
  margin-top: 20px;

  display: flex;
  justify-content: space-between;
`;

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 23px;

  > h1 {
    text-align: center;
  }
`;
