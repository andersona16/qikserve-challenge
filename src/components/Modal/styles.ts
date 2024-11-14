import styled from "styled-components";

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
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

export const ItemImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const ContentContainer = styled.div`
  > div:nth-child(1) {
    padding: 16px;
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const ContainerOptions = styled.div`
  padding: 16px;
`;

export const ContainerSize = styled.div`
  background: #f8f9fa;

  padding: 16px 24px;

  > h1 {
    font-size: 16px;
    color: #464646;

    font-weight: 700;
  }
  > p {
    font-size: 16px;
    color: #5f5f5f;
    font-weight: 400;
  }
`;

export const Description = styled.p`
  color: #666;
  font-size: 14px;
  margin-bottom: 16px;
`;

export const SizeSection = styled.div`
  margin-bottom: 16px;
`;

export const SizeTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const SizeSubtitle = styled.p`
  font-size: 12px;
  color: #666;
  margin-bottom: 8px;
`;

export const SizeOption = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  margin-bottom: 8px;
  cursor: pointer;

  flex-direction: row-reverse;

  &:hover {
    border-color: #52372b;
  }
`;

export const RadioContainer = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 12px;
  position: relative;
`;

export const HiddenRadio = styled.input.attrs({ type: "radio" })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

export const StyledRadio = styled.div<{ checked: boolean }>`
  width: 20px;
  height: 20px;
  border: 3px solid ${(props) => (props.checked ? "##5F5F5F" : "#52372b")};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: "";
    width: 20px;
    height: 20px;
    background: #5f5f5f;

    border-radius: 50%;
    opacity: ${(props) => (props.checked ? 1 : 0)};
  }
`;

export const OptionLabel = styled.label`
  flex: 1;
  cursor: pointer;
`;

export const OptionName = styled.div`
  font-weight: 600;
`;

export const OptionPrice = styled.div`
  font-size: 14px;
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  border-radius: 8px;
  margin-bottom: 10px;
`;

export const QuantityButton = styled.button<{ disabled?: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background: #4f372f;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  color: #fff;
`;

export const Quantity = styled.span`
  font-size: 18px;
  min-width: 24px;
  text-align: center;
`;

export const AddToCartButton = styled.button`
  width: 100%;
  padding: 12px;

  background-color: #52372b;
  color: white;
  border: none;
  border-radius: 40px;
  font-weight: 500;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #3f2a20;
  }
`;
