import { useForm } from "react-hook-form";
import Input from "./Input";

const Form =()=>{
   const {register, handleSubmit,formState:{errors}} =useForm();
     const onSubmit = (data)=>{
        console.log(data);
        alert("Form submitted");
     }
    return (
        <div className="  p-10">
            <h1 className=" text-center font-bold  text-3xl">Form</h1>
            <form className=" bg-orange-300  rounded-lg flex flex-wrap w-1/2 mx-auto my-4 px-8 py-6"  >
            <input className="w-full  p-2 m-2  rounded-md border-gray-700" {...register("name")}  placeholder="Name"/>
           {errors.name && <span className="mx-2 text-red-500">{errors.name.message}</span>}
               


                <input className="w-full p-2 m-2  rounded-md border-gray-700" {...register("mobileNumber", {maxLength:{value:10, message:"Enter 10 digit mobile number"},minLength:{value:10,message:"Enter 10 digit mobile number"} }, )}  placeholder="Mobile Number"/>
                {errors.mobileNumber &&<span className="mx-2 text-red-500">{errors.mobileNumber.message}</span>}
                 

                <input className="w-full p-2 m-2  rounded-md border-gray-700" {...register("email", {required:"Email is required", pattern: {value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, message: "Enter valid email"}} )}  placeholder="Email"/>
                 {errors.email &&<span className="mx-2 text-red-500">{errors.email.message}</span>}


                <input className="w-full p-2 m-2 rounded-md border-gray-700" {...register("password", {required:"Password is required", pattern: {value :/^[a-zA-Z0-9!@#$%^&*]{6,16}$/, message:"Enter valid password"}})}  placeholder="Password"/>
                {errors.password &&<span className="mx-2 text-red-500">{errors.password.message}</span>}


                <button  className=" w-full  rounded-md text-white bg-orange-500 p-2 m-2 hover:bg-orange-700 " onClick={handleSubmit(onSubmit)}>Submit</button>
                
            </form>
        </div>
    )
}





// return (
// <div className="  p-10">
// <h1 className=" text-center font-bold  text-3xl">Form</h1>
// <form  className=" bg-orange-300  rounded-lg flex flex-wrap w-1/2 mx-auto my-4 px-8 py-6" onSubmit={handleSubmit(onSubmit)}>
     
//     <Input
//          type="text"
//          placeholder="Name"
//          name="name"
//         className="w-full p-2 m-2 rounded-lg border-gray-700"
//          {...register("name", {
//            required: "name is required",
//          })}
//          error={errors.name ? errors.name.message : ""}
//     />
//     <Input
//          type="text"
//          placeholder="Email"
//          name="email"
//         className="w-full p-2 m-2 rounded-lg border-gray-700"
//          {...register("email", {
//            required: "Email is required",
//            pattern: {
//              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//              message: "Invalid email address",
//            },
//          })}
//          error={errors.email ? errors.email.message : ""}
//     />
//     <Input
//        type="tel"
//        placeholder="Mobile Number"
//        className="w-full p-2 m-2 rounded-lg border-gray-700"
//        // error={errors.phone ? errors.phone : ""}
//        {...register("phone", {
//          required: "Mobile Number is required",
//          minLength: {
//            value: 10,
//            message: "Please enter 10 digits mobile number",
//          },
//          maxLength: {
//            value: 10,
//            message: "Please enter 10 digits mobile number",
//          },
//          pattern: {
//            value: /^\d{10}$/,
//            message: "Please enter 10 digits mobile number",
//          },
//        })}
//        error={errors.phone ? errors.phone.message : ""}
//      />
    
//     <Input
//          type="password"
//          name="password"
//          placeholder="Password"
//         className="w-full p-2 m-2 rounded-lg border-gray-700"
//          {...register("password", {
//            required: "Password is required",
//            minLength: {
//              value: 8,
//              message: "Password must be at least 8 characters",
//            },
//            pattern: {
//              value: /^(?=.*[a-zA-Z])(?=.*[0-9])/,
//              message: "Password must be alphanumeric",
//            },
//          })}
//          error={errors.password ? errors.password.message : ""}
//     />

//     <button type="submit" className=" w-full  rounded-md text-white bg-orange-500 p-2 m-2 hover:bg-orange-700" > Submit</button>
// </form>
// </div>
// )
// }


export default Form