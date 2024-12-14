// src/SimpleForm.js
import React from 'react';
import useCustomForm from '../hooks/useCustomForm';
import { validate } from '../utils/validation';
import Input from './Input';

const SimpleForm = () => {
  const initialValues = {
    // firstName: '', lastName: '', email: '', mobileNumber: '',password: '',
    };

  const { formValues, errors, handleSubmit, register } = useCustomForm(initialValues, validate);


  const onSubmit = (values) => {
    alert("Form submitted successfully");
    console.log(values);
  };

  return (
    <div  className='p-10'>
    <h1 className=" text-center font-bold  text-3xl">Form</h1>
    <form className=" bg-orange-300  rounded-lg flex flex-wrap w-1/2 mx-auto my-4 px-8 py-6" onSubmit={handleSubmit(onSubmit)}>
    <Input className='w-full p-2 m-2 rounded-lg border-gray-700' type= "firstName"placeholder='First Name' errors={errors} {...register('firstName') } />
  
    <Input className='w-full p-2 m-2 rounded-lg border-gray-700' type= "lastName" placeholder='Last Name' errors={errors} {...register('lastName')}  />

    <Input className='w-full p-2 m-2 rounded-lg border-gray-700' type= "email" placeholder='Email' errors={errors} {...register('email')}  />

    <Input className='w-full p-2 m-2 rounded-lg border-gray-700' type= "mobileNumber" placeholder='Mobile Number' errors={errors} {...register('mobileNumber')}  />
  
    <Input className='w-full p-2 m-2 rounded-lg border-gray-700' type= "password" placeholder='Password' errors={errors} {...register('password')}  />

     <button  className=" w-full  rounded-md text-white bg-orange-500 p-2 m-2 hover:bg-orange-700 " type="submit">Submit</button>
    </form>
  </div>
    
  );
  
};

export default SimpleForm;



        
{/* <input className='w-full p-2 m-2 rounded-lg border-gray-700' placeholder='First Name' {...register('firstName')}   />
{errors.firstName && <span className="mx-2 text-red-500">{errors.firstName }</span>} */}

{/* <input className='w-full p-2 m-2 rounded-lg border-gray-700' {...register('lastName') }  placeholder='Last Name'/>
{errors.lastName && <span className="mx-2 text-red-500" >{errors.lastName}</span>}
*/}

 {/* <input  className='w-full p-2 m-2 rounded-lg border-gray-700' {...register('email')} placeholder='Email'/>
{errors.email && <span className="mx-2 text-red-500" >{errors.email}</span>}
*/}
{/* <input className='w-full p-2 m-2 rounded-lg border-gray-700' {...register('mobileNumber')}  placeholder='Mobile Number'/> */}

{/* <input className='w-full p-2 m-2 rounded-lg border-gray-700'   {...register('password')} placeholder='Password' />
{errors.password && <span className="mx-2 text-red-500">{errors.password}</span>} */}
     
