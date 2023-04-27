import styled from "styled-components";
import img from "../../../assets/img/about/about2.png";

export const ChoseeSection = styled.section`
  background-color: #f9f8f8;
  width: 100%;
  padding: 190px 0;
  margin-bottom: 170px;
`;

export const ChoseeContainer = styled.div`
  padding-right: 30px;
  padding-left: 30px;
  max-width: 1400px;
  margin: 0 auto;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 51px;
`;

export const ChoseeInfoWrap = styled.div`
  h4 {
    font-family: ${({ theme }) => theme.fonts.pretitle};
    font-size: 36px;
    font-weight: 400;
    line-height: 49px;
    color: #7eb693;
    margin-bottom: 6px;
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 50px;
    font-weight: 800;
    line-height: 59px;
    color: #274c5b;
    margin-bottom: 20px;
    width: 530px;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 18px;
    font-weight: 400;
    line-height: 29px;
    color: #525c60;
    margin-bottom: 25px;
    max-width: 600px;
  }

  ul {
  }

  li {
    margin-bottom: 24px;
  }

  img {
    width: 19px;
    margin-right: 8px;
  }

  h5 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 20px;
    font-weight: 500;
    line-height: 23px;
    color: #274c5b;
  }

  div {
    display: flex;
    align-items: center;
    padding: 20px 50px 20px 20px;
    width: 330px;
    background: #ececec;
    border-radius: 49px;
    margin-bottom: 19px;
  }
`;

export const ChoseeText = styled.p`
  margin-left: 60px;
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 18px;
  font-weight: 400;
  line-height: 29px;
  color: #525c60;
  width: 440px;
`;

export const ChoseeImgWrap = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: contain;
  width: 678px;
  height: 600px;
`;

export const ChoseeImgContainer = styled.div`
  padding-right: 30px;
  padding-left: 30px;
  max-width: 1400px;
  margin: 0 auto;

  margin-top: 91px;

  ul {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 30px;
  }

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    padding: 50px 36px 19px 36px;
    background-color: #fff;
    border-radius: 18px;
  }

  span {
    padding: 18px 25px;
    background-color: #f9f8f8;
    border-radius: 40%;
    margin-bottom: 10px;
  }
  img {
    /* width: 46px;
    margin-bottom: 15px; */
  }

  h4 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 25px;
    font-weight: 800;
    line-height: 29px;
    color: #274c5b;
    margin-bottom: 14px;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 18px;
    font-weight: 400;
    line-height: 29px;
    color: #525c60;
    margin-bottom: 46px;
  }
`;
