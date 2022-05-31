import React from 'react';
import heroImage from '../images/Mobile banner.jpg'
import { Link } from "react-router-dom";

export default function Hero() {
  return (
   <>
<section className="text-fuchsia-700 body-font">
  <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font text-5xl mb-4">Get mobile phone Specifications</h1>
      <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div className="flex justify-center">
        <Link to="/brands"><button className="inline-flex text-green-100 bg-fuchsia-700 border-0 py-2 px-6 focus:outline-none hover:text-green-100 hover:bg-fuchsia-700 rounded text-lg">Show Brands</button></Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="Get mobile phone Specifications" src={heroImage}/>
    </div>
  </div>
</section>
</>
  )
}
