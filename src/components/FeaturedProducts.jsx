import React from 'react'
import milk from "../assets/Images/Amul.avif"
import milk_two from "../assets/Images/Amul2.avif"
import potato from "../assets/Images/potato.avif"
import ginger from "../assets/Images/ginger.avif"
import carrot from "../assets/Images/carrot.avif"
import products from "../utils/Data.js";
import ProductCard from './ProductCard'
import { useNavigate } from 'react-router'
const FeaturedProducts = () => {
  const navigate = useNavigate()
  return (
    <section>
      <div className='pb-15 mx-auto px-5 xl:px-48'>
        <h2 className='text-3xl font-bold text-center mt-10'>Featured Products</h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6 gap-2 mt-7'>
            {products.slice(0,6).map((product)=>(
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
        <div className='text-center'>
            <button onClick={()=>navigate("/shop")}  className='cursor-pointer border px-4 py-2 rounded-3xl mt-8'>View All Products</button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
