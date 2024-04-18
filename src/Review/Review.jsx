import { useEffect, useState } from "react";
import Review1 from "./Review1";
import Marquee from "react-fast-marquee";
import Review2 from "./Review2";
import { Helmet } from "react-helmet-async";

const Review = () => {
    const [review1,setReview1] =useState([])
    const [review2,setReview2] =useState([])
    useEffect(() => {
        fetch('review1.json')
        .then (res => res.json())
        .then(data => setReview1(data))
    },[])
     
    useEffect(() => {
        fetch('review2.json')
        .then(res => res.json())
        .then(data => setReview2(data))
    },[])
    return (
        <div className="">
            <Helmet>
              <title>
                Luxury estate/Review
              </title>
            </Helmet> 
            {/* review1 */}
            <Marquee>
            <div className="lg:flex  ml-10 gap-8">
                {
                    review1.map((review,index) => <Review1 key={index} review={review}></Review1>)
                }
            </div>
            </Marquee>
            {/* review2 */}
            <div>
            <Marquee>
            <div className="lg:flex ml-10 gap-8">
                {
                    review2.map((revie ,index)=> <Review2  key={index} revie={revie}></Review2>)
                }
            </div>
            </Marquee>
            </div>
        </div>
    );
};

export default Review;