import React from 'react';
import { useEffect,useState } from 'react';

export default function Brands() {
const [brandList, setbrandList] = useState([]);
const getData = () => {
    fetch('https://api-mobilespecs.azharimm.site/v2/brands')
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
        setbrandList(res.data);
      })
  }
  
  useEffect(() => {
    getData();
    
  }, [])
  console.log(brandList);
  let brands=brandList.map(brand=>{
    return <>
     <div class="p-4 md:w-1/3">
          <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
            <div class="flex items-center mb-3">
              
              <h2 class="text-gray-900 text-lg title-font font-medium">{brand.brand_name}</h2>
            </div>
            
          </div>
        </div>
  </>
  });

  return (
      <>
                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="flex flex-col text-center w-full mb-20">
                            <h2 class="text-xs text-yellow-500 tracking-widest font-medium title-font mb-1">Brands</h2>
                        </div>
                        <div class="flex flex-wrap -m-4">
                       {brands}
                       </div>
                    </div>
                </section>
      </>
    
   
  )
}
