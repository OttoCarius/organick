import styled from "styled-components";

export const HomeCategoriesContainer = styled.div`
  padding-right: 30px;
  padding-left: 30px;
  max-width: 1400px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 50px;
    font-weight: 800;
    line-height: 59px;
    color: #274c5b;
    margin-bottom: 40px;
  }
`;

export const Categories = styled.p`
  font-family: ${({ theme }) => theme.fonts.pretitle};
  font-size: 36px;
  font-weight: 400;
  line-height: 49px;
  color: #7eb693;
  margin-bottom: 10px;
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

  margin-bottom: 122px;

  /* @media (max-width: 750px) {
    column-gap: 20px;
    row-gap: 20px;
    display: grid;
    grid-template-columns: repeat(3, 150px);
    grid-template-rows: repeat(3, 250px);
  }
  @media (max-width: 530px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  } */
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
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
