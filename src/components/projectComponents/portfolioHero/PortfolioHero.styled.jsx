import styled from "styled-components";
import PortfolioWrap from "../../../assets/portfolio/Portfolio.png";

export const PortfolioHeroWrap = styled.section`
  background-image: url(${PortfolioWrap});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 450px;
  margin-bottom: 120px;
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
`;
