import React from 'react'
import FormSignup from './FormSignup';
import "./Form.css";


const Form = () => {
  return (
    <>
    <div className='form-container'>
      <span className='close-btn'>X</span>
        <div className='form-content-left'>
          <img src='https://cdn.pixabay.com/photo/2017/05/20/13/08/horse-2328891_960_720.png' alt="left" className='form-img'/>
        </div>
        <FormSignup />
    </div>
    </>
    
  )
}

export default Form