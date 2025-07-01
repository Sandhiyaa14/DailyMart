import React, { useState, useEffect } from 'react';
import products from '../utils/Data';
import ProductCard from '../components/ProductCard';
import { Filter } from 'lucide-react';
import empty from "../assets/Images/empty.jpg";
import { useLocation } from 'react-router-dom';

const Shop = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const categoryFromQuery = query.get('category') || "";

  // State
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(categoryFromQuery);
  const [show, setShow] = useState(false);

  // Sync URL query with state
  useEffect(() => {
    setCategory(categoryFromQuery);
  }, [categoryFromQuery]);


  const handleShow = () => setShow(!show);

  const handlePriceChange = (e) => {
    setPriceRange([priceRange[0], Number(e.target.value)]);
  };

  const resetFilters = () => {
    setCategory("");
    setPriceRange([0, 500]);
    setSearch("");
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === "" || product.category.toLowerCase() === category.toLowerCase()) &&
    product.price >= priceRange[0] &&
    product.price <= priceRange[1]
  );

  return (
    <div className='mt-30 px-5 xl:px-48 md:flex gap-8'>
      
      {/* Desktop Filters */}
      <div className='bg-gray-100 p-4 rounded w-[280px] fixed hidden md:block'>
        <h1 className='font-semibold text-lg'>Filters</h1>

        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='bg-white rounded border-gray-100 w-full p-2 mt-2'
          placeholder='Search...'
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className='w-full my-5 border p-2'
        >
          <option value="">All Categories</option>
          <option value="fruits">Fruits</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="vegetables">Vegetables</option>
          <option value="Non-veg">Non Veg</option>
          <option value="Nuts">Nuts</option>

        </select>

        <label className='block'>Price Range: {priceRange[0]} - {priceRange[1]}</label>
        <input
          type="range"
          max={500}
          className='block cursor-pointer w-full'
          value={priceRange[1]}
          onChange={handlePriceChange}
        />

        <button
          className='bg-red-600 px-2 py-1 cursor-pointer rounded text-white mt-5'
          onClick={resetFilters}
        >
          Reset Filters
        </button>
      </div>

      {/* Mobile Filters */}
      <div className='bg-gray-100 p-4 rounded w-full md:hidden block'>
        <div className='flex items-center cursor-pointer justify-between' onClick={handleShow}>
          <h1 className='font-semibold text-lg'>Filters</h1>
          <Filter className='w-5 h-5' />
        </div>

        {show && (
          <div>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className='bg-white rounded border-gray-100 p-2 mt-2 w-full'
              placeholder='Search...'
            />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className='w-full my-5 border p-2'
            >
              <option value="">All Categories</option>
              <option value="fruits">Fruits</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="vegetables">Vegetables</option>
              <option value="Non-veg">Non Veg</option>
              <option value="Nuts">Nuts</option>

            </select>

            <label className='block'>Price Range: {priceRange[0]} - {priceRange[1]}</label>
            <input
              type="range"
              max={500}
              className='block cursor-pointer w-full'
              value={priceRange[1]}
              onChange={handlePriceChange}
            />

            <button
              className='bg-red-600 px-2 py-1 cursor-pointer rounded text-white mt-5'
              onClick={resetFilters}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Products Section */}
      <div className='flex-1 md:ml-[300px]'>
        {filteredProducts.length > 0 ? (
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6 gap-2 mt-7 md:mt-0'>
            {filteredProducts.map((product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className='flex justify-center w-full mt-10'>
            <img src={empty} alt="No Products" className='w-120' />
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
