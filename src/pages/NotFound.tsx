import React from "react";
import BasicBreadcrumbs from "../components/Breadcrumb";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <div>
      <BasicBreadcrumbs route="Not Found" />
    </div>
  );
};

export default NotFound;
