import styled from "styled-components";
import testimonWrap from "../../assets/img/Image.png";

export const TestimonialSection = styled.section`
  background-image: url(${testimonWrap});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 1260px;
`;

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
    margin-bottom: 60px;
  }
`;

export const Face = styled.img`
  width: 120px;
`;

export const PreTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.pretitle};
  font-size: 36px;
  font-weight: 400;
  line-height: 49px;
  color: #7eb693;
  margin-bottom: 10px;

  margin-top: 164px;
`;

export const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  color: #525c60;
  margin-bottom: 10px;

  margin-top: 25px;
  max-width: 780px;
  text-align: center;
`;

export const Name = styled.p`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 25px;
  font-weight: 600;
  line-height: 29px;
  color: #525c60;
  margin-bottom: 5px;
  text-align: center;
`;

export const Client = styled.p`
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 15px;
  font-weight: 400;
  line-height: 25px;
  color: #525c60;
  margin-bottom: 205px;
  text-align: center;
`;

export const Star = styled.img`
  width: 100px;
`;

export const SlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AdvantagesList = styled.ul`
  display: flex;
  gap: 62px;
  margin-bottom: 164px;

  li {
    width: 211px;
    height: 211px;
    border: 4px solid #7eb693;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h5 {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 50px;
    font-weight: 800;
    line-height: 59px;
    color: #274c5b;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 18px;
    font-weight: 600;
    line-height: 30px;
    color: #274c5b;
  }
`;
