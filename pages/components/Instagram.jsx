import React from 'react'
import IgImg1 from '/Users/santiagoramirez/nextjs_landing_page_excel/public/img7.webp'
import IgImg2 from '/Users/santiagoramirez/nextjs_landing_page_excel/public/img8.jpg'
import IgImg3 from '/Users/santiagoramirez/nextjs_landing_page_excel/public/img9.jpg'
import IgImg4 from '/Users/santiagoramirez/nextjs_landing_page_excel/public/img10.jpg'
import IgImg5 from '/Users/santiagoramirez/nextjs_landing_page_excel/public/img11.jpg'
import IgImg6 from '/Users/santiagoramirez/nextjs_landing_page_excel/public/img12.webp'
import InstagramImg from './InstagramImg'

function Instagram() {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24' >
      <p className='text-2xl font-bold'> We take pride in helping out with our honest work</p>
      <p className='pb-4'>@Instagram</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 p-4'>
        <InstagramImg socialImg={IgImg4} />
        <InstagramImg socialImg={IgImg6} />
        <InstagramImg socialImg={IgImg3} />
        
        <InstagramImg socialImg={IgImg1} />
        <InstagramImg socialImg={IgImg5} />
        <InstagramImg socialImg={IgImg2} />
        
      </div>
    </div>
  )
}

export default Instagram