
import { FcGoogle } from "react-icons/fc";
import { IoEyeOffOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

import { IoEyeOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Helmet} from "react-helmet";
const Login = () => {
    const {signIn,googleLogIn,gitHubLogIn} =useContext(AuthContext)
    const [click,setClick] =useState(false)
    const location =useLocation()
    const navigate =useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => {
       const {email,password} =data
    //    if(email === true){
    //     toast('Email does not match')
    //     return;
    //    }
       signIn(email,password)
       .then(() => {
        navigate(location?.state? location.state : '/')
        
       })
       .catch(() => {
        
        toast(' Invalte')
       })
      }
      const handleGoogle=()=>{
        googleLogIn()
        navigate(location?.state? location.state : '/')
        toast('login successfully')
      }
      const handleGitHub=()=>{

        gitHubLogIn()
        navigate(location?.state? location.state : '/')
        toast('login successfully')
      }
      
    return (
        <div>
          
            <div className="hero min-h-screen ">
  <div className="hero-content flex-col  ">
    <div className="text-center lg:text-left ">
      <h1 className="text-5xl font-bold">Please Login</h1>
      
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl shadow-teal-200 bg-base-100 border border-teal-300">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
            <span className="label-text">Password</span>
          </label>
         <div>
        
         <div className="flex relative">
         <input type={click ? 'text':'password'} placeholder="password" className="input input-bordered w-full  " 
         
         {...register("password", { required: true })}
         
         />
         <div className="absolute  justify-end top-4 left-52 ">

          {
           click? <IoEyeOffOutline onClick={() => setClick(false)} /> : <IoEyeOutline onClick={() => setClick(true)} />
          }
         </div>
         </div>
          <div>

           {errors.password && <span className="text-red-600">This field is required</span>}
          </div>
           
        
           </div>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-teal-400">Login</button>
        </div>
        
      </form>
     <div className="p-5">
     <p>Do not have any account?Please <Link to='/register' className="text-red-400 hover:underline">Register</Link></p>
         <hr className="mt-5"></hr>
         
        <div className="flex justify-center items-center gap-5 mt-5 ">
        <FcGoogle onClick={handleGoogle} className="max-w-6xl" /> 
        <FaGithub onClick={handleGitHub} className="max-w-6xl" /> 
        </div>
     </div>
    </div>
  </div>
</div>
<ToastContainer />
        </div>
    );
};

export default Login;