import React, { useEffect, useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cartSlice";
import {
  AddToCartButton,
  CloseButton,
  ContainerOptions,
  ContainerSize,
  ContentContainer,
  Description,
  HiddenRadio,
  ItemImage,
  ModalContent,
  ModalOverlay,
  OptionLabel,
  OptionName,
  OptionPrice,
  Quantity,
  QuantityButton,
  QuantityContainer,
  RadioContainer,
  SizeOption,
  SizeSection,
  StyledRadio,
  Title,
} from "./styles";
import MobileCartModal from "../MobileCartModal/MobileCartModal";

interface ModifierOption {
  id: number;
  name: string;
  price: number;
}

interface MenuItem {
  id: number;
  name: string;
  description?: string;
  price: number;
  images?: { id: number; image: string }[];
  modifiers?: { items: ModifierOption[] }[];
}

interface ModalProps {
  item: MenuItem;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ item, onClose }) => {
  const dispatch = useDispatch();

  const hasModifiers = item.modifiers && item.modifiers.length > 0;
  const [selectedSize, setSelectedSize] = useState<ModifierOption | null>(
    hasModifiers ? item.modifiers[0].items[0] : null
  );
  const [quantity, setQuantity] = useState(1);
  const [selectedMeats, setSelectedMeats] = useState<number | null>(
    hasModifiers ? item.modifiers[0].items[0].id : null
  );

  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 425);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const basePrice = useMemo(() => {
    if (item.price === 0 && selectedSize) {
      return selectedSize.price;
    }
    return item.price;
  }, [item.price, selectedSize]);

  const totalPrice = useMemo(() => basePrice * quantity, [basePrice, quantity]);

  const handleAddToCart = () => {
    const uniqueId = `${item.id}-${selectedMeats || "default"}`;

    const selectedItem = {
      id: uniqueId,
      name: item.name,
      price: basePrice,
      quantity: quantity,
      modifier: selectedSize ? `${selectedSize.name}` : undefined,
    };

    dispatch(addItemToCart(selectedItem));

    if (isMobile) {
      setIsCartModalOpen(true);
    }
  };

  const handleCloseCartModal = () => {
    setIsCartModalOpen(false);
  };

  return (
    <>
      <ModalOverlay onClick={onClose}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={onClose}>×</CloseButton>
          {item.images?.[0] && (
            <ItemImage src={item.images[0].image} alt={item.name} />
          )}

          <ContentContainer>
            <div>
              <Title>{item.name}</Title>
              <Description>{item.description}</Description>
            </div>

            {hasModifiers && (
              <SizeSection>
                <ContainerSize>
                  <h1>Choose your size</h1>
                  <p>Select 1 option</p>
                </ContainerSize>

                <ContainerOptions>
                  {item.modifiers[0].items.map((option) => (
                    <SizeOption
                      key={option.id}
                      onClick={() => {
                        setSelectedMeats(option.id);
                        setSelectedSize(option);
                      }}
                    >
                      <RadioContainer>
                        <HiddenRadio
                          name="meats"
                          checked={selectedMeats === option.id}
                          onChange={() => {
                            setSelectedMeats(option.id);
                            setSelectedSize(option);
                          }}
                        />
                        <StyledRadio checked={selectedMeats === option.id} />
                      </RadioContainer>
                      <OptionLabel>
                        <OptionName>{option.name}</OptionName>
                        <OptionPrice>R${option.price.toFixed(2)}</OptionPrice>
                      </OptionLabel>
                    </SizeOption>
                  ))}
                </ContainerOptions>
              </SizeSection>
            )}

            <QuantityContainer>
              <QuantityButton
                onClick={() => setQuantity(quantity - 1)}
                disabled={quantity <= 1}
              >
                −
              </QuantityButton>
              <Quantity>{quantity}</Quantity>
              <QuantityButton onClick={() => setQuantity(quantity + 1)}>
                +
              </QuantityButton>
            </QuantityContainer>

            <ContainerOptions>
              <AddToCartButton onClick={handleAddToCart}>
                Adicionar ao Pedido • R$ {totalPrice.toFixed(2)}
              </AddToCartButton>
            </ContainerOptions>
          </ContentContainer>
        </ModalContent>
      </ModalOverlay>

      {/* Modal do carrinho (aparece quando for mobile e o item for adicionado ao carrinho) */}
      {isCartModalOpen && (
        <MobileCartModal
          cartItems={[
            {
              id: item.id.toString(),
              name: item.name,
              price: item.price,
              quantity: quantity,
            },
          ]}
          totalPrice={totalPrice}
          handleIncrement={() => {}}
          handleDecrement={() => {}}
          handleClose={handleCloseCartModal}
        />
      )}
    </>
  );
};

export default Modal;
