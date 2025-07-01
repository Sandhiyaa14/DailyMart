import React from 'react'
import Category from '../components/Category'
import FeaturedProducts from '../components/FeaturedProducts'
import Template from '../components/Template'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div>
     <Hero />
     <Category />
     <FeaturedProducts />
     <Template />
    </div>
  )
}

export default Home
