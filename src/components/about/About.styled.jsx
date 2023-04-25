import styled from "styled-components";
import { Link } from "react-router-dom";
import bgAbout from "../../assets/img/about.png";

export const AboutSection = styled.section`
  background-color: #f9f8f8;
  height: 960px;
  margin-bottom: 170px;
`;

export const AboutContainer = styled.div`
  padding-right: 30px;
  padding-left: 30px;
  max-width: 1400px;
  margin: 0 auto;

  display: flex;
`;

export const AboutImgContainer = styled.div`
  background-image: url(${bgAbout});
  background-color: #f9f8f8;
  background-repeat: no-repeat;
  background-position: -100px center;
  height: 911px;
  width: 800px;

  margin-right: 40px;
`;

export const AboutTextContainer = styled.div`
  width: 48%;

  h2 {
    font-family: ${({ theme }) => theme.fonts.main};
    width: 530px;
    font-size: 50px;
    font-weight: 800;
    line-height: 59px;
    color: #274c5b;
    margin-bottom: 14px;
  }

  ul {
  }

  li {
    display: flex;
    margin-bottom: 32px;
  }

  img {
    margin-right: 19px;
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 25px;
    font-weight: 800;
    line-height: 29px;
    color: #274c5b;
    margin-bottom: 12px;
  }
`;

export const PreTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.pretitle};
  font-size: 36px;
  font-weight: 400;
  line-height: 49px;
  color: #7eb693;
  margin-bottom: 10px;

  margin-top: 110px;
`;

export const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 18px;
  font-weight: 400;
  line-height: 29px;
  color: #525c60;
  margin-bottom: 46px;
`;

export const Text2 = styled.p`
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 18px;
  font-weight: 400;
  line-height: 29px;
`;

export const AboutLink = styled(Link)`
  display: inline-block;
  background-color: #274c5b;
  padding: 28px 49px;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  border-radius: 16px;
  transition: background-color 0.7s ease;

  margin-top: 46px;

  :hover {
    background-color: #183541;
  }

  span {
    display: flex;
    gap: 10px;
  }
`;
