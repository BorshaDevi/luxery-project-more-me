
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

import 'animate.css';

const EstateCard = ({estate}) => {
    const {id,estate_title,price,area,location,image_url} =estate
    return (
        <div className="">
         
           <div className="card w-96  shadow-xl shadow-teal-100 mt-5 lg:animate__animated animate__bounce animate__fadeOutBottomLeft ">
  <div className="grid grid-cols-2 p-8">
    <div >
    <img src={image_url}  className="mt-8" alt="Shoes" />
    <div className="card-actions justify-start mt-4">
     <Link to={`/details/${id}`}> <button className="btn bg-teal-200 hover:bg-teal-500">View Property</button></Link>
    </div>
    </div>
    <div>
    <div className="card-body">
    <h2 className="card-title">{estate_title}</h2>
    <div className="grid grid-cols-2 gap-16">
       <div>
       <MdLocationOn /> <p>{location}</p>
       </div>
       <div>
       <p>{area}</p>
       </div>

    </div>
     <span className="text-teal-900">{price}</span>
  </div>
      
    </div>
  </div>
  
</div>
        </div>
    );
};

export default EstateCard;