import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <header className="flex items-center justify-between max-w-[1140px] mx-3 lg:mx-auto mt-3">
      <div className="flex items-center gap-3 text-2xl md:3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-violet-500">
        <Link to="/">PRODUCT STORE</Link>
        <MdOutlineShoppingCart className="text-violet-500" />
      </div>

      <div className="flex items-center gap-3">
        <Link
          to="/create"
          className="bg-gray-200 p-4 rounded-xl hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-gray-500 dark:hover:text-gray-800"
        >
          <FaPlus className='size-3 md:size-4 lg:size-5' />
        </Link>
        <button
          className="bg-gray-200 p-4 rounded-xl hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-gray-500 dark:hover:text-gray-800"
          onClick={() => setIsDarkMode((prev) => !prev)}
        >
          {isDarkMode ? (
            <FaRegLightbulb className='size-3 md:size-4 lg:size-5' />
          ) : (
            <FaLightbulb className='size-3 md:size-4 lg:size-5' />
          )}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
