import { useState } from "react";
import InputField from "./InputField";
import { useProductStore } from "../store/product";
import {toast} from 'react-hot-toast';

const UpdateBox = ({product, setIsOpen}) => {
  const [updateData, setUpdateData] = useState({
    name: product.name || "",
    price: product.price || "",
    image: product.image || "",
  });

  const {updateProduct} = useProductStore();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUpdateData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = async (productId, updateData) => {
    try {
      await updateProduct(productId, updateData);
      
      setIsOpen(false);
      toast.success("Updated sucessfully");

    } catch (error) {
      toast.error("Error in updating product")
      console.log(error.message);
    }

  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50  flex justify-center items-center z-50">
      <div className="bg-gray-300 dark:bg-gray-800 rounded-lg w-96 p-6 realative">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-center">
          Update Product
        </h2>
        <InputField
          label="Product Name"
          id="name"
          name="name"
          value={updateData.name}
          onChange={handleChange}
        />

        <InputField
          label="Price"
          id="price"
          name="price"
          value={updateData.price}
          onChange={handleChange}
        />

        <InputField
          label="Image"
          id="image"
          name="image"
          value={updateData.image}
          onChange={handleChange}
        />
        <div className='flex w-full gap-3'>
          <button
            className="w-full bg-indigo-400 p-2 rounded-md mt-1 font-bold hover:bg-indigo-500"
            type="button"
            onClick={() => handleUpdate(product._id, updateData)}
          >
            Update
          </button>
          <button
            className="w-full bg-gray-400 p-2 rounded-md mt-1 font-bold hover:bg-gray-500"
            type="button"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateBox;
