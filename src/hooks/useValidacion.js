import React, { useState, useEffect } from 'react';


const useValidation = (stateInitial, validate, fn) => {

  const [ values, setValues ] = useState(stateInitial);
  const [ errors, setErrors ] = useState({});
  const [ submitForm, setSubmitForm ] = useState(false);

  useEffect(() => {
    if(submitForm) {
      const noErrors = Object.keys(errors).length === 0;
      if(noErrors) {
        fn();
      }
      setSubmitForm(false);
    }
  }, [errors]);

  // función que se ejecuta cuando el usuario escribe
  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  }

  // función que se ejecuta cuando el usuario hace submit
  const handleSubmit = e => {
    e.preventDefault();
    const errors = validate(values);
    setErrors(errors);
    setSubmitForm(true);
  }

  //cuando el usuario esta escribiendo y se sale
  const handleBlur = () => {
    const errors = validate(values);
    setErrors(errors);
  }


  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleBlur
  };
}
 
export default useValidation;