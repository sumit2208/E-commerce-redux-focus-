import React from 'react';
import Products from '../Products.json';
import { addCart, selectCartItems } from '../redux/Features/cart/cartslice';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const Hero = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const discountProducts = Products.Discount || [];

 

  const isProductInCart = (productId) => {
    console.log("Checking cart for product:", productId);
    return cartItems.some(item => item.id === productId);
  };

  const handleAddToCart = (product) => {
    if (!isProductInCart(product.id)) {
      dispatch(addCart(product));
    }
  };

  return (
    <div className="bg-slate-900 font-bold tracking-tight">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl tracking-tight text-slate-50 font-semibold">DISCOUNT PRODUCTS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {discountProducts.map((product) => (
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 1 }}
              key={product.id}
              className="bg-gray-800 shadow-3d rounded-lg overflow-hidden flex flex-col"
            >
              <img src={product.image} className="w-full h-48 object-fill" alt={product.name} />
              <div className="p-4 flex-1">
                <h5 className="text-lg font-semibold text-white">{product.name}</h5>
                <p className="text-white font-thin">{product.description}</p>
                <p className="text-xl text-white">{product.discount_price_inr} INR</p>
              </div>
              <button
                className={`bg-blue-500 text-white px-4 py-2 rounded-lg font-bold mt-auto mb-4 mx-4 hover:bg-blue-600 ${
                  isProductInCart(product.id) ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={() => handleAddToCart(product)}
                disabled={isProductInCart(product.id)}
              >
                {isProductInCart(product.id) ? 'ADDED' : 'ADD ITEM'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
