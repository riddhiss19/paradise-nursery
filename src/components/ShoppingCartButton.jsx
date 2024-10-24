
import { useState } from 'react';

import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const ShoppingCartButton = ({ openModal }) => {
  const cartCount = useSelector((state) => state.cart.cartCount); // Get cart count from Redux

  return (
    <div className="relative cursor-pointer" onClick={openModal}>
      {/* Shopping cart icon */}
      <FaShoppingCart className="text-blue-800 hover:text-blue-600 text-3xl transition-colors duration-300" />

      {/* Badge showing item count */}
      {cartCount > 0 && (
        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          {cartCount}
        </span>
      )}
    </div>
  );
};

export default ShoppingCartButton;