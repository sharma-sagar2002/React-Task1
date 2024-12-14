export const validate = (values) => {
  
    let errors = {};
    if (!values.firstName) {
      errors.firstName='First name is required';
    }
    
    if (!values.email) {
     
      errors.email = 'Email is required';
    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
      errors.email = 'Enter a valid email';
    }
    if (!values.password) {
     
      errors.password = 'Password is required';
    } else if (!/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(values.password)) {
      errors.password = 'Enter a valid password';
    }
    if (!values.mobileNumber) {
     
      errors.mobileNumber = 'Mobile number is required';
    } 

   
    return errors;
  };