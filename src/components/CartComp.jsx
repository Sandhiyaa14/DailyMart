import React from 'react'
import { CgClose } from 'react-icons/cg'
import { useDispatch, useSelector } from 'react-redux'
import { ChevronRight } from 'lucide-react'
import { GiShoppingBag } from 'react-icons/gi'
import { LuNotebookText } from 'react-icons/lu'
import { MdDeliveryDining } from 'react-icons/md'
import { setCart } from '../redux/cartSlice'

const CartComp = ({isOpen,onClose}) => {
  const {cart} = useSelector((state)=>state.carts)
  const total = cart.reduce((total,item)=>total+item.price * item.unit,0)
  const dispatch = useDispatch()

  const updateQuantity = (productId,action) => {
    dispatch(setCart(
       cart.map((item)=>{
      if(item.id == productId){
        let newUnit = item.unit
        if(action == "increase"){
          newUnit += 1
        }
        else if(action == "decrease"){
          newUnit -= 1
        }
        return newUnit > 0 ? {...item, unit:newUnit} : null;
      }
      return item
    }).filter(item => item!= null)
    ))
   
  }

  return (
   <div className={`fixed overflow-y-scroll top-0 right-0 h-full sm:w-[400px] bg-gray-100 shadow-lg p-4 transform z-50 w-full
  transition-transform duration-500 
  ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>

         <h2 className='text-xl px-4 font-bold mb-4 flex justify-between items-center'>My Cart <button><CgClose className='text-red-500 h-7 w-7 cursor-pointer' onClick={onClose}/></button></h2>  
         {cart.length==0 ? <p>Your Cart is Empty!</p>:
         cart.map((item)=>(
          <div key={item.id}>
            <div className='flex rounded-md justify-between items-center bg-white h-25 p-2 mb-4'>
             <div className='border-gray-200 border-2 h-15 w-15'>
              <img src={item.image} className='' alt="" />
              </div> 
              <div className='ml-2 flex-1'>
                <h1 className='text-sm'>{item.name}</h1>
                <p className='text-md text-gray-500'>{item.quantity}</p>
                <h4>₹{item.price}<span className='line-through text-gray-500 ml-1'>₹{item.price + 10}</span></h4>
              </div>
              <div className='bg-green-600 text-white rounded w-25 text-center h-10 flex items-center justify-center gap-2'>
                <button className='text-2xl cursor-pointer' onClick={()=>updateQuantity(item.id,"decrease")}>-</button>
                <span className='text-2xl'>{item.unit}</span>
                <button onClick={()=>updateQuantity(item.id,"increase")} className='cursor-pointer text-2xl'>+</button>
              </div>
            </div>
          </div>
         ))
         }

         {cart.length>0&&(
          <div className='bg-white p-4 rounded-md'>
            <h1 className='text-lg font-bold mb-2'>Bill details</h1>
            <div>
              <div className='flex justify-between mb-1'>
              <div className='flex items-center'>
              <LuNotebookText></LuNotebookText>
              <h5 className='ml-1 text-gray-800 '>Items total</h5>
              </div>
              <div className='text-gray-800'>
                ₹{total}
              </div>
            </div>

            <div className='flex justify-between mb-1'>
              <div className='flex items-center'>
              <MdDeliveryDining></MdDeliveryDining>
              <h5 className='ml-1 text-gray-800 '>Delivery Charge</h5>
              </div>
              <div className='text-green-600'>
                <span className='line-through mr-1 text-gray-800'>₹25</span>FREE 
              </div>
            </div>

             <div className='flex justify-between mb-1'>
              <div className='flex items-center'>
              <GiShoppingBag></GiShoppingBag>
              <h5 className='ml-1 text-gray-800 '>Handling Charge</h5>
              </div>
              <div className='text-gray-800'>
                ₹5
              </div>
            </div>

            <div className='flex justify-between'>
              <h2 className='font-semibold text-lg mt-1'>Grand Total</h2>
              <h2 className='font-semibold text-lg mt-1'>₹{total + 5}</h2>
            </div>

            </div>
          </div>
         )}
         {cart.length>0&&(
          <div className='bg-white p-4 rounded-md mt-4'>
            <h4 className='font-semibold'>Cancellation Policy</h4>
            <p className='text-sm mt-2 text-gray-700'>Orders cannot be cancelled once packed for delivery. In case of unexpected delays, a refund will be provided, if applicable.</p>
          </div>
         )}
         {cart.length>0&&(
          <div className='bg-white p-4 rounded-md mt-4 '>
            <div className='flex justify-between items-center bg-green-600 p-2 text-white cursor-pointer '>
              <div>
               <h3 className='font-semibold text-lg'>₹{total + 5}</h3>
               <p>TOTAL</p>
              </div>
             <div className='flex text-lg font-semibold items-center'>
              Login to Proceed <ChevronRight></ChevronRight>
             </div>
            </div>
            
          </div>
         )}
    </div>
  )
}

export default CartComp
