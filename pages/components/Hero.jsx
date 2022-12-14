import React from 'react'

const Hero = ({heading, message1, message2}) => {

  return (
    
    <div 
      className='grid-cols-1 sm:md:md:grid-cols-3 flex bg-white text-center items-center justify-center h-screen bg-fixed  custom-img'>
        {/*Overlay*/}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/20 z-[2] groupr'/>
            <div className='text-white z-[2] p-5'>
                <h2 className='text-5xl text-center font-bold'>{heading}</h2>
                <p className='py-5 text-center text-xl'>{message1}</p>
                <p className='py-5 text-center text-xl'>{message2}</p>
           </div>
    </div>
  );
};

export default Hero