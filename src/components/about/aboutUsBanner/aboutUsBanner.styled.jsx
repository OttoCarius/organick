import styled from "styled-components";

export const AboutUsBannerSection = styled.section`
  width: 100%;
  background-color: #274c5b;

  padding: 180px 0;
  margin-bottom: 141px;
`;

export const AboutUsBannerContainer = styled.div`
  padding-right: 30px;
  padding-left: 30px;
  max-width: 1400px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  h3 {
    font-family: ${({ theme }) => theme.fonts.pretitle};
    font-size: 36px;
    font-weight: 400;
    line-height: 49px;
    color: #7eb693;
    margin-bottom: 10px;
  }

  h2 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 50px;
    font-weight: 800;
    line-height: 59px;
    color: #ffff;
    margin-bottom: 33px;
  }

  ul {
    display: flex;
    gap: 21px;
  }

  li {
  }

  img {
    border-radius: 30px;
    height: 300px;
    width: 300px;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 25px;
    font-weight: 800;
    line-height: 29px;
    color: #ffff;
    margin-top: 24px;
  }
`;
