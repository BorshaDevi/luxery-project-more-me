import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const UpdateProfile = () => {
    const {user}=useContext(AuthContext)
    
    return (
        <div>
            
        </div>
    );
};

export default UpdateProfile;