import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  Banner,
  HeaderContainer,
  Navbar,
  NavItem,
  NavItemsWrapper,
  HamburgerIcon,
  MenuLabel,
} from "./styles";

const Header = () => {
  const { theme } = useSelector((state: RootState) => state.theme);
  const [activeItem, setActiveItem] = useState<string>("menu");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  if (!theme) {
    return <div>Carregando...</div>;
  }

  const handleMenuClick = (item: string) => {
    setActiveItem(item);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <HeaderContainer>
      <Navbar>
        <div>
          <HamburgerIcon onClick={toggleMenu}>☰</HamburgerIcon>
          <MenuLabel onClick={toggleMenu}>Menu</MenuLabel>
        </div>
        <NavItemsWrapper isOpen={isMenuOpen}>
          <NavItem
            isActive={activeItem === "menu"}
            onClick={() => handleMenuClick("menu")}
          >
            Menu
          </NavItem>

          <NavItem isActive={activeItem === "entrar"}>Entrar</NavItem>

          <NavItem isActive={activeItem === "contato"}>Contato</NavItem>
        </NavItemsWrapper>
      </Navbar>

      <Banner src={theme.bannerImage} alt="Restaurant Banner" />
    </HeaderContainer>
  );
};

export default Header;
