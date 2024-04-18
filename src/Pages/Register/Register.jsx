import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoEyeOffOutline } from "react-icons/io5";

import { IoEyeOutline } from "react-icons/io5";
import { Helmet } from "react-helmet-async";
const Register = () => {
    const {createAccount} =useContext(AuthContext)
    const [click,setClick] =useState(false)
     
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => {
        const {email,password}=data

        const passwordVerify=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
        if( !passwordVerify.test(password) ){
            toast("Password should be one UpperCase ,one lowerCase and at least 6 character"); 
            return;  
        }
        createAccount(email,password)
        .then(() => {
           
        })
        .catch(error => {
            console.log(error.message)
        })
        toast('successfully register')

      }
    return (
        <div>
          <Helmet>
              <title>
                Luxury estate/Register
              </title>
            </Helmet>
        <div className="hero min-h-screen ">
<div className="hero-content flex-col  ">
<div className="text-center lg:text-left ">
  <h1 className="text-5xl font-bold">Please Register</h1>
  
</div>
<div className="card shrink-0 w-full max-w-sm shadow-2xl shadow-teal-200 bg-base-100 border border-teal-300">
  <form onSubmit={handleSubmit(onSubmit)}className="card-body">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="text" placeholder=" Your Name" className="input input-bordered" 
      {...register("YourName", { required: true })}
      />
      {errors.YourName && <span className="text-red-600">This field is required</span>}
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" placeholder="email" className="input input-bordered" 
       {...register("email", { required: true })}
      />
      {errors.email && <span className="text-red-600">This field is required</span>}
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Photo URL</span>
      </label>
      <input type="text" placeholder="Photo" className="input input-bordered" />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <div className="flex relative ">
      <input type={click ? 'text':'password'} placeholder="password" className="input input-bordered w-full" 
       {...register("password", { required: true })}
      />
      <div className="absolute  justify-end top-4 left-64">

{
 click? <IoEyeOffOutline onClick={() => setClick(false)} /> : <IoEyeOutline onClick={() => setClick(true)} />
}
</div>
      </div>
      {errors.password && <span className="text-red-600">This field is required</span>}
      <label className="label">
        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
      </label>
    </div>
    <div className="form-control mt-6">
      <button className="btn bg-teal-400">Register</button>
    </div>
    <p>Already have account?Please <Link to='/login' className="text-red-400 hover:underline">Login</Link></p>
  </form>
</div>
</div>
</div>
<ToastContainer />
    </div>
    );
};

export default Register;