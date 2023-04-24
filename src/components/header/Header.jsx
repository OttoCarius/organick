import React from "react";
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
} from "./Header.styled";
import logo from "../../assets/img/Logo.svg";
import { BsCart3 } from "react-icons/bs";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <NavLink to="/">
          <LogoImg src={logo} alt="Logo" height={54} width={36} /> Organick
        </NavLink>
      </Logo>
      <Navigate>
        <NavigateList>
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
          <BsCart3 color="white" size={30} />
        </CartLink>
        <CartSpan>Cart</CartSpan>
      </Cart>
    </HeaderContainer>
  );
};

export default Header;
