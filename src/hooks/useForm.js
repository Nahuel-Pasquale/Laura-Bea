import { useState } from 'react'

export const useForm = (initialForm, validateForm) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [response, setresponse] = useState(null);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setForm({
        ...form,
        [name]: value,
      });  
    };

    const handleBlur = (e) => {
      handleChange(e);
      setErrors(validateForm(form));
      // mantener el error durante 5 segundos
      setTimeout(() => {
        setErrors({});
      }
      , 5000);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      setErrors(validateForm(form));

      if (Object.keys(errors).length === 0) {
        setIsLoading(true);
        console.log(form);
        // enviar el formulario
        // setIsLoading(false);
        // setresponse(true);
      }
    };

    return {
      form,
      errors,
      isLoading,
      response,
      handleChange,
      handleBlur,
      handleSubmit,
    }
};
