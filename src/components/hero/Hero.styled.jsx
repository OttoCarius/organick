import styled from "styled-components";
import { Link } from "react-router-dom";
import heroWrap from "../../assets/img/hero.jpg";

export const HeroSection = styled.section`
  background-image: url(${heroWrap});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 840px;
  margin-bottom: 155px;
`;

export const HeroContainer = styled.div`
  padding-right: 30px;
  padding-left: 30px;
  max-width: 1400px;
  margin: 0 auto;
`;

export const HeroPreTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.pretitle};
  font-size: 36px;
  font-weight: 400;
  line-height: 49px;
  color: #68a47f;
  margin-bottom: 10px;
  padding-top: 220px;
`;

export const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.main};
  width: 530px;
  font-size: 70px;
  font-weight: 800;
  line-height: 82px;
  color: #274c5b;
  margin-bottom: 23px;
`;

export const HeroLink = styled(Link)`
  display: inline-block;
  background-color: #efd372;
  padding: 28px 39px;
  color: #274c5b;
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  border-radius: 16px;
  transition: background-color 0.7s ease;
  /* margin-bottom: 246px; */

  :hover {
    background-color: #fad240;
  }
`;

export const HeroSpan = styled.span`
  display: flex;
  gap: 10px;
`;
