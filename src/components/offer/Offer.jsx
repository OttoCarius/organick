import React from "react";
import { products } from "../../helpers/products";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import OfferProduct from "./OfferProduct";
import { ProductsWrap } from "../../pages/HomePage/HomePage.styled";
import {
  OfferSection,
  OffersContainer,
  TextWrap,
  OfferWrapContainer,
  OfferLink,
} from "./Offer.styled";

const Offer = () => {
  return (
    <OfferSection>
      <OfferWrapContainer>
        <OffersContainer>
          <TextWrap>
            <p>Offer</p>
            <h3>We Offer Organic For You</h3>
          </TextWrap>
          <OfferLink to="/shop">
            <span>
              View All Product <BsFillArrowRightCircleFill size={19} />
            </span>
          </OfferLink>
        </OffersContainer>
        <ProductsWrap>
          {products?.slice(11, 15)?.map((product, id) => {
            return (
              <OfferProduct
                key={id}
                kind={product.kind}
                img={product.img}
                title={product.title}
                oldPrice={product.oldPrice}
                newPrice={product.newPrice}
                quality={product.quality}
                id={id}
              ></OfferProduct>
            );
          })}
        </ProductsWrap>
      </OfferWrapContainer>
    </OfferSection>
  );
};

export default Offer;
