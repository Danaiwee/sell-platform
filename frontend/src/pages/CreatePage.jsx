import { useState } from "react";
import {toast} from 'react-hot-toast';
import InputField from '../components/InputField';
import { useProductStore } from "../store/product";
import {useNavigate} from 'react-router-dom';

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: ''
  });

  const navigate = useNavigate();

  const {createProduct} = useProductStore();

  const handleChange = (e) => {
    const {name, value} = e.target;

    setNewProduct((prevData) => ({
      ...prevData,
      [name]: value
    }))
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {success, message} = await createProduct(newProduct);
    if(!success) {
      console.log(message)
      toast.error(message)

    } else {
      console.log(message)
      toast.success(message)

      setNewProduct({
        name: '',
        price: '',
        image: ''
      })
    }
    navigate('/');
  }

  return (
    <div className='flex flex-col items-center mt-10 mx-3 lg:mx-auto'>
      <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold'>
        Create New Product
      </h1>

      <form 
        onSubmit={handleSubmit}
        className='max-w-[720px] w-full mt-6  bg-gray-200 py-5 px-10 rounded-xl  dark:bg-gray-800  dark:text-gray-500'
      >
        <InputField 
          label='Product Name'
          id='name'
          name='name'
          value={newProduct.name}
          onChange={handleChange}
        />

        <InputField 
          label='Price'
          id='price'
          name='price'
          value={newProduct.price}
          onChange={handleChange}
        />

        <InputField 
          label='Image'
          id='image'
          name='image'
          value={newProduct.image}
          onChange={handleChange}
        />

        <div className='w-full flex items-center justify-center mt-3 h-10 rounded-lg text-lg font-bold bg-indigo-500 text-white '>
          <button
            type='submit'
            className='w-full h-full rounded-lg hover:bg-indigo-400'
          >
            Create Product
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreatePage;