import React from 'react'


const About = () => {
  return (
    <div>
               <div className='grid grid-cols-1 sm:md:md:grid-cols-3 group bg-white shadow-lg shadow-neutral-100 border '>
                  


                 <div
                class="p-10 flex flex-col items-center bg-white text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                <span class="p-5 rounded-full bg-red-500 text-white shadow-lg shadow-red-200"><svg
                        xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg></span>
                <p class="text-xl font-medium text-slate-700 mt-3">Most Experienced Team</p>
                <p class="mt-2 text-sm text-slate-500">We have years of insurance experience helping clients prepare for the unknown.</p>
            </div>
            <div class="p-10 flex flex-col items-center text-center bg-white group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                <span class="p-5 rounded-full bg-orange-500 text-white shadow-lg shadow-orange-200"><svg
                        xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1.5">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                    </svg></span>
                <p class="text-xl font-medium text-slate-700 mt-3">Best
                    Test preparation</p>
                <p class="mt-2 text-sm text-slate-500">As we I support those in need with their honest work, building and house repairs after a natural disaster.</p>
            </div>
            
            <div class="p-10 flex flex-col items-center text-center group bg-white md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                <span class="p-5 rounded-full bg-yellow-500 text-white shadow-lg shadow-yellow-200"><svg
                        xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg></span>
                <p class="text-xl font-medium text-slate-700 mt-3">Admission process Guidance</p>
                <p class="mt-2 text-sm text-slate-500">Ask us about home, auto, fire, flood, theft, and many more! we can access any insurance product so you get the right one for you.</p>
            </div>
                </div>
  
    </div>
  )
}

export default About