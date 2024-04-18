import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";


const UpdateProfile = () => {
    const {user}=useContext(AuthContext)
    
    return (
        <div>
            <Helmet>
                <title>luxury estate/Update profile</title>
            </Helmet>
            
        </div>
    );
};

export default UpdateProfile;