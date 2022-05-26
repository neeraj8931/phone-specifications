import React from 'react';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

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
    },[])
    
    let showLatestPhones= latestPhones.map(phone=>{
        return <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
          <Link to={`/latest/${phone.slug}`}>
        <div className="block relative rounded overflow-hidden">
          <img alt="ecommerce" class=" h-auto block mx-auto" src={phone.image} />
        </div>
        </Link>
        <Link to={`/latest/${phone.slug}`}>
        <div className="mt-4">
          <h2 className="text-center text-gray-900 title-font text-lg font-medium">{phone.phone_name}</h2>
        </div>
        </Link>
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
