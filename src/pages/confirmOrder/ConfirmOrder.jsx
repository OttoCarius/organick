import React from "react";
import CreditCardUi from "../../components/creditCard/CreditCartd";
import { ConfirmOrderWrap, ConfirmSection } from "./ConfirmOrder.styled";

// import { useSelector } from "react-redux";
// import { totalPrice } from "../../utils/totalPrice";

const ConfirmOrder = () => {
  // const items = useSelector((state) => state.cart.itemsInCart);
  // const totalPriceee = totalPrice(items);

  return (
    <>
      <ConfirmSection>
        {/* <h2>Payment Page</h2> */}
        <ConfirmOrderWrap>
          {/* <img src={shop} alt="shop" /> */}
          <CreditCardUi />
          {/* <span>{totalPriceee} $</span> */}
        </ConfirmOrderWrap>
      </ConfirmSection>
    </>
  );
};

export default ConfirmOrder;
