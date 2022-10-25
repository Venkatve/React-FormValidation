import React from 'react'
import { useState } from 'react'

const useForm = (validate) => {
  const [values, setValues] = useState({
    name:"",
    email:"",
    password:"",
    password2:"",
  })

  const [errors, setErrors] = useState({})

  const handleSubmit=(event)=>{
    event.preventDefault();

    setErrors(validate(values));
  }

  const handleChange=(e)=>{
    const{value,name} = e.target;
    setValues((prevValues)=>{
        return{
            ...prevValues,
            [name]:value,
        }
    })
  }
  return {handleChange,values,handleSubmit,errors};
}

export default useForm