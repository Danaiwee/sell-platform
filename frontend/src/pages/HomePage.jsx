import { FaRocket } from "react-icons/fa"
import { FaSadTear } from "react-icons/fa";

import Card from "../components/Card"
import {useProductStore} from '../store/product.js';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UpdateBox from "../components/UpdateBox.jsx";

const HomePage = () => {
  const {fetchProducts, products} = useProductStore();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetchProducts();
  },[fetchProducts]);

  console.log(products);
  

  return (
    <>
    <div className='flex flex-col max-w-[1240px] justify-center mx-auto mt-[50px] lg:mt-[100px]'>
      <div className='flex gap-3 items-center justify-center'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-violet-500'>
          Current Products
        </h1>
        <FaRocket className='text-violet-600 size-6 md:size-8 lg:size-10' />
      </div>

      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10 mt-10 mx-[20px]'>
        {products && products.map((product) => (
          <div
            key={product._id}
          >
          <Card 
            product={product}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />

          {isOpen && (
            <UpdateBox 
              setIsOpen={setIsOpen}
              product={product}
            />
          )}
          </div>
        ))}
      </div>

      {products.length === 0 && (
          <div className='flex items-center justify-center gap-2'>
            <p className='text-lg lg:text-xl font-bold'>
              No products found
            </p>
            <FaSadTear />
            <Link 
              to='/create'
              className='text-lg lg:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-violet-500 hover:scale-105 transition-all duration-300'
            >
              Create a product
            </Link>
          </div>
        )}
    </div>
    
    </>
  )
}

export default HomePage