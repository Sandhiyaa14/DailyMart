import React from 'react';
import products from "../utils/Data";
import { useParams } from 'react-router-dom';
import { Star, Ban, Truck } from "lucide-react";
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from '../redux/cartSlice';
import { toast } from 'react-toastify';


const ProductDetails = () => {
  const dispatch = useDispatch();
  const carts = useSelector(state => state.carts.cart);

const addToCart = (product) => {
  let productExist = carts.find(cart => cart.id === product.id);

  if (productExist) {
    const updatedCart = carts.map(item => {
      if (item.id === product.id) {
        toast("Item already in Cart");
        return { ...item, unit: item.unit + 1 };
      }
      return item;
    });
    dispatch(setCart(updatedCart));
  } else {
    dispatch(setCart([...carts, product]));
    toast.success("Added to Cart");
  }
};


  const { id } = useParams();
  const product = products.find(product => product.id === parseInt(id));

  if (!product) return <div className="text-center mt-10 text-red-500">Product not found.</div>;

  return (
    <div className='bg-gray-100 py-10 px-6 pt-30 pb-15'>
      <div className='max-w-6xl mx-auto bg-white rounded-xl shadow-lg flex items-center flex-col md:flex-row gap-8 p-6'>

        {/* Left Side: Image */}
        <div className='flex-1'>
          <img src={product.image} alt={product.name} className='w-full h-[400px] object-contain rounded-lg' />
        </div>

        {/* Right Side: Details */}
        <div className='flex-1 flex flex-col gap-4'>

          <h2 className='text-3xl font-bold text-gray-800'>{product.name}</h2>
          <p className='text-sm text-gray-500'>Quantity: {product.quantity}</p>

          <div className='flex items-center gap-1 text-yellow-600'>
            <Star className="w-5 h-5" />
            <span className='font-semibold'>{product.rating}</span>
            <span className='text-gray-500'>({product.reviews} reviews)</span>
          </div>

          <h2 className='text-2xl font-semibold text-green-700'>₹{product.price}</h2>

          <div className='flex flex-col gap-2 mt-4'>
            <div className="flex items-center text-red-600 gap-2">
              <Ban className="w-5 h-5" />
              <span className="font-semibold">No Return or Exchange</span>
            </div>
            <div className="flex items-center text-green-600 gap-2">
              <Truck className="w-5 h-5" />
              <span className="font-semibold">Fast Delivery Available</span>
            </div>
          </div>

          <div className='mt-6'>
            <h3 className='text-xl font-semibold mb-2'>Highlights</h3>
            <table className='w-full text-sm text-left text-gray-700 border'>
              <tbody>
                <tr className='border-b'>
                  <td className='py-2 px-3 font-medium'>Imported</td>
                  <td>{product.imported ? "Yes" : "No"}</td>
                </tr>
                <tr className='border-b'>
                  <td className='py-2 px-3 font-medium'>Good For</td>
                  <td>{product.goodFor}</td>
                </tr>
                <tr className='border-b'>
                  <td className='py-2 px-3 font-medium'>Weight</td>
                  <td>{product.quantity}</td>
                </tr>
                <tr>
                  <td className='py-2 px-3 font-medium'>Description</td>
                  <td>{product.description}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='flex justify-center'>
            <button onClick={()=>addToCart(product)} className='bg-green-600 text-white py-2 w-50 rounded-xl my-2 mb-5 cursor-pointer hover:bg-green-700'>Add to Cart</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
