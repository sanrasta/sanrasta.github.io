import React from 'react'

const Timeline = ({}) => {
    return(
        <div className='max-w-[1240px] mx-auto text-center py-24' >
      <p className='text-2xl font-bold p-8 gap-8'> It's a simple process that only requires your utility bill to get started.
    </p>
<div className="container bg-gray-200 mx-auto w-full h-full p-4 gap-2">
  <div className="relative wrap overflow-hidden p-10 h-full">
    <div className="border-2-2 absolute border-opacity-20 border-gray-400 h-full border" style={{left: "50%"}}></div>
    {/*  right timeline*/}
    <div className="mb-8 flex justify-between items-center w-full right-timeline">
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-20 h-20 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white">Step 1</h1>
      </div>
      <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
        <h3 className="mb-3 font-bold text-gray-800 text-xl">Collect Your Energy Bill</h3>
        
      </div>
    </div>

    {/*  left timeline*/}
    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-20 h-20 rounded-full">
        <h1 className="mx-auto text-white font-semibold text-lg">Step 2</h1>
      </div>
      <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
        <h3 className="mb-3 font-bold text-white text-xl">Review a Custom Proposal</h3>
      </div>
    </div>
    
    
   {/*  right timeline*/} 
    <div className="mb-8 flex justify-between items-center w-full right-timeline">
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-20 h-20 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white">Step 3</h1>
      </div>
      <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
        <h3 className="mb-3 font-bold text-gray-800 text-xl">Select the Best Plan</h3>
      </div>
    </div>

     {/*  right timeline*/} 
    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-20 h-20 rounded-full">
        <h1 className="mx-auto text-white font-semibold text-lg">Step 4</h1>
      </div>
      <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
        <h3 className="mb-3 font-bold text-white text-xl">Sign contract</h3>
      </div>
    </div>
  </div>
      {/*  right timeline*/}
      <div className="mb-8 flex justify-between items-center w-full right-timeline">
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-20 h-20 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white">Step 5</h1>
      </div>
      <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
        <h3 className="mb-3 font-bold text-gray-800 text-xl">Get started</h3>
        
      </div>
    </div>
</div>
</div>
    );
};

export default Timeline