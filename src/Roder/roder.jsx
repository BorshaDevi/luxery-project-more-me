import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/Error/ErrorPage";
import Details from "../Pages/Details/Details";
import PrivateRoute from "./PrivateRoute";
import Review from "../Review/Review";

const roder=createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/updateProfile",
                element:<UpdateProfile></UpdateProfile>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/details/:Id",
                loader:() => fetch('/estate.json'),
                element:<PrivateRoute><Details></Details></PrivateRoute>,
            },
            {
                path:'/review',
                
                element:<PrivateRoute><Review></Review></PrivateRoute>
            }
        ]
    }
])
export default roder;