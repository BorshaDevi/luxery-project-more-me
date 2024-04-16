import { useEffect, useState } from "react";
import EstateCard from "../EstateCard/EstateCard";


const EstateCards = () => {
       const [estates,setEstates] =useState([])
       useEffect(() => {
        fetch('estate.json')
        .then(res => res.json())
        .then(data => setEstates(data))
       },[])
    return (
        <div className="mt-10">
            <h1 className="text-center font-semibold text-xl">Resorts are available</h1>
            <div className="grid grid-cols-1 ml-10 lg:grid-cols-3 lg:gap-5  ">
                {
                    estates.map(estate => <EstateCard key={estate.id} estate={estate}></EstateCard>)
                }
            </div>
        </div>
    );
};

export default EstateCards;