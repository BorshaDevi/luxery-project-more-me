
import { FcGoogle } from "react-icons/fc";

import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const Login = () => {
    const {signIn,googleLogIn,gitHubLogIn} =useContext(AuthContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => {
       const {email,password} =data
       signIn(email,password)
       .then(result => {
        console.log(result.user)
       })
       .catch(error => {
        console.log(error.message)
       })
      }
      const handleGoogle=()=>{
        googleLogIn()

      }
      const handleGitHub=()=>{
        gitHubLogIn()
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
          <input type="password" placeholder="password" className="input input-bordered" 
          {...register("password", { required: true })}
          />
           {errors.password && <span className="text-red-600">This field is required</span>}
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
        </div>
    );
};

export default Login;