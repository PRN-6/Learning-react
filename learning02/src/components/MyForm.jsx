import React from 'react'
import { useForm } from 'react-hook-form'

const myForm = () => {
  const {
    register,
    handleSubmit,
    // Error 1: This should be 'errors' (plural) to match the useForm hook's return value
    formState : { errors } 
  } = useForm()

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='firstName'>First Name</label>
          {/* Error 2: The 'id' attribute should match the 'htmlFor' attribute for accessibility */}
          <input id='firstName' 
          {...register(
            // Error 3: The name registered ('firstName') must exactly match 
            // the error property you check (errors.firstName)
            "firstName",
            {required: true}
          )} 
          />
          {/* Use the corrected 'errors' variable name here */}
          {errors.firstName && <span>this field is required</span>}
        </div>
        <div>
        <label htmlFor="age">Age</label>
        <input 
          id="age" 
          type="number" 
          {...register("age", { pattern: /\d+/ })} 
        />
        {/* You already had 'errors' defined correctly here */}
        {errors.age && <span>Please enter a number for age</span>}
      </div>

      <button type="submit">Submit</button>
    
    </form>
    
  )
}

export default myForm;
