import React from "react";
import BasicBreadcrumbs from "../components/Breadcrumb";

type Props = {};

const About = (props: Props) => {
  return (
    <div>
      <BasicBreadcrumbs route="about" />
    </div>
  );
};

export default About;
