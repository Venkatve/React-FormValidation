import React from 'react';
import useForm from '../hooks/useForm';
import validate from '../utils/validate';
import "./Form.css";

const FormSignup = () => {
  const {handleChange,values,handleSubmit,errors} = useForm(validate);
  

  return ( 
    <div className='form-content-right'>
      <form className='form' onSubmit={handleSubmit}>
        <h1>Get Started With Us Today! Create Your Account</h1>
        <div className='form-inputs'>
           <label htmlFor='username' className='form-label'>Username</label>
           <input id="username" 
           className='form-input' 
           type="text" 
           name="username" 
           placeholder='Enter Your username' 
           value={values.username}
           onChange={handleChange}
           />
           {errors.username && <p>{errors.username}</p>}
        </div>
        
        <div className='form-inputs'>
           <label htmlFor='email' className='form-label'>Email</label>
           <input id="email" 
           className='form-input' 
           type="email" 
           name="email" 
           placeholder='Enter Your email' 
           value={values.email}
           onChange={handleChange}
           />
           {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
           <label htmlFor='password' className='form-label'>Password</label>
           <input id="password" 
           className='form-input' 
           type="password" 
           name="password" 
           placeholder='Enter Your password' 
           value={values.password}
           onChange={handleChange}/>
           {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
           <label htmlFor='password2' className='form-label'>Confirm Password</label>
           <input id="password2" 
           className='form-input' 
           type="password" 
           name="password2" 
           placeholder='Enter Your confirm password' 
           value={values.password2}
           onChange={handleChange}/>
           {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit'>Sign Up</button>
        <span className='form-input-login'>
          Already have an account?Login <a href='#'>here</a>
        </span>
      </form>
      
      
    </div>
  )
}

export default FormSignup