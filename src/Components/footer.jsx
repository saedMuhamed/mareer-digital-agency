import React from 'react'
import { BsFacebook, BsTwitter } from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'

function footer() {
  return (
      <footer className='bg-gray-100 relative z-50 pt-16 pb-6 text-[#1A237E]'>
          <div className='z-90 relative mx-auto -mt-40 mb-20 w-4/5 rounded-xl md:w-3/5 bg-slate-400'>
              <div className='flex flex-wrap items-center p-5 md:p-10'>
                  <div className='w-full px-4 lg:w-6/12'>
                      <h1 className='block antialiased font-sans text-4xl leading-[1.3] text-white mb-2 font-black tracking-normal'>
                          Sign up for our newsletter
                      </h1>
                      <p className='block antialiased font-sans text-base font-light leading-relaxed text-white opacity-80'>
                           Join our newsletter and get news in your inbox every week! We hate spam too, so no worries about this.
                      </p>
                  </div>
                  <div className='w-full px-4 lg:w-6/12'>
                      <form action="" className='mt-4 block md:flex lg:mt-0'>
                          <div className='w-full md:w-8/12'>
                              <div className='relative w-full min-w-[200px] h-11'>
                              <input type="email" name='Email' className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans
                               font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 
                               transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 
                               placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent 
                              text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-blue-500 text-white/80" />
                              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal 
                              peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight 
                              peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 
                              transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] 
                              before:content[''] before:block before:box-border before:w-2.5 before:h-1.5 
                              before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent
                              before:rounded-tl-md before:border-t peer-focus:before:border-t-2 
                              before:border-l peer-focus:before:border-l-2 before:pointer-events-none 
                              before:transition-all peer-disabled:before:border-transparent after:content[' '] 
                              after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] 
                               after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-blue-gray-400
                                peer-focus:text-blue-500 before:border-blue-gray-200
                                 peer-focus:before:border-blue-500 after:border-blue-gray-200 
                                 peer-focus:after:border-blue-500 peer-placeholder-shown:text-white/80 text-white/80"> Enter your email 
                                 </label>
                              </div>
                              </div>
                          <button className='middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none 
                          disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md
                           shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] mt-3 w-full md:mt-0 md:ml-3 md:w-auto'> 
                           Subscribe   
                          </button>
                      </form>
                  </div>
              </div>   
          </div>
          <div className='container mx-auto'>
              <div className='flex flex-wrap'>
                  <div className='w-full px-4 md:w-6/12'>
                      <h2 className='block antialiased tracking-normal font-sans text-3xl font-semibold leading-snug text-inherit mb-2'>
                          Mareer Digital Agency 
                      </h2>
                      <h5 className='block antialiased tracking-normal font-sans text-inherit mt-0 mb-2 text-lg font-normal opacity-60'>
                          Easy to use React components for Tailwind CSS and Material Design.
                      </h5>
                      <div className='mt-6'>
                          <a href="https://www.facebook.com/sxabo">
                              <i className='text-light-blue-400 font-lg text-2xl align-center mr-2 inline-block items-center justify-center 
                              rounded-full bg-white p-3 text-center shadow-lg outline-none focus:outline-none'>
                                 <BsFacebook />
                              </i>
                          </a>
                           <a href="https://www.facebook.com/sxabo">
                              <i className='text-light-blue-400 font-lg text-2xl  align-center mr-2 inline-block items-center justify-center 
                              rounded-full bg-white p-3 text-center shadow-lg outline-none focus:outline-none'>
                                 <AiFillInstagram />
                              </i>
                          </a>
                           <a href="https://www.facebook.com/sxabo">
                              <i className='text-light-blue-400 font-lg text-2xl  align-center mr-2 inline-block items-center justify-center 
                              rounded-full bg-white p-3 text-center shadow-lg outline-none focus:outline-none'>
                                 <BsTwitter />
                              </i>
                          </a>
                      </div>
                  </div>
                  <div className='w-full px-4 md:w-6/12'>
                      <div className='items-top mb-6 flex flex-wrap'>
                          <div className='w-6/12 pt-6 md:ml-auto md:px-4 md:pt-0 xl:w-4/12'>
                              <span className='mb-2 block text-lg font-semibold text-[#1A237E]'>
                                  Usefull links
                              </span>
                              <ul className='list-unstyled'>
                                  <li>
                                      <a href="/" target="_blank" className='block pb-2 text-sm font-normal text-[#1A237E]/60'>Home</a>
                                  </li>
                                  <li>
                                      <a href="/" target="_blank" className='block pb-2 text-sm font-normal text-[#1A237E]/60'>About</a>
                                  </li>
                                  <li>
                                      <a href="/" target="_blank" className='block pb-2 text-sm font-normal text-[#1A237E]/60'>Blog</a>
                                  </li> 
                                  <li>
                                      <a href="/" target="_blank" className='block pb-2 text-sm font-normal text-[#1A237E]/60'>Contact Us</a>
                                  </li>
                              </ul>    
                          </div>
                          <div className='ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-4/12'>
                              <span className='mb-2 block text-lg font-semibold text-[#1A237E]'>
                                  Other Resources
                              </span>
                               <ul className='list-unstyled'>
                                  <li>
                                      <a href="/" target="_blank" className='block pb-2 text-sm font-normal text-[#1A237E]/60'>Home</a>
                                  </li>
                                  <li>
                                      <a href="/" target="_blank" className='block pb-2 text-sm font-normal text-[#1A237E]/60'>About</a>
                                  </li>
                                  <li>
                                      <a href="/" target="_blank" className='block pb-2 text-sm font-normal text-[#1A237E]/60'>Blog</a>
                                  </li> 
                                  <li>
                                      <a href="/" target="_blank" className='block pb-2 text-sm font-normal text-[#1A237E]/60'>Contact Us</a>
                                  </li>
                              </ul>    
                          </div>
                      </div>
                  </div>
              </div>       
          </div>
    </footer>
  )
}

export default footer