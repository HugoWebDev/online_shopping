import React from "react";
import BasicBreadcrumbs from "../components/Breadcrumb";

type Props = {};

const Products: React.FC = (props: Props) => {
  return (
    <div>
      <BasicBreadcrumbs route="products" />
    </div>
  );
};

export default Products;
