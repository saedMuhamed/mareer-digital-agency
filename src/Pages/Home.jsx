import React from 'react'
import Image from '../Assets/img/mareer.jpg'

function Home() {
  return (
    <div className='w-full md:w-4/12 px-4 mr-auto ml-auto'>
    <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg '>
      <img src={Image} width="200px" height="200px" alt="simage" className='w-full align-middle rounded-t-lg' />
      <p className='relative p-8 mb-4'>
       <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" class="absolute left-0 w-full block h-95-px -top-94-px">
        <polygon points="-30,95 583,95 583,65" className='text-lightBlue-500 fill-current'></polygon>
        </svg> 
        <h1 className="text-xl font-bold text-black">Top Notch Services</h1>
        <p className='text-md font-light mt-2 text-black'> The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens.</p>
      </p>
      </div>
      </div>
  )
}

export default Home