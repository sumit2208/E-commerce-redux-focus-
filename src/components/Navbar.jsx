import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cartpic from '../assets/cart.png';
import logo from '../assets/online-shopping.png';
import { selectCartItems, selectTotalPrice, removeCart, increment, decrement, calculateTotal } from '../redux/Features/cart/cartslice';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartLength = cartItems.length;
  const total = useSelector(selectTotalPrice);

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems, dispatch]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleRemove = (id) => {
    dispatch(removeCart(id));
    dispatch(calculateTotal());  
  };

  const incre = (id) => {
    dispatch(increment(id));
    dispatch(calculateTotal());  
  };

  const dec = (id) => {
    dispatch(decrement(id));
    dispatch(calculateTotal()); 
  };

  return (
    <div className="font-bold tracking-tight" style={{ fontWeight: '800' }}>
      <nav className="bg-gray-900 p-2.5 border-gray-200 text-gray-400 font-sans md:bg-gray-900 fixed top-0 left-0 w-full z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-5 lg:h-8 rounded-s-3xl" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">E-STORE</span>
          </a>

          {/* Toggle Button for Mobile Menu */}
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>

          {/* Mobile Menu */}
          <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
            <ul className="font-medium flex flex-col p-2 md:p-0 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => isActive ? "block py-2 px-3 text-white" : "block py-2 px-3"}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/PHONES"
                  className={({ isActive }) => isActive ? "block py-2 px-3 text-white" : "block py-2 px-3"}
                >
                  IPHONES
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/HEADPHONES"
                  className={({ isActive }) => isActive ? "block py-2 px-3 text-white" : "block py-2 px-3"}
                >
                  HEADPHONES
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="relative">
            <button onClick={toggleSidebar}>
              <img
                className="h-8 cursor-pointer"
                src={cartpic}
                alt="Cart"
              />
            </button>
            {cartLength > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cartLength}
              </span>
            )}
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      {isSidebarOpen && (
        <motion.div   
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity z-10  " aria-hidden="true">
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <div className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={toggleSidebar}
                          >
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Close panel</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {cartItems.map(item => (
                              <li key={item.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img src={item.image} alt={item.name} className="h-full w-full object-cover object-center" />
                                </div>
                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3><a href="#">{item.name}</a></h3>
                                      <p className="ml-4">Rs-{(item.discount_price_inr * item.quantity).toFixed(2)}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500 flex">
                                      <svg onClick={() => dec(item.id)} className="cursor-pointer w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7" />
                                      </svg>
                                      <span>{item.quantity}</span>
                                      <svg onClick={() => incre(item.id)} className="cursor-pointer w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                                      </svg>
                                    </p>
                                    <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={() => handleRemove(item.id)}>
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-200">
                      <div className="px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Total</p>
                          <p>Rs-{total.toFixed(2)}</p>
                        </div>
                        <div className="mt-6">
                          <button className='p-3 bg-black w-full text-white'>CHECKOUT</button> 
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
