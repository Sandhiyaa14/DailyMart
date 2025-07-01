import React from 'react'
import hero from "../assets/Images/Hero1.png"
import { Link } from 'react-router'

const Hero = () => {
  return (
    <section className='bg-green-600 pt-28 pb-15 mx-auto px-5 xl:px-48 flex md:flex-row flex-col items-center  w-full'>
        <div className='w-full md:w-1/2'>
            <h1 className='md:text-5xl text-4xl text-white font-bold'>Fresh <span className='text-orange-300'>Groceries </span> Delivered to Your Door !</h1>
            <p className='text-white mt-4 text-lg'>Shop from our wide selection of fresh fruits, vegetables, dairy and more !</p>
            <p className='text-lg text-white'>Get same-day delivery !</p>
            <div className='mt-5'>
                <Link to={"/shop"}><button className='bg-white text-green-500
                px-4 py-2 rounded-full mr-5 cursor-pointer'>Shop Now</button></Link>
                <Link to={"/about"}><button className='bg-gray-700 text-white cursor-pointer
                px-4 py-2 rounded-full hover:bg-transparent'>Learn More</button></Link>
            </div>
        </div>
        <div className='relative flex justify-center  xl:w-1/2 pt-10 overflow-hidden ms-2'>
        <div className='absolute top-10 bg-white/20 rounded-lg backdrop-blur-sm inset-0 z-10'></div>
            <img src={hero} className='relative z-20' alt="" />
        </div>
    </section>
  )
}

export default Hero
