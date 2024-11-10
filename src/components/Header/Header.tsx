import { useState } from 'react';

import { useAppContext } from '../../contexts/AppContext';
import { Banner, HeaderContainer, Navbar, NavItem } from './styles';

const Header = () => {
  const { restaurantData } = useAppContext();
  const [activeItem, setActiveItem] = useState<string>("");

  if (!restaurantData) {
    return <div>Carregando...</div>;
  }

  const { webSettings } = restaurantData;

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

      <Banner src={webSettings.bannerImage} alt="Restaurant Banner" />
    </HeaderContainer>
  );
};

export default Header;
