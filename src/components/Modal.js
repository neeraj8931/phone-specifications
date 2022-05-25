import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

export default function Modal() {
    let parameter=useParams();
  const [modal, setModal] = useState([])
    const getData = () => {
        fetch(`https://api-mobilespecs.azharimm.site/v2/${parameter.modal}`)
          .then((res) => res.json())
          .then((res) => {
            console.log(res.data);
            setModal(res.data);
          })
      }
    useEffect(() => {
        getData();
    }, [ ])
   
  return (
    <section className="text-gray-600 body-font overflow-hidden lg:h-screen">
  <div className="container ">
    <div className="p-5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-2/5 p-10 w-full lg:h-auto rounded" src={modal.thumbnail} />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">{modal.brand}</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{modal.phone_name}</h1>
    
        <p className="leading-relaxed"><strong>Release Date: </strong>{modal.release_date}</p>
        <p className="leading-relaxed"><strong>Dimention : </strong>{modal.dimension}</p>
        <p className="leading-relaxed"><strong>Operating System: </strong>{modal.os}</p>
        <p className="leading-relaxed"><strong>Storage: </strong>{modal.storage}</p>
        
        </div>
    </div>
  </div>
</section>
  )
}
