
import { useState } from 'react';

const useCustomForm = (initialValues, validate) => {
  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    const validationErrors = validate(formValues);
    console.log(validationErrors);
    setErrors(validationErrors);
  };

  const handleSubmit = (onSubmit) => (e) => {
    e.preventDefault();
    const validationErrors = validate(formValues);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      onSubmit(formValues);
    }
  };

  const register = (name, errorObj) => ({
    name,
    value: formValues[name] || '',
    onChange: handleChange,
    
  });

  return {
    formValues,
    errors,
    handleChange,
    handleSubmit,
    register,
  };
};

export default useCustomForm;

