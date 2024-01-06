import React from "react";
import BasicBreadcrumbs from "../components/Breadcrumb";

type Props = {};

const Cart = (props: Props) => {
  return (
    <div>
      <BasicBreadcrumbs route="cart" />
    </div>
  );
};

export default Cart;
