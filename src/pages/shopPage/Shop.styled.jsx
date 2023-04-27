import styled from "styled-components";
import shopHero from "../../assets/img/shopHero.png";

export const AboutSection = styled.section`
  background-image: url(${shopHero});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 450px;
  margin-top: -60px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  h2 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 70px;
    font-weight: 800;
    line-height: 82px;
    color: #274c5b;
  }
`;

export const ShopCategoriesContainer = styled.div`
  padding-right: 30px;
  padding-left: 30px;
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 90px;
`;

export const ProductsWrap = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  justify-items: center;
  column-gap: 20px;
  row-gap: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  /* flex-wrap: wrap; */

  margin-bottom: 122px;
`;

export const Button = styled.button`
  display: flex;

  gap: 10px;
  background-color: #274c5b;
  padding: 28px 49px;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  border-radius: 16px;
  transition: background-color 0.7s ease;
  border: none;

  margin-bottom: 190px;

  :hover {
    background-color: #183541;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 380px;
  padding: 20px;
  text-align: start;
  background-color: #f9f8f8;
  box-shadow: 10px 15px 45px rgba(0, 0, 0, 0.65);
  border-color: #fff;
  border-radius: 20px;

  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 24px;
  font-weight: 500;
  line-height: 26px;
  color: #274c5b;
  outline: none;

  ::placeholder {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 24px;
    font-weight: 500;
    line-height: 26px;
    color: #274c5b;
    text-align: center;
  }
`;

export const InputWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 60px;
`;
