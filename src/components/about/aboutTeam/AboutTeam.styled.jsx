import styled from "styled-components";

export const TeamContainer = styled.div`
  padding-right: 30px;
  padding-left: 30px;
  max-width: 1400px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  h5 {
    font-family: ${({ theme }) => theme.fonts.pretitle};
    font-size: 36px;
    font-weight: 400;
    line-height: 49px;
    color: #7eb693;
    margin-bottom: 10px;
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 50px;
    font-weight: 800;
    line-height: 59px;
    color: #274c5b;
    margin-bottom: 20px;
  }
`;

export const TeamText = styled.p`
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 18px;
  font-weight: 400;
  line-height: 29px;
  color: #525c60;
  margin-bottom: 42px;
  max-width: 800px;
`;

export const ImgWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 27px;

  img {
    border-radius: 20px;
    width: 400px;
  }
`;

export const PersonInfoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: flex-end;

  background-color: #f9f8f8;
  border-radius: 20px;
  margin-bottom: 180px;
  padding: 0 28px;
  box-shadow: 0px 10px 45px rgba(0, 0, 0, 0.45);

  h4 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 25px;
    font-weight: 800;
    line-height: 29px;
    color: #274c5b;
    margin-bottom: 10px;
    margin-top: 35px;
  }

  ul {
    display: flex;
    gap: 17px;
  }

  li {
    padding-bottom: 14px;
    cursor: pointer;
  }
`;

export const PreTitleInfo = styled.p`
  font-family: ${({ theme }) => theme.fonts.pretitle};
  font-size: 22px;
  font-weight: 400;
  line-height: 29px;
  color: #7eb693;
  margin-bottom: 10px;
`;
