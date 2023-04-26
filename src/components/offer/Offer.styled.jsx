import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const OfferSection = styled.section`
  background-color: #274c5b;
  height: 1050px;
`;

export const OfferWrapContainer = styled.div`
  padding-right: 30px;
  padding-left: 30px;
  max-width: 1400px;
  margin: 0 auto;
`;

export const OffersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextWrap = styled.div`
  p {
    font-family: ${({ theme }) => theme.fonts.pretitle};
    font-size: 36px;
    font-weight: 400;
    line-height: 49px;
    color: #7eb693;
    margin-bottom: 10px;
    margin-top: 200px;
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 50px;
    font-weight: 800;
    line-height: 59px;
    color: #fff;
    margin-bottom: 50px;
  }
`;

export const OfferLink = styled(NavLink)`
  display: inline-block;
  background-color: #efd372;
  padding: 28px 49px;
  color: #274c5b;
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  border-radius: 16px;
  transition: background-color 0.7s ease;

  :hover {
    background-color: #faef57;
  }

  span {
    display: flex;
    gap: 10px;
  }
  margin-top: 200px;
`;
