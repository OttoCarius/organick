import styled from "styled-components";
import SingleShopWrap from "../../assets/img/SingleShopHero.png";

export const SingleShopHeroWrap = styled.section`
  background-image: url(${SingleShopWrap});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 450px;
  margin-bottom: 68px;
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
