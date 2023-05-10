import styled from "styled-components";
import HeroWrap from "../../../assets/img/ContactHero.png";

export const ContactUsHeroWrap = styled.section`
  background-image: url(${HeroWrap});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 450px;
  margin-bottom: 140px;
  margin-top: -60px;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 70px;
    font-weight: 800;
    line-height: 82px;
    color: #274c5b;
  }

  @media (max-width: 1200px) {
    margin-bottom: 100px;
  }

  @media (max-width: 680px) {
    margin-bottom: 70px;
  }
`;
