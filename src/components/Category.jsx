import fruits from "../assets/Images/fruits.png"
import vegetables from "../assets/Images/vegetabels.png"
import dairy from "../assets/Images/dairy.png"
import bakery from "../assets/Images/bakery.png"
import meat from "../assets/Images/meat.png"
import nuts from "../assets/Images/nuts.avif"
import CategoryCard from './CategoryCard'
const Category = () => {
    const categoryItems = [
        {
            name: "Fruits",
            image:fruits
        },
         {
            name: "Vegetables",
            image:vegetables
        },
         {
            name: "Dairy",
            image:dairy
        },
         {
            name: "Bakery",
            image:bakery
        },
         {
            name: "Non-veg",
            image:meat
        },
         {
            name: "Nuts",
            image:nuts
        },
    ]
  return (
    <div className='pb-15 mx-auto px-5 xl:px-48'>
      <h1 className='text-3xl font-bold text-center mt-10'>Shop by Category</h1>
    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mt-7'>
       
       {categoryItems.map((item,index)=>(
          <CategoryCard key={index} name={item.name} image={item.image}/>
       ))}
      </div>
    </div>
  )
}

export default Category
