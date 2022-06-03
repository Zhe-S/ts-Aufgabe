import React from "react";
import Products from "./Products";
import { Routes, Route } from "react-router-dom";
import Cart from "./Cart";

const Rout = ({ ProductItems, cartItems, handleAddProduct }) => {
  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Products
              ProductItems={ProductItems}
              handleAddProduct={handleAddProduct}
            />
          }
        />
        <Route
          exact
          path="/cart"
          element={
            <Cart cartItems={cartItems} handleAddProduct={handleAddProduct} />
          }
        />
      </Routes>
    </div>
  );
};

export default Rout;
