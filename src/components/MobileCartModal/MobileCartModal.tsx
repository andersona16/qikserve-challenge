import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store";
import {
  decrementItemQuantity,
  incrementItemQuantity,
} from "../../store/cartSlice";
import {
  Button,
  CartItem,
  CloseButton,
  ContainerHeader,
  ItemDetails,
  ModalContent,
  ModalOverlay,
  QuantityControls,
  TotalPrice,
} from "./styles";

interface MobileCartModalProps {
  cartItems: {
    id: string;
    name: string;
    price: number;
    quantity: number;
  }[];
  totalPrice: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
  handleClose: () => void;
}

const MobileCartModal: React.FC<MobileCartModalProps> = ({ handleClose }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);

  const handleIncrement = (itemId: string) => {
    dispatch(incrementItemQuantity(itemId));
  };

  const handleDecrement = (itemId: string) => {
    dispatch(decrementItemQuantity(itemId));
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={handleClose}>×</CloseButton>
        <ContainerHeader>
          <h1>Basket</h1>
        </ContainerHeader>
        {cartItems.length === 0 ? (
          <p>Seu carrinho está vazio</p>
        ) : (
          cartItems.map((item) => (
            <CartItem key={item.id}>
              <ItemDetails>
                <div>
                  <h2>{item.name}</h2>
                  <b>R$ {(item.price * item.quantity).toFixed(2)}</b>
                </div>
                {item.modifier && <p>Com: {item.modifier}</p>}

                <QuantityControls>
                  <Button onClick={() => handleDecrement(item.id)}>-</Button>
                  <span>{item.quantity}</span>
                  <Button onClick={() => handleIncrement(item.id)}>+</Button>
                </QuantityControls>
              </ItemDetails>
            </CartItem>
          ))
        )}

        {cartItems.length > 0 && (
          <TotalPrice>
            Total: <b>R$ {totalPrice.toFixed(2)}</b>
          </TotalPrice>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

export default MobileCartModal;
