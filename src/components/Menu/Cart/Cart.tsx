import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import {
  incrementItemQuantity,
  decrementItemQuantity,
} from "../../../store/cartSlice";
import {
  Button,
  CartContainer,
  CartItem,
  ItemDetails,
  QuantityControls,
  TotalPrice,
} from "./styles";

const Cart: React.FC = () => {
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
    <CartContainer>
      <h1>Carrinho</h1>
      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio</p>
      ) : (
        cartItems.map((item) => (
          <CartItem key={item.id}>
            <ItemDetails>
              <div>
                <div>
                  <h2>{item.name}</h2>
                  <p>{item.modifier && `Com : ${item.modifier}`}</p>
                </div>

                <b>R$ {(item.price * item.quantity).toFixed(2)}</b>
              </div>

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
    </CartContainer>
  );
};

export default Cart;
