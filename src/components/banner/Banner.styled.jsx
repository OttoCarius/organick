import styled from "styled-components";
import banner1 from "../../assets/img/banner1.jpg";
import banner2 from "../../assets/img/banner2.jpg";

export const BannerContainer = styled.div`
  padding-right: 30px;
  padding-left: 30px;
  max-width: 1400px;
  margin: 0 auto;
  margin-bottom: 190px;

  display: flex;
  gap: 36px;
`;

export const Banner1 = styled.div`
  background-image: url(${banner1});
  border-radius: 16px;
  width: 682px;
  height: 367px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    font-family: ${({ theme }) => theme.fonts.pretitle};
    font-size: 36px;
    font-weight: 400;
    line-height: 49px;
    color: #ffffff;
    margin-left: 55px;
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 40px;
    font-weight: 800;
    line-height: 47px;
    color: #ffffff;
    margin-left: 55px;
  }
`;

export const Banner2 = styled.div`
  background-image: url(${banner2});
  border-radius: 16px;
  width: 682px;
  height: 367px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    font-family: ${({ theme }) => theme.fonts.pretitle};
    font-size: 36px;
    font-weight: 400;
    line-height: 49px;
    color: #7eb693;
    margin-left: 55px;
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 40px;
    font-weight: 800;
    line-height: 47px;
    color: #7eb693;
    margin-left: 55px;
  }
`;
