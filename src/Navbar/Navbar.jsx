import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Navbar = () => {
  const {loginOut} =useContext(AuthContext)
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
          <a className=" text-2xl font-semibold text-teal-500">Luxury estate</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
          <Link to='/login'><button className="btn">Login</button></Link>
          <button className="btn" onClick={handleLogOut}>LogOut</button>
        </div>
      </div>
    );
};

export default Navbar;