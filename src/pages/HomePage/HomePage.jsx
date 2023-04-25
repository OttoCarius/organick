import React from "react";
import Hero from "../../components/hero/Hero";
import Banner from "../../components/banner/Banner";
import About from "../../components/about/About";
import { products } from "../../helpers/products";
import HomeProducts from "../../components/homeProduts/HomeProducts";
import {
  HomeCategoriesContainer,
  ProductsWrap,
  Categories,
  Button,
} from "./HomePage.styled";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Testimonial from "../../components/testimonial/Testimonial";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Banner />
      <About />
      <HomeCategoriesContainer>
        <Categories>Categories</Categories>
        <h2>Our Products</h2>
        <ProductsWrap>
          {products.map((product, id) => {
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
        <Button>
          Load More <BsFillArrowRightCircleFill size={19} />
        </Button>
      </HomeCategoriesContainer>
      <Testimonial />
    </div>
  );
};

export default HomePage;
