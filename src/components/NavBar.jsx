import React from 'react';
import logo from "../assets/Images/logo.png";
import { Menu, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import CartComp from './CartComp';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { HiMenuAlt1 } from 'react-icons/hi';
const NavBar = () => {
  const [showNav,setShowNav] = useState(false)
   const {cart} = useSelector((state)=>state.carts)
  const[isOpen,setIsOpen] = useState(false)
  const onClose = () => {
    setIsOpen(false)
  }
  isOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"
  return (
    <>
    <div className='flex bg-green-100 justify-between items-center w-full h-18  px-3 py-3 lg:px-39 fixed top-0 z-200 mx-auto border border-gray-100 shadow-xl'>
      <div className="logo">
        <Link to={"/"}><img src={logo} className='md:w-55 w-45' /></Link>
      </div>
      <div className='flex gap-5'>
        <ul className='md:flex font-semibold gap-7 text-xl items-center hidden'>
          <Link to="/"><li>Home</li></Link>
          <Link to="/shop"><li>Shop</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
        </ul>
        <Link className='relative' onClick={()=>setIsOpen(true)}><ShoppingCart className='h-6 w-6'/><span className='absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-enter justify-center'>{cart.length}
          </span></Link>
        <HiMenuAlt1 className='md:hidden block' onClick={()=>(setShowNav(!showNav))} />
      </div>

      {/* phonenav */}
    <div className={`fixed top-0 w-70 h-full pt-20 pl-5 pb-10 bg-green-100 z-50 transition-all duration-300 ease-in-out ${showNav ? 'left-0' : '-left-72'}`}>
        <X onClick={()=>setShowNav(false)} className='w-7 h-7 text-black bg-white shadow-2xl border-gray-200 cursor-pointer absolute right-5 top-10' />
      <h1 className='text-green-600 text-3xl font-bold mb-12'>DailyMart</h1>
      <ul className='font-semibold text-xl '>
        <Link onClick={()=>setShowNav(false)} to="/"><li className='mb-5'>Home</li></Link>
        <Link onClick={()=>setShowNav(false)} to="/shop"><li className='mb-5'>Shop</li></Link>
        <Link onClick={()=>setShowNav(false)} to="/about"><li className='mb-5'>About</li></Link>
        <Link onClick={()=>setShowNav(false)} to="/contact"><li className='mb-5'>Contact</li></Link>
        
      </ul>
      <button className='text-white bg-green-600 text-lg px-10 rounded cursor-pointer py-2'>Login</button>
      <p className='absolute bottom-10'>Created by Sandhiya🧡</p>
    </div>
    {isOpen && (
      <div className='fixed top-0 left-0 w-full h-full bg-black/70 z-40' onClick={()=>setIsOpen(false)}></div>
    )}
    <CartComp isOpen={isOpen} onClose={onClose}/>
    </div>
    </>
  );
};

export default NavBar;
