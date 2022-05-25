import React, { useState, useEffect } from 'react';
import {Link, useParams } from "react-router-dom";

export default function BrandModals() {
    let parameter=useParams();
    console.log(parameter.id);
    const [modals, setModals] = useState([]);
    const getData = () => {
        fetch(`https://api-mobilespecs.azharimm.site/v2/brands/${parameter.id}`)
          .then((res) => res.json())
          .then((res) => {
            console.log(res.data);
            setModals(res.data.phones);
          })
      }

    
    useEffect(() => {
        getData();
    }, [parameter.id])
    
    let showmodals =modals.map(phone=>{
        return <>
        <div class="p-4 md:w-1/3 sm:mb-0 mb-6 text-center border-2">
        <Link to={`/${parameter.id}/${phone.slug}`}>
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center p-3S mx-auto" src={phone.image} />
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">{phone.phone_name}</h2>
        <p>{phone.brand}</p>
        </Link>
      </div>
        </>
    })
        console.log(modals);
      
    

  return (
      <>
    <div>BrandModals</div>
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 justify-center">
     {showmodals}
    </div>
  </div>
</section>
</>
  )
}
