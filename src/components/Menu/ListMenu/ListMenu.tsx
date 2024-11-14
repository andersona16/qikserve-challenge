import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

import { api } from "../../../services/api";
import { RootState } from "../../../store";
import { setOptionsProducts } from "../../../store/menuSlice";
import Modal from "../../Modal/Modal";
import {
  ContainerList,
  ContainerSections,
  ItemContainer,
  ItemDetails,
  ItemImage,
  SectionCard,
  SectionImage,
  SectionTitle,
  TitleContainer,
} from "./styles";

interface ModifierOption {
  id: number;
  name: string;
  price: number;
}

type MenuItem = {
  id: number;
  name: string;
  description?: string;
  price: number;
  images?: { id: number; image: string }[];
  modifiers?: { items: ModifierOption[] }[];
};

type Section = {
  id: number;
  name: string;
  items: MenuItem[];
  images: { image: string }[];
};

interface ListMenuProps {
  searchQuery: string;
}

const ListMenu: React.FC<ListMenuProps> = ({ searchQuery }) => {
  const dispatch = useDispatch();
  const sections = useSelector(
    (state: RootState) => state.menu.sections
  ) as Section[];
  const [selectedSectionId, setSelectedSectionId] = useState<number | null>(
    null
  );

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({
    Burgers: true,
    Drinks: true,
    Desserts: true,
  });

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

  const handleOpenModal = (item: MenuItem): void => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const filterItems = (items: MenuItem[]) => {
    if (!searchQuery) return items;
    return items.filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description &&
          item.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  };

  const toggleSectionExpansion = (sectionName: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionName]: !prev[sectionName],
    }));
  };

  const renderSectionItems = (sectionName: string, items: MenuItem[]) => {
    return filterItems(items).map((item) => {
      const cartItem = cartItems.find(
        (cartItem) => cartItem.id === `${item.id}-default`
      );
      const quantity = cartItem ? cartItem.quantity : 0;
      const modifier = cartItem?.modifier;

      return (
        <ItemContainer key={item.id} onClick={() => handleOpenModal(item)}>
          <ItemDetails>
            <div style={{ display: "flex", alignItems: "center" }}>
              {quantity > 0 && (
                <>
                  <span>{quantity}</span>
                  {modifier && <span> - {modifier}</span>}
                </>
              )}
              <h1>{item.name}</h1>
            </div>
            {item.description && <p>{item.description}</p>}
            <b>R$ {item.price.toFixed(2)}</b>
          </ItemDetails>

          {item.images && item.images.length > 0 && (
            <ItemImage src={item.images[0].image} alt={item.name} />
          )}
        </ItemContainer>
      );
    });
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
          {["Burgers", "Drinks", "Desserts"].map((sectionName) => {
            const section = sections.find((s) => s.name === sectionName);
            if (!section) return null;

            return (
              <div key={sectionName}>
                <TitleContainer
                  onClick={() => toggleSectionExpansion(sectionName)}
                >
                  <h1>{sectionName}</h1>
                  {expandedSections[sectionName] ? (
                    <IoIosArrowUp size={24} color="#4F372F" />
                  ) : (
                    <IoIosArrowDown size={24} color="#4F372F" />
                  )}
                </TitleContainer>
                {expandedSections[sectionName] &&
                  renderSectionItems(sectionName, section.items)}
              </div>
            );
          })}
        </div>
      )}

      {selectedItem && <Modal item={selectedItem} onClose={handleCloseModal} />}
    </ContainerList>
  );
};

export default ListMenu;
