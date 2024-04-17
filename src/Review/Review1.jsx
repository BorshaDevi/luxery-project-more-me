

const Review1 = ({review}) => {
    const {name,image,description,rating} =review
    return (
        <div className="mt-5">
            <div className="card w-96 bg-base-100 shadow-xl ">
    <div className="flex mt-5">
        <div >
        <img src={image} className='rounded-full w-16 ml-5'alt="Shoes" />

        </div >
       
    <div className="card-actions grid ml-3 ">
    <h6 className="font-semibold">{name}</h6> 
    <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
<p>{rating}</p>
    </div>
        </div>

  <div className="card-body">
    
    <p>{description}</p>
    
  </div>
</div>
        </div>
    );
};

export default Review1;