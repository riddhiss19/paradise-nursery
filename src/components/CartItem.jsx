// CartItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../features/cart/cartSlice';

import { getImagePath } from '../utils/basePath';

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(product.id));
  };

  const handleIncrease = () => {
    dispatch(increaseQuantity(product.id));
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity(product.id));
  };

  return (
    <div className="flex items-center justify-between border-b pb-4 mb-4">
      <div className="flex items-center">
        <img
          src={getImagePath( product.imageUrl)}
          alt={product.name}
          className="w-16 h-16 object-cover rounded-md"
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-500">${product.price}</p>
        </div>
      </div>

      <div className="flex items-center">
        {/* Quantity adjustment */}
        <button className="text-gray-500 px-2" onClick={handleDecrease}>-</button>
        <span className="px-4">{product.quantity}</span>
        <button className="text-gray-500 px-2" onClick={handleIncrease}>+</button>
      </div>

      <div className="text-lg font-semibold">
        Total: ${(product.price * product.quantity).toFixed(2)}
      </div>

      {/* Remove button */}
      <button
        className="bg-red-500 text-white px-4 py-1 rounded-md"
        onClick={handleRemove}
      >
        Delete
      </button>
    </div>
  );
};

export default CartItem;
