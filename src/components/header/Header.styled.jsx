import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 75px 0 116px 0;
`;

export const LogoImg = styled.img``;

export const NavItem = styled.li`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 20px;
  font-weight: 700;
  line-height: 23.44px;
  color: #274c5b;
`;

export const Logo = styled.div`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 38px;
  font-weight: 700;
  line-height: 44px;
  color: #274c5b;
`;

export const Navigate = styled.div``;

export const NavigateList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

export const Cart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CartLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: #274c5b;
`;

export const CartSpan = styled.span`
  margin-left: 12px;
  color: #274c5b;
  font-size: 18px;
  font-weight: 600;
  line-height: 21px;
`;
