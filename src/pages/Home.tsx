import React from "react";
import { Hero } from "../components";
import BasicBreadcrumbs from "../components/Breadcrumb";

type Props = {};

const Home = (props: Props) => {
  return (
    <React.Fragment>
      <BasicBreadcrumbs route="home" />
      <Hero />
    </React.Fragment>
  );
};

export default Home;
