import React from "react";
import { NavLink } from "react-router-dom";
import {
  ProductsWrap,
  ShopCategoriesContainer,
} from "../../../pages/shopPage/Shop.styled";
import { products } from "../../../helpers/products";
import HomeProducts from "../../homeProduts/HomeProducts";
import { RecomTitle } from "./recomProd.styled";

const itemsPerRow = 4;

const RecomProd = ({ id }) => {
  //   const [next, setNext] = useState(itemsPerRow);

  //   const handleMore = () => {
  //     setNext(next + itemsPerRow);
  //   };

  return (
    <ShopCategoriesContainer>
      <RecomTitle>Related Products</RecomTitle>
      <NavLink to={`/shop/${id}`}>
        <ProductsWrap>
          {products?.slice(0, itemsPerRow)?.map((product, id) => {
            return (
              <HomeProducts
                key={id}
                kind={product.kind}
                img={product.img}
                title={product.title}
                oldPrice={product.oldPrice}
                newPrice={product.newPrice}
                quality={product.quality}
                id={id}
              ></HomeProducts>
            );
          })}
        </ProductsWrap>
      </NavLink>
    </ShopCategoriesContainer>
  );
};

export default RecomProd;
