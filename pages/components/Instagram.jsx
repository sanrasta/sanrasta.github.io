import React from 'react'
import IgImg1 from './../../public/hhh.png'
import IgImg2 from './../../public/ruin_commercial.jpg'
import IgImg3 from './../../public/img9.jpg'
import IgImg4 from './../../public/ruin_house.jpg'
import IgImg5 from './../../public/ruin_earth.JPG'
import IgImg6 from './../../public/img12.webp'
import InstagramImg from './InstagramImg'


function Instagram() {
  return (
    <div id='gallery' className='max-w-[1240px] mx-auto text-center py-24' >
      <p className='text-2xl font-bold'> We take pride in helping out with our honest work</p>
      <p className='pb-4'>@Instagram</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 p-4'>
        <InstagramImg socialImg={IgImg1} />
        <InstagramImg socialImg={IgImg6} />
        <InstagramImg socialImg={IgImg3} />
       
        <InstagramImg socialImg={IgImg2} /> 
        <InstagramImg socialImg={IgImg5} /> 
        <InstagramImg socialImg={IgImg4} /> 
        
      </div>
    </div>
  )
}

export default Instagram