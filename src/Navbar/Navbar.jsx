import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import 'animate.css';
const Navbar = () => {
  const {loginOut,user} =useContext(AuthContext)
    const links=<>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/updateProfile'>Update Profile</NavLink></li>
          
    </>
    const handleLogOut=()=>{
      
      loginOut()
      .then(() => {
        console.log('working')
      })
      .catch(error => {
        console.log(error.message)
      })
    }
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {links}
            </ul>
          </div>
          <a className=" text-2xl font-semibold text-teal-500 animate__animated animate__bounce animate__lightSpeedInLeft">Luxury estate</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full ">
          {
            user  && <img  src={user.photoURL}  className="" /> 
          }
        </div>
      </div>
      {
        user ?<button className="btn" onClick={handleLogOut}>Logout</button> : <Link to='/login'><button className="btn">Login</button></Link>
      }
          
          
        </div>
      </div>
    );
};

export default Navbar;