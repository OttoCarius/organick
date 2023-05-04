import styled from "styled-components";

export const SingleNewImgWrap = styled.div`
  margin-top: -90px;
  position: relative;
  img {
    width: 100%;
    height: 780px;
  }

  margin-bottom: 340px;
`;

export const SingleNewInfoWrap = styled.div`
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
  flex-direction: column;

  align-items: flex-start;
  gap: 20px;

  @media (max-width: 650px) {
    padding-right: 10px;
    padding-left: 10px;
  }
`;

export const PostDateWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 18px;
    font-weight: 600;
    line-height: 21px;
    color: #274c5b;
  }

  h5 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 22px;
    font-weight: 600;
    line-height: 25px;
    color: #274c5b;
    margin-left: 20px;
  }
`;

export const TitleWrap = styled.div`
  h3 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 50px;
    font-weight: 800;
    line-height: 60px;
    color: #274c5b;
  }
`;

export const TextWrap = styled.div`
  p {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    color: #525c60;
  }
`;
