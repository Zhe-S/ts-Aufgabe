import React from "react";
import { NavLink } from 'react-router-dom'

const Navbar = ({ cartItems }) => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-warning fixed-top">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4 text-dark" to="/">
            T-AUFGABE
          </NavLink>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="buttons d-flex">
              <NavLink
                to="/"
                className="btn btn-outline-dark d-flex align-items-center"
              >
                <i className="fa fa-sign-in me-2"></i> Products
              </NavLink>
              <NavLink
                to="/cart"
                className="btn btn-outline-dark ms-1 d-flex align-items-center"
              >
                <i class="fa fa-shopping-cart me-2 " aria-hidden="true"></i> ({cartItems.length === 0 ? "0" : cartItems.length})
              </NavLink>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
