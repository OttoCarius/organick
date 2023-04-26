import styled from "styled-components";
import bg1 from "../../assets/img/BI1.png";
import bg2 from "../../assets/img/BI2.png";
import bg3 from "../../assets/img/BI3.png";

export const Banner2Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  background-color: #f1f8f4;
  padding: 187px 0;
`;

export const BannerOne = styled.div`
  background-image: url(${bg1});
  border-radius: 16px;
  width: 612px;
  height: 580px;

  display: flex;
  align-items: center;
  justify-content: center;

  p {
    display: inline-block;
    padding: 33px 83px;
    background-color: #fff;
    border-radius: 20px;

    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 25px;
    font-weight: 500;
    line-height: 29px;
    color: #274c5b;
  }
`;

export const BannerTwo = styled.div`
  background-image: url(${bg2});
  border-radius: 16px;
  width: 612px;
  height: 580px;

  display: flex;
  align-items: center;
  justify-content: center;

  p {
    display: inline-block;
    padding: 33px 83px;
    background-color: #fff;
    border-radius: 20px;

    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 25px;
    font-weight: 500;
    line-height: 29px;
    color: #274c5b;
  }
`;

export const BannerThree = styled.div`
  background-image: url(${bg3});
  border-radius: 16px;
  width: 612px;
  height: 580px;

  display: flex;
  align-items: center;
  justify-content: center;

  p {
    display: inline-block;
    padding: 33px 83px;
    background-color: #fff;
    border-radius: 20px;

    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 25px;
    font-weight: 500;
    line-height: 29px;
    color: #274c5b;
  }
`;
