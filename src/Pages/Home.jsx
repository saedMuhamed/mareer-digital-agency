/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import { FcGoogle} from 'react-icons/fc'
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
    <div className="h-screen min-h-screen bg-cover bg-[#FFEA7D] dark:bg-primary-dark bg-center bg-no-repeat" >
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
      <div className='relative flex flex-col bg-clip-border rounded-xl text-gray-700 mx-6 -mt-64 bg-white dark:bg-gray-600 md:mx-12 md:-mt-48'>
        <div className='container z-20 mx-auto px-4'>
          <section className='py-10 lg:py-20'> 
            <div className='mx-auto mb-24 w-full text-center md:w-3/4 lg:w-1/2' >
              <div className='block antialiased font-sans text-4xl leading-[1.3] mb-2 font-semibold tracking-normal text-[#1A237E]'>
                We Make Things Look Good  
              </div>
              <p className='block antialiased font-sans mb-2 text-lg font-light text-[#1A237E]/60'>
           We Can Make your Busines More Profitable And More Customers 
              </p>
            </div>
            <div className='flex flex-row flex-wrap content-center'>
              <div className='mb-12 w-full max-w-full px-3 sm:w-1/2 sm:flex-none lg:mb-0 xl:mb-0 xl:w-1/4'>
                <div className='relative flex flex-col bg-clip-border 
                rounded-xl text-gray-700 border border-white/80 bg-white/80 shadow-lg backdrop-blur-2xl backdrop-saturate-200 undefined'>
                  <div className='relative bg-clip-border overflow-hidden text-gray-700 -mt-6 mx-6 -mb-3 grid h-12 w-12 place-items-center rounded-lg bg-[#1A237E]'>
                    <i className='relative text-xl text-white'>
                      <FcGoogle />
                     </i>
                  </div>
                  <div className='p-6 mt-1'>
                    <h1 className='block antialiased tracking-normal font-sans text-xl font-semibold leading-snug mb-2 text-[#1A237E]'>
                      Google Services 
                    </h1>
                    <p className='block antialiased font-sans text-base leading-relaxed font-light text-[#1A237E]/60'>
                    The most Importnat Thing Of your busines Is google, Where Every One Can search You
                    </p>
                  </div>
                </div>
              </div>
              <div className='mb-12 w-full max-w-full px-3 sm:w-1/2 sm:flex-none lg:mb-0 xl:mb-0 xl:w-1/4'>
                <div className='relative flex flex-col bg-clip-border 
                rounded-xl text-gray-700 border border-white/80 bg-white/80 shadow-lg backdrop-blur-2xl backdrop-saturate-200 undefined'>
                  <div className='relative bg-clip-border overflow-hidden text-gray-700 -mt-6 mx-6 -mb-3 grid h-12 w-12 place-items-center rounded-lg bg-[#1A237E]'>
                    <i className='relative text-xl text-white'>
                      <FcGoogle />
                     </i>
                  </div>
                  <div className='p-6 mt-1'>
                    <h1 className='block antialiased tracking-normal font-sans text-xl font-semibold leading-snug mb-2 text-[#1A237E]'>
                      Google Services 
                    </h1>
                    <p className='block antialiased font-sans text-base leading-relaxed font-light text-[#1A237E]/60'>
                    The most Importnat Thing Of your busines Is google, Where Every One Can search You
                    </p>
                  </div>
                </div>
              </div>
              <div className='mb-12 w-full max-w-full px-3 sm:w-1/2 sm:flex-none lg:mb-0 xl:mb-0 xl:w-1/4'>
                <div className='relative flex flex-col bg-clip-border 
                rounded-xl text-gray-700 border border-white/80 bg-white/80 shadow-lg backdrop-blur-2xl backdrop-saturate-200 undefined'>
                  <div className='relative bg-clip-border overflow-hidden text-gray-700 -mt-6 mx-6 -mb-3 grid h-12 w-12 place-items-center rounded-lg bg-[#1A237E]'>
                    <i className='relative text-xl text-white'>
                      <FcGoogle />
                     </i>
                  </div>
                  <div className='p-6 mt-1'>
                    <h1 className='block antialiased tracking-normal font-sans text-xl font-semibold leading-snug mb-2 text-[#1A237E]'>
                      Google Services 
                    </h1>
                    <p className='block antialiased font-sans text-base leading-relaxed font-light text-[#1A237E]/60'>
                    The most Importnat Thing Of your busines Is google, Where Every One Can search You
                    </p>
                  </div>
                </div>
              </div>
              <div className='mb-12 w-full max-w-full px-3 sm:w-1/2 sm:flex-none lg:mb-0 xl:mb-0 xl:w-1/4'>
                <div className='relative flex flex-col bg-clip-border 
                rounded-xl text-gray-700 border border-white/80 bg-white/80 shadow-lg backdrop-blur-2xl backdrop-saturate-200 undefined'>
                  <div className='relative bg-clip-border overflow-hidden text-gray-700 -mt-6 mx-6 -mb-3 grid h-12 w-12 place-items-center rounded-lg bg-[#1A237E]'>
                    <i className='relative text-xl text-white'>
                      <FcGoogle />
                     </i>
                  </div>
                  <div className='p-6 mt-1'>
                    <h1 className='block antialiased tracking-normal font-sans text-xl font-semibold leading-snug mb-2 text-[#1A237E]'>
                      Google Services 
                    </h1>
                    <p className='block antialiased font-sans text-base leading-relaxed font-light text-[#1A237E]/60'>
                    The most Importnat Thing Of your busines Is google, Where Every One Can search You
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
                <section className='py-10 lg:py-20'> 
            <div className='mx-auto mb-24 w-full text-center md:w-3/4 lg:w-1/2' >
              <div className='block antialiased font-sans text-4xl leading-[1.3] mb-2 font-semibold tracking-normal text-[#1A237E]'>
                We Make Things Look Good  
              </div>
              <p className='block antialiased font-sans mb-2 text-lg font-light text-[#1A237E]/60'>
           We Can Make your Busines More Profitable And More Customers 
              </p>
            </div>
            <div className='flex flex-row flex-wrap content-center'>
              <div className='mb-12 w-full max-w-full px-3 sm:w-1/2 sm:flex-none lg:mb-0 xl:mb-0 xl:w-1/4'>
                <div className='relative flex flex-col bg-clip-border 
                rounded-xl text-gray-700 border border-white/80 bg-white/80 shadow-lg backdrop-blur-2xl backdrop-saturate-200 undefined'>
                  <div className='relative bg-clip-border overflow-hidden text-gray-700 -mt-6 mx-6 -mb-3 grid h-12 w-12 place-items-center rounded-lg bg-[#1A237E]'>
                    <i className='relative text-xl text-white'>
                      <FcGoogle />
                     </i>
                  </div>
                  <div className='p-6 mt-1'>
                    <h1 className='block antialiased tracking-normal font-sans text-xl font-semibold leading-snug mb-2 text-[#1A237E]'>
                      Google Services 
                    </h1>
                    <p className='block antialiased font-sans text-base leading-relaxed font-light text-[#1A237E]/60'>
                    The most Importnat Thing Of your busines Is google, Where Every One Can search You
                    </p>
                  </div>
                </div>
              </div>
              <div className='mb-12 w-full max-w-full px-3 sm:w-1/2 sm:flex-none lg:mb-0 xl:mb-0 xl:w-1/4'>
                <div className='relative flex flex-col bg-clip-border 
                rounded-xl text-gray-700 border border-white/80 bg-white/80 shadow-lg backdrop-blur-2xl backdrop-saturate-200 undefined'>
                  <div className='relative bg-clip-border overflow-hidden text-gray-700 -mt-6 mx-6 -mb-3 grid h-12 w-12 place-items-center rounded-lg bg-[#1A237E]'>
                    <i className='relative text-xl text-white'>
                      <FcGoogle />
                     </i>
                  </div>
                  <div className='p-6 mt-1'>
                    <h1 className='block antialiased tracking-normal font-sans text-xl font-semibold leading-snug mb-2 text-[#1A237E]'>
                      Google Services 
                    </h1>
                    <p className='block antialiased font-sans text-base leading-relaxed font-light text-[#1A237E]/60'>
                    The most Importnat Thing Of your busines Is google, Where Every One Can search You
                    </p>
                  </div>
                </div>
              </div>
              <div className='mb-12 w-full max-w-full px-3 sm:w-1/2 sm:flex-none lg:mb-0 xl:mb-0 xl:w-1/4'>
                <div className='relative flex flex-col bg-clip-border 
                rounded-xl text-gray-700 border border-white/80 bg-white/80 shadow-lg backdrop-blur-2xl backdrop-saturate-200 undefined'>
                  <div className='relative bg-clip-border overflow-hidden text-gray-700 -mt-6 mx-6 -mb-3 grid h-12 w-12 place-items-center rounded-lg bg-[#1A237E]'>
                    <i className='relative text-xl text-white'>
                      <FcGoogle />
                     </i>
                  </div>
                  <div className='p-6 mt-1'>
                    <h1 className='block antialiased tracking-normal font-sans text-xl font-semibold leading-snug mb-2 text-[#1A237E]'>
                      Google Services 
                    </h1>
                    <p className='block antialiased font-sans text-base leading-relaxed font-light text-[#1A237E]/60'>
                    The most Importnat Thing Of your busines Is google, Where Every One Can search You
                    </p>
                  </div>
                </div>
              </div>
              <div className='mb-12 w-full max-w-full px-3 sm:w-1/2 sm:flex-none lg:mb-0 xl:mb-0 xl:w-1/4'>
                <div className='relative flex flex-col bg-clip-border 
                rounded-xl text-gray-700 border border-white/80 bg-white/80 shadow-lg backdrop-blur-2xl backdrop-saturate-200 undefined'>
                  <div className='relative bg-clip-border overflow-hidden text-gray-700 -mt-6 mx-6 -mb-3 grid h-12 w-12 place-items-center rounded-lg bg-[#1A237E]'>
                    <i className='relative text-xl text-white'>
                      <FcGoogle />
                     </i>
                  </div>
                  <div className='p-6 mt-1'>
                    <h1 className='block antialiased tracking-normal font-sans text-xl font-semibold leading-snug mb-2 text-[#1A237E]'>
                      Google Services 
                    </h1>
                    <p className='block antialiased font-sans text-base leading-relaxed font-light text-[#1A237E]/60'>
                    The most Importnat Thing Of your busines Is google, Where Every One Can search You
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='py-10 md:py-24'>
            <div className='mx-auto w-full text-center md:w-1/2'> 
              <h1 className='block antialiased font-sans text-4xl leading-[1.3] mb-2 font-black tracking-normal text-[#1A237E]'> 
                Trusted Over <br />
                <span className='antialiased font-sans text-4xl leading-[1.3] bg-clip-text text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 inline-block font-black tracking-normal'>
          1K Companies and Organizations
                </span>
              </h1>
              <p className='block antialiased font-sans font-light text-lg text-[#1A237E]/60'>
             Many Fortune 500 companies, startups, universities and governmental institutions love Our Service.
              </p>
            </div>
            <div className='mb-84'>

            </div>
          </section>
   </div>
      </div>
    </main>
    

  )
}

export default Home