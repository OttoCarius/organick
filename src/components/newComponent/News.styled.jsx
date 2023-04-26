import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NewsItemWrap = styled.li`
  width: 677px;
  height: 530px;
  background-color: #f9f8f8;
  box-shadow: 0px 5px 35px rgba(0, 0, 0, 0.55);
  border-radius: 50px;
  transition: 0.7s all ease;
  cursor: pointer;

  margin-bottom: 185px;
  :hover {
    background-color: #d4d2d2;
    box-shadow: 0px 10px 45px rgba(0, 0, 0, 0.45);
  }
  /* @media (max-width: 750px) {
    width: 160px;
  }
  @media (max-width: 530px) {
    width: 270px;
  } */

  h5 {
    position: absolute;
    z-index: 2;
    color: #ffffff;
    background-color: #274c5b;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border-radius: 10px;
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 18px;
    font-weight: 700;
    line-height: 25px;
    text-align: center;
    margin-top: 20px;
    margin-left: 20px;
  }
`;

export const NewsImg = styled.img`
  position: relative;
  background-color: #fff;
  width: 677px;
  height: 530px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  /* @media (max-width: 750px) {
    width: 160px;
    height: 180px;
  }
  @media (max-width: 530px) {
    width: 270px;
    height: 300px;
  } */
`;

export const NewsLink = styled(NavLink)`
  display: inline-block;
  background-color: #efd372;
  padding: 22px 45px;
  color: #274c5b;
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  border-radius: 16px;
  transition: background-color 0.7s ease;

  :hover {
    background-color: #faef57;
  }

  span {
    display: flex;
    gap: 10px;
  }
`;

export const NewInfoWrap = styled.div`
  position: absolute;
  padding: 45px 57px;
  background-color: #fff;
  margin-top: -180px;
  margin-left: 60px;
  border-radius: 30px;
  z-index: 1;
  box-shadow: 5px 5px 35px rgba(0, 0, 0, 0.55);

  h4 {
    color: #274c5b;
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
  }

  p {
    color: #274c5b;
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    max-width: 400px;
    margin-bottom: 15px;
  }

  h3 {
    color: #274c5b;
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 25px;
    font-weight: 800;
    line-height: 29px;
    margin-bottom: 5px;
  }
`;

export const PersonWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
`;
