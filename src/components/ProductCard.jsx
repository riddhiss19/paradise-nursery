// ProductCard.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

import {getImagePath}  from '../utils/basePath';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  // Check if the item is already in the cart
  const cartItems = useSelector((state) => state.cart.cartItems);
  const isInCart = cartItems.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="border rounded-lg p-4 shadow-md relative">
      {product.isOnSale && (
        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          SALE
        </span>
      )}
     <img src={getImagePath(product.imageUrl)} alt={product.name} className="w-full h-48 object-cover rounded-md" />
     <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
      <p className="text-red-500 text-lg font-bold mt-2">${product.price}</p>
      <p className="text-gray-600 text-sm">{product.description}</p>

      {/* Button to add to cart */}
      <button
        className={`mt-4 ${
          isInCart ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'
        } text-white py-2 px-4 rounded-md`}
        onClick={handleAddToCart}
        disabled={isInCart}
      >
        {isInCart ? 'Added' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductCard;
