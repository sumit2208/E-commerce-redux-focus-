import React, { useState } from 'react';
import Products from '../Products.json';
import { addCart } from '../redux/Features/cart/cartslice';
import { useDispatch } from 'react-redux';
const Phones = () => {
  const dispatch = useDispatch();
  const [productName, setProductName] = useState([]);

  // Filter discount products from Products.json
  const discountProducts = Products.Phones || []; // Handle case if 'Discount' category is missing

  const handleAddToCart = (product) => {
    if (!productName.includes(product.name)) {
      dispatch(addCart(product));
      setProductName([...productName, product.name]);
    }
  }
  return (
    <div className='font-bold tracking-tight'>
    <div className="bg-slate-950 Roboto, sans-serif ">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl tracking-tight text-slate-50 font-semibold">IPHONES</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {discountProducts.map((product) => (
          <div key={product.id} className="bg-gray-800 shadow-3d rounded-lg overflow-hidden flex flex-col">
            {/* Optionally include an image */}
            <img src={product.image} className="w-full h-48 object-fill" alt={product.name} />
            <div className="p-4 flex-1">
              <h5 className="text-lg font-semibold text-white">{product.name}</h5>
              <p className="text-white font-thin">{product.description}</p>
              <p className="text-xl text-white">{product.discount_price_inr} INR</p>
            </div>
            <button
              className={`bg-blue-500 text-white px-4 py-2 rounded-lg font-bold mt-auto mb-4 mx-4 hover:bg-blue-600 ${
                productName.includes(product.name) ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              onClick={() => handleAddToCart(product)}
              disabled={productName.includes(product.name)}
            >
              {productName.includes(product.name) ? 'ADDED' : 'ADD ITEM'}
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
  </div>
  )
}

export default Phones
