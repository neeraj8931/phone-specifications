import React from 'react';
import { useState,useEffect } from 'react';

export default function Latest() {
    const [latest, setLatest] = useState([]);
    const [latestPhones, setLatestPhones] = useState([]);
    const getData = () => {
        fetch(`https://api-mobilespecs.azharimm.site/v2/latest`)
          .then((res) => res.json())
          .then((res) => {
            setLatest(res.data);
            setLatestPhones(res.data.phones);
            console.log(latestPhones);
          })
      }

    useEffect(() => {
        getData();
        console.log(latestPhones)
        latestPhones.map(i=>console.log("ok"));
    },[ ])
    
    let showLatestPhones= latestPhones.map(phone=>{
        return <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <div className="block relative rounded overflow-hidden">
          <img alt="ecommerce" class=" w-4/5 h-auto block" src={phone.image} />
        </div>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-medium">{phone.phone_name}</h2>
        </div>
      </div>
    })
  return (
    <section class="text-gray-600 body-font">
        <h2 className='text-center text-5xl'>{latest.title}</h2>
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
        {showLatestPhones}
    </div>
  </div>
</section>
  )
}
