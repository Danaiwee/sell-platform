import { FaRegPenToSquare } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import { useProductStore } from "../store/product";
import { toast } from "react-hot-toast";

const Card = ({ product, setIsOpen }) => {
  const { _id, image, name, price } = product;

  const { deleteProduct} = useProductStore();

  const handleDelete = async (productId) => {
    const { success, message } = await deleteProduct(productId);
    if (!success) {
      toast.error(message);
    } else {
      toast.success(message);
    }
  };

  return (
    <div className="flex flex-col flex-wrap justify-center gap-3 rounded-xl overflow-hidden bg-gray-300 dark:bg-gray-700 hover:scale-105 hover:shadow-xl transition-all duration-300">
      <img
        src={image}
        alt="product_image"
        className="w-full h-48 object-cover"
      />

      <div className="flex flex-col pl-3">
        <h3 className="font-bold text-lg">{name}</h3>
        <p>${price}</p>
      </div>

      <div className="flex items-center gap-2 pl-3 mb-6">
        <button 
          className="bg-blue-200 hover:bg-blue-300 transition-colors duration-300 p-3 rounded-lg dark:text-gray-600"
          onClick = {() => setIsOpen(true)}
        >
          <FaRegPenToSquare size={15} />
        </button>

        <button
          className="bg-red-200 hover:bg-red-300 transition-colors duration-300 p-3 rounded-lg dark:text-gray-600"
          onClick={() => handleDelete(_id)}
        >
          <FaRegTrashAlt size={15} />
        </button>
      </div>
    </div>
  );
};

export default Card;
