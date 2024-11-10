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
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.navBackgroundColor};
`;

export const NavItem = styled.a<{ isActive: boolean }>`
  color: ${({ theme }) => theme.backgroundColour};

  font-size: 20px;
  transition: background-color 0.3s ease;

  text-transform: uppercase;

  padding: 14px 0px 10px 0px;

  width: 234px;

  cursor: pointer;

  letter-spacing: 0.5px;

  ${({ isActive, theme }) =>
    isActive &&
    `
    border-bottom: 5px solid ${theme.backgroundColour}; 
  `}
`;
