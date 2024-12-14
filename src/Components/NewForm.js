import useCustomForm from "../hooks/useCustomForm";
import useForm from "../hooks/useForm";
import Input from "./Input";

const NewForm = () => {
    
    const { register, handleSubmit, errors } = useForm({
      email: "",
      name:"",
      phone:"",
      password: "",
    });
  
   const onSubmit= (data)=>{
    alert("form submitted");
     console.log(data);
   }
  
    return (
        <div className="  p-10">
        <h1 className=" text-center font-bold  text-3xl">Form</h1>
        <form  className=" bg-orange-300  rounded-lg flex flex-wrap w-1/2 mx-auto my-4 px-8 py-6" onSubmit={handleSubmit(onSubmit)}>
              
             <Input
                  type="text"
                  placeholder="Name"
                  name="name"
                 className="w-full p-2 m-2 rounded-lg border-gray-700"
                  {...register("name", {
                    required: "name is required",
                  })}
                  error={errors.name ? errors.name : ""}
                />
                <Input
                  type="text"
                  placeholder="Email"
                  name="email"
                 className="w-full p-2 m-2 rounded-lg border-gray-700"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email address",
                    },
                  })}
                  error={errors.email ? errors.email : ""}
                />
                 <Input
                type="tel"
                placeholder="Mobile Number"
                className="w-full p-2 m-2 rounded-lg border-gray-700"
                error={errors.phone ? errors.phone : ""}
                {...register("phone", {
                  required: "Mobile Number is required",
                  minLength: {
                    value: 10,
                    message: "Please enter 10 digits mobile number",
                  },
                  maxLength: {
                    value: 10,
                    message: "Please enter 10 digits mobile number",
                  },
                  pattern: {
                    value: /^\d{10}$/,
                    message: "Please enter 10 digits mobile number",
                  },
                })}
                
              />
              
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                 className="w-full p-2 m-2 rounded-lg border-gray-700"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                    pattern: {
                      value: /^(?=.*[a-zA-Z])(?=.*[0-9])/,
                      message: "Password must be alphanumeric",
                    },
                  })}
                  error={errors.password ? errors.password : ""}
                />
  
                <button type="submit" className=" w-full  rounded-md text-white bg-orange-500 p-2 m-2 hover:bg-orange-700" > Submit</button>
               
             
            </form>
          </div>

    );
  };
  
  export default NewForm;
  