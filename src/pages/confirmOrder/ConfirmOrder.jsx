import React from "react";
import CreditCardUi from "../../components/creditCard/CreditCartd";
import { ConfirmOrderWrap } from "./ConfirmOrder.styled";
// import "bootstrap/dist/css/bootstrap.min.css";

const ConfirmOrder = () => {
  return (
    <ConfirmOrderWrap>
      <CreditCardUi />
    </ConfirmOrderWrap>
  );
};

export default ConfirmOrder;
