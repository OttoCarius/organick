import styled from "styled-components";

export const ServiceInfoWrap = styled.div`
  padding-right: 30px;
  padding-left: 30px;
  max-width: 1400px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (max-width: 650px) {
    padding-right: 10px;
    padding-left: 10px;
  }

  margin-bottom: 90px;

  h4 {
    font-family: ${({ theme }) => theme.fonts.pretitle};
    font-size: 36px;
    font-weight: 400;
    line-height: 49px;
    color: #7eb693;
    text-align: center;
  }

  h2 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 50px;
    font-weight: 800;
    line-height: 59px;
    color: #274c5b;
    text-align: center;
  }
`;

export const ServiceInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h5 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 25px;
    font-weight: 500;
    line-height: 29px;
    color: #274c5b;
    margin-bottom: 6px;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 18px;
    font-weight: 400;
    line-height: 29px;
    color: #525c60;
  }

  img {
    margin-bottom: 6px;
  }
`;

export const ListOne = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;

  li {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  p {
    width: 390px;
    text-align: end;
  }
`;

export const ListTwo = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;

  li {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  p {
    width: 390px;
  }
`;

export const ProductImg = styled.img`
  height: 800px;
`;
