import styled from "styled-components";

export const SectionTitle = styled.h1`
  font-size: 16px;
  color: #121212;
  line-height: 18.75px;
  letter-spacing: 0.5px;
  font-weight: 600;
  height: 38px;
  text-align: center;
  margin-top: 10px;
`;

export const ContainerSections = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
`;

export const SectionCard = styled.div<{ isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 8px;
  border-bottom: ${(props) =>
    props.isSelected ? "2px solid #4f372f" : "2px solid transparent"};
`;

export const SectionImage = styled.img<{ isSelected: boolean }>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  padding: 4px;
  object-fit: cover;
  transition: box-shadow 0.3s ease, border 0.3s ease;
  border: ${(props) =>
    props.isSelected ? "2px solid #4f372f" : "2px solid transparent"};
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;

  cursor: pointer;

  margin-bottom: 20px;
`;

export const ItemImage = styled.img`
  height: auto;
  width: 128px;
  border-radius: 4px;
  object-fit: cover;
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: 362px;

  @media screen and (max-width: 425px) {
    max-width: 200px;
  }

  > div:nth-child(1) {
    display: flex;
    gap: 8px;

    > h1 {
      font-size: 16px;
      color: #121212;
      line-height: 18.75px;
      font-weight: 600;
      margin: 0;

      display: flex;
      gap: 8px;
    }

    > span {
      border-radius: 4px;
      padding: 1px 4px 1px 4px;

      background: #4f372f;

      color: #fff;
    }
  }

  > p {
    font-size: 14px;
    color: #464646;
    line-height: 18px;
    font-weight: 300;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
  }

  > b {
    font-size: 16px;
    font-weight: 600;
    line-height: 18.75px;
    letter-spacing: 0.5px;
    color: #333;
  }
`;

export const ContainerList = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 14px 0px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  padding: 16px;
  border-radius: 8px;

  @media screen and (max-width: 425px) {
    box-shadow: none;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  margin-bottom: 10px;

  > h1 {
    font-size: 24;
    font-weight: 500;
    line-height: 28.13px;

    color: #121212;
  }
`;
