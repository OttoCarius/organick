import styled from "styled-components";
import bgPreFooter from "../../assets/img/PreFooter.png";

export const PreFooterContainer = styled.div`
  padding-right: 30px;
  padding-left: 30px;
  max-width: 1400px;
  margin: 0 auto;

  background-image: url(${bgPreFooter});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 323px;
  margin-bottom: 117px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 50px;
    font-weight: 800;
    line-height: 59px;
    color: #fff;
  }

  input {
    padding: 28px 100px 28px 23px;
    border-radius: 20px;
    border: none;
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 22px;
    font-weight: 500;
    line-height: 21px;
    color: #000;
    margin-right: 10px;

    ::placeholder {
      font-family: ${({ theme }) => theme.fonts.text};
      font-size: 18px;
      font-weight: 400;
      line-height: 21px;
      color: #ababab;
    }
  }

  button {
    padding: 32px 47px;
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 20px;
    font-weight: 700;
    line-height: 23px;
    color: #fff;
    background-color: #274c5b;
    border-radius: 10px;
    border: none;
    transition: background-color 0.7s ease;

    :hover {
      background-color: #183541;
    }
  }
`;

export const InputWrap = styled.div`
  display: flex;
  align-items: center;
`;
