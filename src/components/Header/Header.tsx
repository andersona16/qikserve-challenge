import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Banner, HeaderContainer, Navbar, NavItem } from "./styles";

const Header = () => {
  const { theme } = useSelector((state: RootState) => state.theme);
  const [activeItem, setActiveItem] = useState<string>("");

  if (!theme) {
    return <div>Carregando...</div>;
  }

  const handleMenuClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <HeaderContainer>
      <Navbar>
        <NavItem
          isActive={activeItem === "menu"}
          onClick={() => handleMenuClick("menu")}
        >
          Menu
        </NavItem>
        <NavItem
          isActive={activeItem === "entrar"}
          onClick={() => handleMenuClick("entrar")}
        >
          Entrar
        </NavItem>
        <NavItem
          isActive={activeItem === "contato"}
          onClick={() => handleMenuClick("contato")}
        >
          Contato
        </NavItem>
      </Navbar>

      <Banner src={theme.bannerImage} alt="Restaurant Banner" />
    </HeaderContainer>
  );
};

export default Header;
