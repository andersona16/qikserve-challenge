import styled from "styled-components";

export const HeaderContainer = styled.header`
  color: #fff;
  text-align: center;
`;

export const Banner = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  max-height: 300px;

  @media screen and (max-width: 425px) {
    height: 150px;
  }
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.navBackgroundColor};
  padding: 10px 20px;

  @media screen and (max-width: 425px) {
    padding: 18px;
    display: flex;
    justify-content: center;
    position: relative;
  }
`;

export const HamburgerIcon = styled.div`
  display: none;
  font-size: 28px;
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);

  @media screen and (max-width: 425px) {
    display: block;
  }
`;

export const MenuLabel = styled.div`
  display: none;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;

  @media screen and (max-width: 425px) {
    display: inline-block;

    font-size: 18px;
  }
`;

export const NavItemsWrapper = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 50%;
  position: relative;

  @media screen and (max-width: 425px) {
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.navBackgroundColor};
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    padding: 20px;
    text-align: center;
  }
`;

export const NavItem = styled.a<{ isActive: boolean }>`
  color: ${({ theme }) => theme.backgroundColour};
  font-size: 16px;
  transition: background-color 0.3s ease;
  text-transform: uppercase;
  padding: 14px 0px 10px 0px;
  cursor: pointer;
  letter-spacing: 0.5px;
  width: 100%;

  ${({ isActive, theme }) =>
    isActive && `border-bottom: 5px solid ${theme.backgroundColour};`}

  @media screen and (max-width: 425px) {
    font-size: 14px;
    padding: 10px 0;
  }
`;
