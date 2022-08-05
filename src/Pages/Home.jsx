/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import sideImg from '../Assets/img/bg.png'

// const image = {
//    position:"absolute",
//     top:"0",
//     left:"0",
//     bottom:"0",
//     right:"0",
//     box-sizing:"border-box",
//     padding:"0",
//     border:"none",
//     margin:"auto",
//     display:"block",
//     width:"0",
//     height:"0",
//     min-width:"100%",
//     max-width:"100%",
//     min-height:"100%",
//     max-height:"100%"
// }

const Home = () => {
  
  return (
    <main className='relative'>
    <div className="h-screen min-h-screen bg-cover bg-[#FFF2AD] dark:bg-primary-dark bg-center bg-no-repeat" >
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap items-center justify-between'>
          <div className='mt-48 w-full px-4 md:w-8/12 lg:mt-36 lg:w-5/12'>
            <h1 className='block antialiased font-sans text-5xl leading-tight mb-2 font-black tracking-normal text-black dark:text-[#FFF2AD]'>
           Smart Ideas You Are Looking For Here 
              </h1>
              <p className='block antialiased font-sans mb-6 text-lg font-light text-black dark:text-[#FFF2AD] lg:pr-12'>
           Our Customers demand by making them Satisfied wuth growing their busines 
              </p>
              <div className='flex flex-col-reverse gap-2 lg:flex-row'>
                <a href="contactus">
                  <button className='middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none
                  disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400
                   text-white shadow-md shadow-blue-500/20 hover:shadow-lg
                    hover:shadow-blue-500/40 active:opacity-[0.85] h-full w-full'>
                    Get Started
                  </button>
                  </a>
                  <div className='flex rounded-lg border border-white/80 bg-white/80 py-2.5 px-5
                   text-[#1A237E] shadow-2xl shadow-blue-gray-500/20 backdrop-blur-2xl backdrop-saturate-200'>
                    <p className='mb-0 flex w-full items-center justify-between font-normal'>
                      npm i @material-tailwind/react
                   </p>
                  </div>  
              </div>
            </div>
            <div className='mt-48 w-full px-4 md:w-8/12 lg:mt-36 lg:w-5/12'>
           <img src={sideImg} className='w-full h-full' alt="" />
         </div>
       </div>
        </div>
      </div>
      <div className='relative flex flex-col bg-clip-border rounded-xl text-gray-700 mx-6 -mt-20 bg-white md:mx-12 md:-mt-48'>
        
    </div>
    </main>
    

  )
}

export default Home