import React from 'react';
import { useState,useEffect } from 'react';

export default function Latest() {
    const [latest, setLatest] = useState([]);
    const getData = () => {
        fetch(`https://api-mobilespecs.azharimm.site/v2/latest`)
          .then((res) => res.json())
          .then((res) => {
            console.log(res.data);
            setLatest(res.data);
          })
      }

    useEffect(() => {
        getData();
    }, [])
    let showLatestModals= latest.phones.map(phone=>{
        return <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a href="#" className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="w-3/5 mx-auto  object-center w-full h-full" src={phone.image}/> 
        </a>
        <div className="mt-4">
          <h2 className=" text-center text-gray-900 title-font text-lg font-medium">{phone.phone_name}</h2>
        </div>
      </div>
    })
    
  return (
    <section class="text-gray-600 body-font">
        <h2 className='text-center text-5xl'>{latest.title}</h2>
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
        {showLatestModals}
    </div>
  </div>
</section>
  )
}
