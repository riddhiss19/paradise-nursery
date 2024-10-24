
import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import Header from '../shared/Header';

const CartPage = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);

    // Calculate the total price
    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (

        <div>
            <Header />

            <div className="container mx-auto p-6">
                <div className="container  mx-auto px-4 py-8 ">
                    <h2 className="text-3xl font-bold mb-8 text-center">Shopping Cart</h2>

                    {cartItems.length === 0 ? (
                        <p className="text-center">Your cart is empty.</p>
                    ) : (
                        <>
                            {/* Cart items */}
                            <div className="mb-8">
                                {cartItems.map((item) => (
                                    <CartItem key={item.id} product={item} />
                                ))}
                            </div>

                            {/* Total and buttons */}
                            <div className="flex justify-between items-center">
                                <div className="text-2xl font-bold">
                                    Total Cart Amount: ${totalPrice.toFixed(2)}
                                </div>
                                <div>
                                    <button className="bg-green-500 text-white px-4 py-2 rounded-md mr-4">
                                        Continue Shopping
                                    </button>
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                                        Checkout
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>


    );
};

export default CartPage;
