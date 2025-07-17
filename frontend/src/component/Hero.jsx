import React from 'react'

function Hero() {
  return (
    <div className='bg-black text-white m-auto pt-10'>
        <div className='text-center'>
          <h1 className='text-[#FFFFFF] text-5xl'>Saas Delivery <br/> Management Software</h1>
        <div>
        <p className='mt-8 text-sm '>It’s time to start your kids learning with fun. Share your gratitude and <br /> experience by sending</p>
        </div>
         <div className='pt-8'>
         <button className='bg-[#FF9C1F] hover:bg-[#d97916] px-4 py-1 rounded text-white'>Get Started</button>
         </div>
        </div>
        <div className='w-full pt-10 flex justify-center items-center text-center'>
            <img src="https://png.pngtree.com/png-vector/20220809/ourmid/pngtree-business-infographic-dashboard-admin-interface-png-image_5714957.png" alt="Hero "
            className='h-80px ' />
        </div>
    </div>
  )
}

export default Hero
