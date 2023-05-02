import styled from "styled-components";
import ServiceWrap from "../../../assets/img/Service/Service.png";

export const ServiceHeroWrap = styled.section`
  background-image: url(${ServiceWrap});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 450px;
  margin-bottom: 200px;
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
