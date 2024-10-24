import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ShoppingCartButton from '../components/ShoppingCartButton';

const Header = ({ }) => {

  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <header className="bg-[#008000] ">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-xl font-bold flex flex-row items-center space-x-4">
          <Link to="/" className="text-white transition-colors duration-300">
            <img
              src={`/paradise-nursery/logo.png`}
              alt="Paradise Nursery Logo"
              className="h-10 w-10"
            />
          </Link>
          <Link to="/" className="text-white transition-colors duration-300">
            Paradise Nusery
          </Link>
        </div>
        <Link to="/product-listing" className="text-white transition-colors duration-300">

          <h3 class="text-white">Plants</h3>
        </Link>

        <Link to="/cart" className="relative">
          <span className="text-xl">🛒</span>
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            {cartItems.length}
          </span>
        </Link>

      </div>
    </header>
  );
};

export default Header;
