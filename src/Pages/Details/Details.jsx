import { useLoaderData, useParams } from "react-router-dom";
import 'animate.css';
import { IoHomeOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { Helmet } from "react-helmet-async";

const Details = () => {
    const details=useLoaderData()
    const {Id}=useParams()
    const detail=details.find(detail => detail.id === Id)
    const {estate_title,segment_name,description,price,status,area,location,facilities,image_url} =detail
    
    return (
        <div className="hero min-h-screen">
           <Helmet>
              <title>
                Luxury estate/View Property/{Id}
              </title>
            </Helmet>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={image_url} className="max-w-sm rounded-lg shadow-2xl animate__animated animate__bounce animate__lightSpeedInLeft" />
    <div>
      <h1 className="text-5xl font-bold text-teal-400 animate__animated animate__bounce animate__lightSpeedInLeft">{estate_title}</h1>
      <p className="py-4  ">{description}</p>
      <div className="grid grid-cols-2">
        <div>
            <p className="flex gap-1 text-teal-900"><IoHomeOutline className="mt-1" />{segment_name}</p>
            <h5 className="text-teal-800">Home service:</h5>
            <div className="flex space-x-3">
            <p>{facilities[0]}</p>
            <p>{facilities[1]}</p>
            <p>{facilities[2]}</p>
            </div>
        </div>
        <div>
             <p>Area:{area}</p>
             
        </div>
      </div>
        <div className=" mt-5">
            
        <p className="text-xl">{status}</p>
        <p className="text-teal-950">{price}</p>
        </div>
        <div className="mt-5">
            <p className="text-red-900"><CiLocationOn /></p>
            <p>{location}</p>
        </div>
        <div className="text-center mt-5">
        
    </div>
    </div>
   
  </div>
</div>
    );
};

export default Details;