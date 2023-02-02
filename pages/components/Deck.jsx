import Image from 'next/image'
import React from "react"
function Deck(){
  return (
<div id="gallery" className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">To each their own!</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">There are plenty of reasons why thousands of homeowners have switched to solar.</p>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Hear their stories! </p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image 
          alt="gallery" 
          className="absolute inset-0 w-full h-full object-cover object-center" 
          layout='fill'
          src={'https://images.unsplash.com/photo-1623701675981-1b64ba3ecca2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-90">
           {/* <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            */}<h1 className="title-font text-lg font-medium text-gray-900 mb-3">Count on Solar</h1>
            <p className="leading-relaxed">It is clear by now, according to statistics, grid-powered electric services will become more expensive and unreliable in the upcoming years.
</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image 
          alt="gallery" 
          layout='fill'
          className="absolute inset-0 w-full h-full object-cover object-center" 
          src='https://images.unsplash.com/photo-1641349630154-1c1024379a88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1413&q=80' />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-90">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Sign Up!</h1>
            <p className="leading-relaxed">It is a very simple and brief process.<br></br> We collect your utility bill in order to design a custom savings proposal for your home specific needs.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image 
          alt="gallery" 
          layout='fill'
          className="absolute inset-0 w-full h-full object-cover object-center" 
          src="https://images.unsplash.com/photo-1578439297699-eb414262c2de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2020&q=80" />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Clean Energy</h1>
            <p className="leading-relaxed">Solar, such an amazing energy.<br></br> Each installation produces clean energy for 30-40 years, decreasing your home&apos;s carbon footprint.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image 
            alt="gallery"
            layout='fill'
            className="absolute inset-0 w-full h-full object-cover object-center" 
            src="https://images.unsplash.com/photo-1624397640148-949b1732bb0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-90">{/*
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>*/}
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Increased Home Value</h1>
            <p className="leading-relaxed">It is well-documented that solar adds value to the property.<br></br> It is a home investment that actually produces income.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image 
            alt="gallery" 
            layout='fill'
            className="absolute inset-0 w-full h-full object-cover object-center" 
            src="https://images.unsplash.com/photo-1637100533381-d7e827eafd3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-90">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
            <p className="leading-relaxed">Each KW you produce is a KW that you do not have to purchase from your electric company. </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image 
            alt="gallery" 
            layout='fill'
            className="absolute inset-0 w-full h-full object-cover object-center" 
            src="https://images.unsplash.com/photo-1463173904305-ba479d2123b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2158&q=80" />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-90">
           {/* <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>*/}
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
            <p className="leading-relaxed">Another amazing reason to go solar in your home today is so that you can get the economic benefits NOW, and get more for the sale of your home TOMORROW.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Deck