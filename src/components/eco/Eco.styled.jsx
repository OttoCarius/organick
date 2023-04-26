import styled from "styled-components";
import bgEco from "../../assets/img/eco-bg.png";

export const EcoSection = styled.section`
  background-image: url(${bgEco});
  background-color: #f9f8f8;
  background-repeat: no-repeat;
  background-position: left center;
  height: 933px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EcoWrap = styled.div`
  padding: 78px 90px;
  background-color: #fff;
  margin-left: 560px;
  border-radius: 30px;
  box-shadow: 0px 5px 35px rgba(0, 0, 0, 0.55);

  h5 {
    font-family: ${({ theme }) => theme.fonts.pretitle};
    font-size: 36px;
    font-weight: 400;
    line-height: 49px;
    color: #7eb693;
    margin-bottom: 10px;
  }

  h2 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 50px;
    font-weight: 800;
    line-height: 59px;
    color: #274c5b;
    margin-bottom: 35px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 35px;
  }

  li {
  }

  h4 {
    font-size: 25px;
    font-weight: 800;
    line-height: 29px;
    color: #274c5b;
    margin-bottom: 7px;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 18px;
    font-weight: 400;
    line-height: 29px;
    color: #525c60;
    max-width: 630px;
  }
`;
