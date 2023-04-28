import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const FooterContainer = styled.div`
  padding-right: 30px;
  padding-left: 30px;
  max-width: 1400px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  margin-bottom: 138px;

  @media (max-width: 1120px) {
    margin-bottom: 2px;
  }

  @media (max-width: 660px) {
    justify-content: center;
    align-items: center;
  }
`;

export const ContactWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 51px;
  border-right: 1px solid #d4d4d4;

  @media (max-width: 1120px) {
    align-items: center;
    padding-right: 21px;
  }

  @media (max-width: 660px) {
    display: none;
  }

  h3 {
    margin-bottom: 32px;
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 30px;
    font-weight: 700;
    line-height: 35px;
    color: #274c5b;

    @media (max-width: 1120px) {
      margin-bottom: 28px;
      font-size: 24px;
      line-height: 30px;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 30px;

    @media (max-width: 1120px) {
      align-items: flex-start;
      gap: 20px;
    }
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @media (max-width: 1120px) {
      align-items: flex-start;
      gap: 20px;
    }
  }

  h4 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 18px;
    font-weight: 700;
    line-height: 30px;
    color: #525c60;

    @media (max-width: 1120px) {
      font-size: 16px;
      font-weight: 600;
      line-height: 22px;
    }
  }

  p {
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 18px;
    font-weight: 400;
    line-height: 29px;
    color: #525c60;

    @media (max-width: 1120px) {
      width: 180px;
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
    }
  }
`;

export const LogoWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    max-width: 480px;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    color: #525c60;
    margin-bottom: 50px;

    @media (max-width: 1120px) {
      max-width: 300px;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      margin-bottom: 40px;
    }

    @media (max-width: 660px) {
      max-width: 600px;
      font-size: 18px;
      font-weight: 400;
      line-height: 17px;
      margin-bottom: 50px;
    }
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 15px;

    @media (max-width: 1120px) {
      gap: 8px;
    }

    @media (max-width: 660px) {
      gap: 10px;
    }
  }

  li {
    padding: 20px;
    border-radius: 50%;
    background-color: #eff6f1;

    @media (max-width: 1120px) {
      padding: 10px;
    }

    @media (max-width: 660px) {
      padding: 20px;
    }
  }
`;

export const FooterLogoImg = styled.img`
  margin-right: 8px;
`;

export const FooterLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 38px;
  font-weight: 700;
  line-height: 44px;
  color: #274c5b;
  margin-bottom: 23px;

  @media (max-width: 660px) {
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
  }
`;

export const FooterLinkPages = styled(NavLink)``;

export const PagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 51px;
  border-left: 1px solid #d4d4d4;

  @media (max-width: 1120px) {
    align-items: center;
    padding-left: 21px;
  }

  @media (max-width: 660px) {
    display: none;
  }

  h3 {
    margin-bottom: 32px;
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 30px;
    font-weight: 700;
    line-height: 35px;
    color: #274c5b;

    @media (max-width: 1120px) {
      margin-bottom: 28px;
      font-size: 24px;
      line-height: 30px;
    }
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 18px;
    font-weight: 400;
    line-height: 49px;
    color: #525c60;

    @media (max-width: 1120px) {
      align-items: flex-start;
      gap: 20px;
    }
  }

  p {
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 8px;
    font-weight: 400;
    line-height: 29px;
    color: #525c60;
  }
`;
