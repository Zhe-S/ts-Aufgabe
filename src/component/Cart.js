import React from "react";

const Cart = ({ cartItems,handleAddProduct, handleRemoveProduct }) => {
  return (
    <div className="cart-items">
      <div className="cart-items-header">Cart Items</div>

      {cartItems.length === 0 && (
        <div className="cart-items-empty">No items are Added</div>
      )}

      <div>
        {cartItems.map((cartItems) => (
            <div key={cartItems.id} className="cart-items-list">
                
            <img
              className="cart-items-image"
              src={cartItems.flyerFront}
              alt={cartItems.name}
              />
            <div className="cart-items-name">{cartItems.name}</div>
            <div className="cart-items-function">
              <button
                className="cart-items-add"
                onClick={() => handleAddProduct(cartItems)}
              >
                +
              </button>
              <button
                className="cart-items-remove"
                onClick={() => handleRemoveProduct(cartItems)}
              >
                -
              </button>
            </div>

            {/* <div className="cart-items-price">
              {cartItems.quantity} * {cartItems.price}€
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
