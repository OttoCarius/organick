import styled from "styled-components";

export const SingleProjImgWrap = styled.div`
  margin-top: -90px;
  position: relative;
  img {
    width: 100%;
    height: 780px;
  }

  margin-bottom: 340px;
`;

export const SingleProjInfoWrap = styled.div`
  padding-right: 30px;
  padding-left: 30px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 97px 111px 97px 83px;
  border-radius: 36px;
  background-color: #f9f8f8;
  box-shadow: 0px 5px 35px rgba(0, 0, 0, 0.55);

  position: absolute;
  top: 800px;
  left: 340px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: 650px) {
    padding-right: 10px;
    padding-left: 10px;
  }

  h2 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 70px;
    font-weight: 800;
    line-height: 82px;
    color: #274c5b;
    margin-bottom: 20px;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 18px;
    font-weight: 400;
    line-height: 32px;
    color: #525c60;

    max-width: 700px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  li {
    display: flex;
  }

  h5 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 25px;
    font-weight: 500;
    line-height: 29px;
    color: #274c5b;
  }

  h6 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 18px;
    font-weight: 400;
    line-height: 32px;
    color: #525c60;
  }
`;
