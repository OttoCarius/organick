import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HeaderContainer,
  Logo,
  LogoImg,
  Navigate,
  Cart,
  NavigateList,
  NavItem,
  CartLink,
  CartSpan,
  NavLinkTwo,
  BurgerMenu,
} from "./Header.styled";
import logo from "../../assets/img/Logo.svg";
import { BsCart3 } from "react-icons/bs";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <HeaderContainer>
      <BurgerMenu open={open} onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </BurgerMenu>
      <Logo>
        <NavLink to="/">
          <LogoImg src={logo} alt="Logo" height={54} width={36} /> Organick
        </NavLink>
      </Logo>

      <Navigate>
        <NavigateList open={open}>
          <NavLinkTwo to="/">
            <LogoImg src={logo} alt="Logo" height={54} width={36} /> Organick
          </NavLinkTwo>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="shop">Shop</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="projects">Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="services">Services</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="news">News</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="team">Our Team</NavLink>
          </NavItem>
        </NavigateList>
      </Navigate>
      <Cart>
        <CartLink>
          <BsCart3 color="white" size={26} />
        </CartLink>
        <CartSpan></CartSpan>
      </Cart>
    </HeaderContainer>
  );
};

export default Header;
