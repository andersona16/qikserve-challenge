import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { setOptionsProducts } from "../../../store/menuSlice";
import { api } from "../../../services/api";
import styled from "styled-components";

const SectionTitle = styled.h1`
  font-size: 16px;
  color: #121212;
  line-height: 18.75px;
  letter-spacing: 0.5px;
  font-weight: 600;
  height: 38px;
`;

const ContainerSections = styled.div`
  display: flex;
  gap: 20px;
`;

const SectionCard = styled.div<{ isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 16px;
  border-bottom: ${(props) =>
    props.isSelected ? "2px solid #4f372f" : "6px solid transparent"};
`;

const SectionImage = styled.img<{ isSelected: boolean }>`
  width: 82px;
  height: 82px;
  border-radius: 50%;
  padding: 4px;
  object-fit: cover;
  transition: box-shadow 0.3s ease, border 0.3s ease;
  border: ${(props) =>
    props.isSelected ? "2px solid #4f372f" : "6px solid transparent"};
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ItemImage = styled.img`
  height: 85px;
  width: 128px;
  border-radius: 4px;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  > h1 {
    font-size: 16px;

    color: #121212;
    line-height: 18.75px;
    font-weight: 600;
  }

  > p {
    font-size: 16px;
    color: #464646;
    line-height: 18.75px;
    font-weight: 300;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 434px;
  }

  > b {
    font-size: 16px;
    font-weight: 600;
    line-height: 18.75px;
    letter-spacing: 0.5px;
  }
`;

const ContainerList = styled.div`
  display: flex;
  flex-direction: column;

  box-shadow: 0px 2px 14px 0px #00000024;

  background-color: #ffff;
`;

const ListMenu: React.FC = () => {
  const dispatch = useDispatch();
  const sections = useSelector((state: RootState) => state.menu.sections);
  const [selectedSectionId, setSelectedSectionId] = useState<number | null>(
    null
  );

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await api.get("/menu");
        dispatch(setOptionsProducts(response.data));
      } catch (error) {
        console.error("Erro ao carregar itens do menu:", error);
      }
    };
    fetchMenuItems();
  }, [dispatch]);

  useEffect(() => {
    if (sections.length > 0 && selectedSectionId === null) {
      setSelectedSectionId(sections[0].id);
    }
  }, [sections, selectedSectionId]);

  const handleSelectSection = (id: number) => {
    setSelectedSectionId(id);
  };

  const selectedSection = sections.find(
    (section) => section.id === selectedSectionId
  );

  return (
    <ContainerList>
      <ContainerSections>
        {sections.map((section) => (
          <SectionCard
            isSelected={section.id === selectedSectionId}
            key={section.id}
            onClick={() => handleSelectSection(section.id)}
          >
            <SectionImage
              src={section.images[0].image}
              alt={section.name}
              isSelected={section.id === selectedSectionId}
            />
            <SectionTitle>{section.name}</SectionTitle>
          </SectionCard>
        ))}
      </ContainerSections>

      {selectedSection && (
        <div style={{ display: "flex", flexDirection: "column", gap: "37px" }}>
          {selectedSection.items.map((item) => (
            <ItemContainer key={item.id}>
              <ItemDetails>
                <h1>{item.name}</h1>
                {item.description && <p>{item.description}</p>}
                <b>R$ {item.price.toFixed(2)}</b>
              </ItemDetails>

              {item.images && item.images.length > 0 && (
                <ItemImage src={item.images[0].image} alt={item.name} />
              )}
            </ItemContainer>
          ))}
        </div>
      )}
    </ContainerList>
  );
};

export default ListMenu;
