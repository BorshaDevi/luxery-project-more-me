import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";


const UpdateProfile = () => {
    const {user,loader,updateProfiles}=useContext(AuthContext)
    if(loader){
        return <span className="loading loading-spinner loading-lg ml-60"></span>
    }
    const handleUpdate=(e)=> {
       e.preventDefault()
       const name=e.target.name.value
       
       updateProfiles(name)
       .then(() => {
           toast('successfully')
       })
       .catch(error => {
        console.log(error)
       })
       
    }
    
    return (
        <div>
            <Helmet>
                <title>luxury estate/Update profile</title>
            </Helmet>
            <form onSubmit={handleUpdate}  >
            <div className="text-center max-w-6xl p-10  mx-auto mt-8">
            <div className="avatar">
         <div className="w-24 rounded-full">
           <img src={user.photoURL} alt='avatar'></img>
            
                     </div>
            </div>
            <div>
                <input type='text' placeholder={user.displayName} name='name' className="w-56 text-center mt-3 outline-white " />
                <hr className="mt-3"></hr>
                <input type='email' placeholder={user.email} name='email' className="w-full text-center outline-white mt-3" />
                <hr className="mt-3"></hr>
                <button  className="btn bg-teal-400 mt-2">Save</button>
            </div>
                
            </div>
            </form>
            
        </div>
    );
};

export default UpdateProfile;