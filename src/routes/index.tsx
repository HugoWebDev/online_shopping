import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import { Home, Cart, About, Login, Products, NotFound } from "../pages";

type Props = {};

const Routes: React.FC<Props> = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
