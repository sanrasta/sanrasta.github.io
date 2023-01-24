import React from 'react'
import IgImg1 from './../../public/solar/1.jpg'
import IgImg2 from './../../public/solar/2.jpg'
import IgImg3 from './../../public/solar/3.png'
import IgImg4 from './../../public/solar/4.jpg'
import IgImg5 from './../../public/solar/5.jpeg'
import IgImg6 from './../../public/solar/6.jpeg'
import InstagramImg from './InstagramImg'


function Instagram() {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-4' >
      <p className='text-2xl font-bold'> We take pride in helping out with our honest work</p>
      <p className='pb-4'>@Instagram</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
        <InstagramImg socialImg={IgImg1} />
        <InstagramImg socialImg={IgImg2} />
        <InstagramImg socialImg={IgImg3} />
        <InstagramImg socialImg={IgImg6} /> 
        <InstagramImg socialImg={IgImg5} /> 
        <InstagramImg socialImg={IgImg4} /> 
      </div>
    </div>
  )
}

export default Instagram