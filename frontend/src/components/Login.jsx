import React from 'react'
import {useForm} from 'react-hook-form'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  }= useForm()

  const onSubmit = (data) => {

  }

  return (
    <div className='min-h-screen flex justify-center items-center'>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col '>
          <div>
            <label htmlFor='email'>Email:</label>
            <input 
            {...register("email", {required: "email is required" })}
              id='email'
              type='email'
              placeholder='email'
            />
            {errors.email && <p>{errors.email.message}</p>}          
          </div>
          <div>
            <label htmlFor='password'>Password:</label>
            <input 
            {...register("password",{required: "Password is required"})}
            id='password'
            type='password'
            placeholder='password'
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
        </form> 
    </div>
  )
}

export default Login