import React from 'react'
import { Leaf, ShoppingBag, Heart, Truck } from "lucide-react"
import store from "../assets/Images/store.jpg"
import { Link } from 'react-router'

const About = () => {
    const values = [
        {
            title: "Freshness",
            para: "We're committed to providing the freshest produce and products, sourced locally whenever possible.",
            logo: <Leaf className="h-8 w-8" />
        },
        {
            title: "Quality",
            para: "We carefully select every product on our shelves to ensure the highest quality for our customers.",
            logo: <ShoppingBag className="h-8 w-8" />
        },
        {
            title: "Community",
            para: "We're proud to support local farmers, producers, and community initiatives in every neighborhood we serve.",
            logo: <Heart className="h-8 w-8" />
        },
        {
            title: "Sustainability",
            para: "We're committed to environmentally friendly practices and reducing our carbon footprint.",
            logo: <Truck className="h-8 w-8" />
        }
    ]
  return (
 <div className='pt-30 bg-gray-100 pb-15'>
      <h1 className='mb-5 text-center text-4xl font-bold text-green-700'>About DailyMart</h1>
      <h4 className='text-center text-xl text-gray-600'>Your neighborhood grocery store committed to providing fresh, quality products since {new Date().getFullYear()}</h4>
      <div className='md:pt-20 pt-13 pb-15 mx-auto px-5 xl:px-48  items-center  flex gap-5 flex-col md:flex-row'>
        <div className='md:w-1/2 w-full'> 
            <h2 className='text-3xl text-green-600 mb-5 font-semibold text-center'>Our Story</h2>
            <p className='mb-5 text-gray-600'>DailyMart began with a simple idea: to create a grocery store that offers the freshest produce, highest quality meats, and finest selection of everyday essentials at fair prices.</p>
            <p className='mb-5 text-gray-600'>Founded in 2005 by the Johnson family, our first store opened in Grocery City with just 15 employees. Today, we've grown to 25 locations across the state, but our commitment to quality and community remains unchanged.</p>
            <p className=' text-gray-600'>We work directly with local farmers and producers to bring you the best products while supporting our local economy. Our team members are passionate about food and dedicated to providing exceptional customer service.</p>
      </div>
      <div className='md:w-1/2 w-full'>
        <img src={store} className='rounded-2xl' alt="" />
      </div>
    </div>

    <div className='pt-5 pb-15 mx-auto px-5 xl:px-48  '>
        <h1  className='text-3xl text-green-600 mb-7 font-semibold text-center'>Our Values</h1>
        <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-10'>
            {values.map((value,index)=>(
                <div key={index} className='border border-t-4 border-green-500 rounded-xl flex flex-col justify-center items-center p-5'>
                    
                    <div className='bg-green-200 p-3 text-green-500 rounded-full'>{value.logo}
                    </div>
                    <h3 className='my-2 font-semibold text-2xl'>{value.title}</h3>
                    <p className='text-center text-gray-500'>{value.para}</p>  
                </div>
            ))}
        </div>
    </div>

    <div className='pt-5 pb-10 mx-5 xl:mx-48  bg-green-50 md:p-10 p-5 text-center'>
        <h1 className='text-green-600 text-2xl font-semibold my-5'>Join the DailyMart Family</h1>
        <p className='text-gray-600'>We're always looking for passionate individuals to join our team. Contact Us for our current openings!</p>
        <div className="flex justify-center mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
            >
                CONTACT US
            </Link>
          </div>
    </div>
 </div>
  )
}

export default About
