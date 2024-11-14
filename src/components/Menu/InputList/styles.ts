import styled from "styled-components";

export const InputStyled = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid #8a94a4;
  border-radius: 8px;
  background: #ffffff;
  padding: 13px 11px;

  input {
    width: 100%;
    padding-left: 30px;
    border: none;
    outline: none;
    background: transparent;

    &::placeholder {
      color: #2c2c2c;
      font-weight: 500;
    }
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;
