/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import { FcGoogle} from 'react-icons/fc'
import sideImg from '../Assets/img/side.svg'
import Me from '../Assets/img/team1.jpg'
import Meta from '../Assets/img/meta.svg'
import EmailM from '../Assets/img/emailMarketing.svg'
import Desinger from '../Assets/img/Desinger.svg'
import WebDev from '../Assets/img/WebDev.svg'



import Button from '../Components/Button'
import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs'
import {AiOutlinePlayCircle, } from 'react-icons/ai'


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
const contacts = [
        {
            id: 1,
            name: "Hagiesa, Somaliland",
            icon: <FiMapPin />,
        },
        {
            id: 2,
            name: "saed-xabo@gmail.com",
            icon: <FiMail />,
        },
        {
            id: 3,
            name: "+252 (63) 4026056",
            icon: <FiPhone />,
        },
    ];


const Home = () => {
  
  return (
    <main className='relative'>
    <div className="h-screen min-h-screen bg-cover bg-url('/src/Assets/img/100.png')   dark:bg-primary-dark bg-center bg-no-repeat" >
      <div className='container mx-auto  py-2 mr-2 sm:px-4 sm:justify-center'>
        <div className='flex flex-row items-center sm:flex sm:flex-col space-x-2'>
            <div className='-mb-32 mt-28 w-full px-4 md:w-8/12 lg:mt-36 lg:w-5/12 sm:mt-64 sm:text-center lg:text-left '>
            <h1 className='block antialiased font-sans text-6xl  mb-2 leading-tight sm:mb-2 font-black tracking-normal text-black dark:text-[#FFF2AD]'>
           SMART IDEAS YOU ARE LOOKING FOR HERE
              </h1>
              <p className='block antialiased font-sans text-xl font-semibold mb-6 text-black dark:text-[#FFF2AD] lg:pr-12'>
           Our Customers demand by making them Satisfied with growing their busines 
              </p>
              <div className='flex flex-col sm:items-center gap-2 lg:flex-row '> 
                <a href="/">
                  <button className='middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none 
                  text-xs py-3 px-6 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40
                  active:opacity-[0.85] h-full w-full sm:w-2/2 sm:h-2/2'>
                    Get Started
                  </button>
                  </a>
                  <button className='flex rounded-lg border border-gray-100 bg-white/80 sm:w-2/2 sm:h-2/2 py-2.5 px-5 text-[#1A237E] shadow-2xl shadow-blue-gray-500/20 backdrop-blur-2xl backdrop-saturate-200'>   
                  <AiOutlinePlayCircle className='text-xl font-semibold  ' />   <a href='https://fb.watch/eLFYxoCiFK/' className='font-semibold pl-4 '>
                      Watch Video
                    </a>
                 
                  </button>  
              </div>
            </div>
            <div className='hidden w-full sm:w-12/12 sm:mt-32 sm:mr-6 sm:-mb-6 sm:justify-center mt-56 lg:mt-44 lg:w-[800px] md:w-[800px] sm:rounded-xl'>
           <img src={sideImg} className=' h-full max-w-full ' alt="" />
            </div>
            <div className='hidden w-full sm:w-12/12 sm:mt-32 sm:mr-6 sm:-mb-6 sm:justify-center mt-56 lg:mt-44 lg:w-[800px] md:w-[800px] sm:rounded-xl'>
           <img src={sideImg} className=' h-full max-w-full ' alt="" />
            </div>
       </div>
        </div>
      </div>
      <div className='relative flex flex-col bg-clip-border  rounded-xl text-gray-500 mx-6 bg-transparent dark:bg-gray-600 md:mx-12 md:-mt-8 sm:mt-2'>
        <div className='container z-20 mx-auto px-2 '>
         
          <section className='py-10 lg:py-20 sm:space-y-12 '> 
            {/* Services Sections */}
            <div className='mx-auto mb-4 sm:mb-2 w-full text-center md:w-3/4 lg:w-1/2' >
              <div className='block antialiased font-sans text-4xl leading-[1.3] mb-2 font-bold tracking-normal bg-clip-text text-transparent 
                  bg-gradient-to-tr from-blue-600 to-blue-400'>
                Our Services 
              </div>
            </div>
            <section className='pt-2 pl-4 sm:items-center sm:justify-center sm:px-0 '>
              <div className='flex flex-wrap  items-center px-0 sm:px-2'>
                <div className='w-full   lg:w-5/12 sm:items-center sm:px-2 sm:text-center'>
                  <h1 className='justify-center font-sans font-medium mb-2 text-2xl text-center text-primary-dark md:pr-10 '>   The Meta Apps    
                  </h1>
                  <p className='justify-center font-sans font-medium mb-2 text-lg text-center text-primary-dark md:pr-10'>
                Material Tailwind provides a simple way to customize your button; you can change the colors, fonts, styling, and everything you need.
                  </p>
                 
                  {/* <span className='font-bold text-left text-xl ml-8'>
                    Starting $150
                  </span> */}
                </div>
                <div className='relative mt-6 w-full  md:w-8/12 lg:mt-0 lg:w-6/12'>
                    <img src={Meta}  alt="" />
                </div>
              </div>
            </section>
          </section>
          
          <section className='py-10 lg:py-20'>   
          {/* Portofolio Section */}  
              <div className='mx-auto mb-24 -mt-8 w-full text-center md:w-1/2'> 
              <div className='block antialiased font-sans text-4xl leading-[1.3] mb-2 font-bold tracking-normal text-[#1A237E]'>
                Portofolio
              </div>
              <h1 className='block antialiased font-sans text-4xl leading-[1.3] mb-2 font-semibold tracking-normal text-[#1A237E]'> 
                Trusted Over <br />
                <span className='antialiased font-sans text-4xl leading-[1.3] bg-clip-text text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 inline-block font-black tracking-normal'>
          More 30 Companies and Organizations around Somaliland and Somalia
                </span>
              </h1>
            </div>
            <div class="flex flex-wrap lg:flex-nowrap items-center justify-center space-x-12 md:flex md:flex-wrap sm:flex sm:flex-wrap sm:justify-items-center sm:space-y-2">
   <div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
     <img src={Me}  className='mb-3 w-32 h-32 rounded-full shadow-lg mx-auto' alt="" />
     <h1 class="text-lg text-gray-700"> John Doe </h1>
     <h3 class="text-sm text-gray-400 "> Creative Director </h3>
     <p class="text-xs text-gray-400 mt-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              <div className='mt-8'>
                       <a href="https://www.facebook.com/sxabo">
                              <i className='text-light-blue-400 font-lg text-2xl  align-center mr-2 inline-block items-center justify-center 
                              rounded-full bg-white p-3 text-center shadow-lg outline-none focus:outline-none'>
                                 <BsFacebook />
                              </i>
                      </a>
                       <a href="https://www.facebook.com/sxabo">
                              <i className='text-light-blue-400 font-lg text-2xl  align-center mr-2 inline-block items-center justify-center 
                              rounded-full bg-white p-3 text-center shadow-lg outline-none focus:outline-none'>
                                 <BsInstagram />
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
               <div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
     <img src={Me}  className='mb-3 w-32 h-32 rounded-full shadow-lg mx-auto' alt="" />
     <h1 class="text-lg text-gray-700"> John Doe </h1>
     <h3 class="text-sm text-gray-400 "> Creative Director </h3>
     <p class="text-xs text-gray-400 mt-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      <div className='mt-8'>
                       <a href="https://www.facebook.com/sxabo">
                              <i className='text-light-blue-400 font-lg text-2xl  align-center mr-2 inline-block items-center justify-center 
                              rounded-full bg-white p-3 text-center shadow-lg outline-none focus:outline-none'>
                                 <BsFacebook />
                              </i>
                      </a>
                       <a href="https://www.facebook.com/sxabo">
                              <i className='text-light-blue-400 font-lg text-2xl  align-center mr-2 inline-block items-center justify-center 
                              rounded-full bg-white p-3 text-center shadow-lg outline-none focus:outline-none'>
                                 <BsInstagram />
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
                     <div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
     <img src={Me}  className='mb-3 w-32 h-32 rounded-full shadow-lg mx-auto' alt="" />
     <h1 class="text-lg text-gray-700"> John Doe </h1>
     <h3 class="text-sm text-gray-400 "> Creative Director </h3>
     <p class="text-xs text-gray-400 mt-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              <div className='mt-8'>
                       <a href="https://www.facebook.com/sxabo">
                              <i className='text-light-blue-400 font-lg text-2xl  align-center mr-2 inline-block items-center justify-center 
                              rounded-full bg-white p-3 text-center shadow-lg outline-none focus:outline-none'>
                                 <BsFacebook />
                              </i>
                      </a>
                       <a href="https://www.facebook.com/sxabo">
                              <i className='text-light-blue-400 font-lg text-2xl  align-center mr-2 inline-block items-center justify-center 
                              rounded-full bg-white p-3 text-center shadow-lg outline-none focus:outline-none'>
                                 <BsInstagram />
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
                     <div class="bg-gradient-to-r from-yellow-400 via-red-500 to-orange-600 font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
     <img src={Me}  className='mb-3 w-32 h-32 rounded-full shadow-lg mx-auto' alt="" />
     <h1 class="text-lg text-gray-100"> John Doe </h1>
     <h3 class="text-sm text-gray-200 "> Creative Director </h3>
                <p class="text-xs text-gray-200 mt-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p> 
     <div className='mt-8'>
                       <a href="https://www.facebook.com/sxabo">
                              <i className='text-light-blue-400 font-lg text-2xl  align-center mr-2 inline-block items-center justify-center 
                              rounded-full bg-white p-3 text-center shadow-lg outline-none focus:outline-none'>
                                 <BsFacebook />
                              </i>
                      </a>
                       <a href="https://www.facebook.com/sxabo">
                              <i className='text-light-blue-400 font-lg text-2xl  align-center mr-2 inline-block items-center justify-center 
                              rounded-full bg-white p-3 text-center shadow-lg outline-none focus:outline-none'>
                                 <BsInstagram />
                              </i>
                      </a>
                       <a href="https://www.facebook.com/sxabo">
                              <i className='text-light-blue-400 font-lg text-2xl  align-center mr-2 inline-block items-center justify-center 
                              rounded-full bg-gradient-to-r from-yellow-400 via-red-500 to-orange-600 text-white p-3 text-center shadow-lg outline-none focus:outline-none'>
                                 <BsTwitter />
                              </i>
                          </a>
                    </div>           
   </div>
   
 </div>
          </section>
          <section className='pt-12 pb-64'> 
            {/* Team Section */}
            <div className="container mx-auto px-24 -mb-64 -mt-8 rounded-lg  ">
              <div className='flex flex-wrap justify-center text-center '>
                <div className='w-full lg:w-6/12 px-4'>
                  <h1 className='text-4xl font-semibold mt-12'>
                Our Team 
                  </h1>
                </div>
                <div className='flex flex-wrap mt-24 '>
                  <div className='w-full md:w-6/12 lg:w-3/12 lg:mb-12 -mb-24 px-4 '>
                    <div className='px-12'>
                    <img src={Me} alt="sa" className='shadow-lg rounded-full mx-auto  max-w-120-px'  />
                    </div>
                    <div className='pt-6 text-center'>
                      <h5 className='text-xl font-bold'>
                        Mohamed Dahir 
                      </h5>
                      <p className='mt-1 text-sm text-blueGray-400 uppercase font-semibold'>
                       Markating Manager 
                      </p>
                    </div>
                    <div className='mt-6'>
                       <a href="https://www.facebook.com/sxabo">
                              <i className='text-light-blue-400 font-lg text-2xl  align-center mr-2 inline-block items-center justify-center 
                              rounded-full bg-white p-3 text-center shadow-lg outline-none focus:outline-none'>
                                 <BsFacebook />
                              </i>
                      </a>
                       <a href="https://www.facebook.com/sxabo">
                              <i className='text-light-blue-400 font-lg text-2xl  align-center mr-2 inline-block items-center justify-center 
                              rounded-full bg-white p-3 text-center shadow-lg outline-none focus:outline-none'>
                                 <BsInstagram />
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
                  <div className='w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4'>
                    <div className='px-12'>
                    <img src={Me} alt="sa" className='shadow-lg rounded-full mx-auto  max-w-120-px'  />
                    </div>
                    <div className='pt-6 text-center'>
                      <h5 className='text-xl font-bold'>
                        Mohamed Dahir 
                      </h5>
                      <p className='mt-1 text-sm text-blueGray-400 uppercase font-semibold'>
                       Markating Manager 
                      </p>
                    </div>
                    <div className='mt-6'>
                       <a href="https://www.facebook.com/sxabo">
                              <i className='text-light-blue-400 font-lg text-2xl  align-center mr-2 inline-block items-center justify-center 
                              rounded-full bg-white p-3 text-center shadow-lg outline-none focus:outline-none'>
                                 <BsFacebook />
                              </i>
                      </a>
                       <a href="https://www.facebook.com/sxabo">
                              <i className='text-light-blue-400 font-lg text-2xl  align-center mr-2 inline-block items-center justify-center 
                              rounded-full bg-white p-3 text-center shadow-lg outline-none focus:outline-none'>
                                 <BsInstagram />
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
                  <div className='w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4'>
                    <div className='px-12'>
                    <img src={Me} alt="sa" className='shadow-lg rounded-full mx-auto  max-w-120-px'  />
                    </div>
                    <div className='pt-6 text-center'>
                      <h5 className='text-xl font-bold'>
                        Mohamed Dahir 
                      </h5>
                      <p className='mt-1 text-sm text-blueGray-400 uppercase font-semibold'>
                       Markating Manager 
                      </p>
                    </div>
                    <div className='mt-6'>
                       <a href="https://www.facebook.com/sxabo">
                              <i className='text-light-blue-400 font-lg text-2xl  align-center mr-2 inline-block items-center justify-center 
                              rounded-full bg-white p-3 text-center shadow-lg outline-none focus:outline-none'>
                                 <BsFacebook />
                              </i>
                      </a>
                       <a href="https://www.facebook.com/sxabo">
                              <i className='text-light-blue-400 font-lg text-2xl  align-center mr-2 inline-block items-center justify-center 
                              rounded-full bg-white p-3 text-center shadow-lg outline-none focus:outline-none'>
                                 <BsInstagram />
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
                  <div className='w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4'>
                    <div className='px-12'>
                    <img src={Me} alt="sa" className='shadow-lg rounded-full mx-auto  max-w-120-px'  />
                    </div>
                    <div className='pt-6 text-center'>
                      <h5 className='text-xl font-bold'>
                        Mohamed Dahir 
                      </h5>
                      <p className='mt-1 text-sm text-blueGray-400 uppercase font-semibold'>
                       Markating Manager 
                      </p>
                    </div>
                    <div className='mt-6'>
                       <a href="https://www.facebook.com/sxabo">
                              <i className='text-light-blue-400 font-lg text-2xl  align-center mr-2 inline-block items-center justify-center 
                              rounded-full bg-white p-3 text-center shadow-lg outline-none focus:outline-none'>
                                 <BsFacebook />
                              </i>
                      </a>
                       <a href="https://www.facebook.com/sxabo">
                              <i className='text-light-blue-400 font-lg text-2xl  align-center mr-2 inline-block items-center justify-center 
                              rounded-full bg-white p-3 text-center shadow-lg outline-none focus:outline-none'>
                                 <BsInstagram />
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
                </div>
              </div>
           </div>    
          </section>
          <section className='py-10 md:py-24'>
            {/* Contact Us */}
           <div className='mx-auto mb-2 w-full text-center md:w-3/4 lg:w-1/2' >
              <div className='block antialiased font-sans text-4xl leading-[1.3] mb-2 font-bold tracking-normal text-[#1A237E]'>
               Contact Us 
              </div> 
            </div>
            <div className="flex flex-col mt-6 gap-1">
              <div className='row-span-2 col-span-2 '>
            <div className="w-full lg:w-2/3">
      <div className="text-center max-w-xl px-6 mx-4 ">
        <h2 className="font-general-medium text-2xl  text-black dark:text-primary-light mt-12 pb-2 mb-2">
          Contact details
        </h2>
        <ul className="font-general-regular">
          {contacts.map((contact) => (
            <li className="flex " key={contact.id}>
              <i className="text-2xl text-black dark:text-primary-light mr-4">
                {contact.icon}
              </i>
              <span className="text-lg mb-4 ttext-black dark:text-primary-light">
                {contact.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
              </div>
              <div className='row-span-2'>
                <div className="w-full lg:w-84">
      <div className="leading-loose">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="max-w-xl m-4 p-6 sm:p-10 bg-yellow-300 rounded-xl shadow-xl text-left"
        >
          <p className="font-general-medium text-primary-light dark:text-primary-light text-2xl mb-8">
            Contact Form
          </p>
          <div className="font-general-regular">
            <label
              className="block text-lg text-primary-light dark:text-primary-light mb-2"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              className="w-full px-5 py-2 border border-black dark:border-primary-dark border-opacity-50 text-primary-dark	dark:text-primary-dark bg-gray-100 dark:bg-gray-4	00 rounded-md shadow-sm text-md"
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your Name"
              aria-label="Name"
            />
          </div>
          <div className="mt-6">
            <label
              className="block text-lg text-primary-light dark:text-primary-light mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-5 py-2 border border-black dark:border-primary-dark border-opacity-50 text-primary-dark	dark:text-primary-dark bg-gray-100 dark:bg-white rounded-md shadow-sm text-md"
              id="email"
              name="email"
              type="text"
              required
              placeholder="Your Email"
              aria-label="Email"
            />
          </div>
          <div className="mt-6">
            <label
              className="block text-lg text-primary-light dark:text-primary-light mb-2"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              className="w-full px-5 py-2 border border-black dark:border-primary-dark border-opacity-50 text-primary-dark	dark:text-primary-dark bg-gray-100 dark:bg-white  rounded-md shadow-sm text-md"
              id="subject"
              name="subject"
              type="text"
              required
              placeholder="Subject"
              aria-label="Subject"
            />
          </div>

          <div className="mt-6">
            <label
              className="block text-lg text-primary-light dark:text-primary-light mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full px-5 py-2 border border-black dark:border-primary-dark border-opacity-50 text-primary-dark	dark:text-primary-dark bg-gray-100 dark:bg-white  rounded-md shadow-sm text-md"
              id="message"
              name="message"
              cols="14"
              rows="6"
              aria-label="Message"
            ></textarea>
          </div>

          <div className="font-general-medium w-40 px-4 py-2.5 text-white dark:text-black hover:text-white dark: text-center font-medium tracking-wider bg-gradient-to-r from-sky-500 to-indigo-500 hover:bg-primary-dark focus:ring-1 focus:ring-primary-light rounded-lg mt-6 duration-500">
            <Button
              title="Send Message"
              type="submit"
              aria-label="Send Message"
            />
          </div>
        </form>
      </div>
    </div>
              </div>
              
            </div>
          </section>
   </div>
      </div>
    </main>
    

  )
}

export default Home