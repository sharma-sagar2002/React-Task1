
const Input = ({ type, placeholder, className, error, ...props }) => {
    return (
      <>
        <input
          type={type}
          placeholder={placeholder}
          className={className}
          // {...register,{defaultInput,...rules}}
          {...props}
        />
  
        {error && error.length > 0 && <span  className="mx-2 text-red-500" >{error} </span>}
      </>
    );
  };
  
  export default Input;
  