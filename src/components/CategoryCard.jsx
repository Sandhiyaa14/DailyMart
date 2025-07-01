import React from 'react'
import { useNavigate } from 'react-router-dom';

const CategoryCard = ({name,image}) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/shop?category=${name.toLowerCase()}`);
  };
  return (
    <div>
      <div onClick={handleClick} className='bg-white rounded-xl shadow-md border hover:shadow-xl border-gray-100 overflow-hidden text-center'>
        <img src={image} className='w-full h-55 object-cover bg-gray-200' />
        <h4 className='py-3 text-lg font-semibold'>{name}</h4>
      </div>
    </div>
  )
}



export default CategoryCard
