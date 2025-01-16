
const InputField = ({label, type = 'text', id, name, value, onChange}) => {
  return (
    <div className='flex flex-col gap-1'>
          <label 
            htmlFor='productName'
            className='text-md font-semibold'
          >
            {label}
          </label>
          <input 
            className='h-10 p-4 mb-3 rounded-lg align-middle focus:border-none focus:outline-none focus:ring-1 focus:ring-gray-500 dark:bg-gray-900 dark:text-white dark:focus:bg-gray-700 '
            id={id}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
          />
        </div>
  )
}

export default InputField