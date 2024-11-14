import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 16px;
  background-color: #f9f9f9;
  border-radius: 8px;
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
    font-size: 14px;
    color: #555;
  }

  > p {
    font-size: 14px;
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
