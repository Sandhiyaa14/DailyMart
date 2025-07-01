import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCart } from '../redux/cartSlice'
import { toast } from 'react-toastify';
import { Link } from 'react-router';

const ProductCard = ({ product }) => {
  let dispatch = useDispatch();
  let carts = useSelector((state) => state.carts.cart);

  const addToCart = (product) => {
    let productExist = carts.find((cart) => cart.id === product.id);

    if (productExist) {
      const updatedCart = carts.map(item => {
        if (item.id === product.id) {
          toast("Item already in Cart");
          return { ...item, unit: item.unit + 1 }
        }
        return item;
      });
      dispatch(setCart(updatedCart));
    } else {
      dispatch(setCart([...carts, product]))
      toast.success("Added to Cart");
    }
  }

  return (
    <div className="border-2 border-gray-100 shadow-xl rounded mb-2"> {/* outer border + spacing */}
      <Link to={`/product/${product.id}`} className='rounded shadow-sm h-[410px] overflow-hidden text-center block'>
        <div className='border-b-2 border-gray-200'>
          <img src={product.image} className='object-cover w-full h-[195px]' alt={product.name} />
        </div>
        <div className='text-left p-3'>
          <p className='text-gray-500'>{product.category}</p>
          <h4 className='font-semibold text-sm text-gray-800 h-[45px] line-clamp-2'>{product.name}</h4>
          <p className='text-gray-500 h-[30px] mb-3'>{product.quantity}</p>
          <h4 className='font-semibold text-gray-800 text-sm'>₹{product.price}</h4>
          <button onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addToCart(product);
          }} className='bg-green-600 text-white py-2 w-full rounded-xl my-2 mb-5 cursor-pointer hover:bg-green-700'>Add to Cart</button>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
