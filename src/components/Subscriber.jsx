import React from 'react'

function Subscriber() {
  return (
    <div className='w-full bg-[#2699fb] '>
        <div className='max-w-[1240px] mx-auto p-3  py-[50px] md:flex justify-between'>
            <div className='text-white'>
                <h1 className='text-[25px] md:text-[40px] font-sans font-semibold'>Want to learn IT skills?</h1>
                <span className='font-sans font-light'>Signup to our newsletter and stay update</span>
            </div>
            <div className='m-2'>
                <input type="text"placeholder="EMAIL" className=' rounded-sm p-2 mr-2 text-slate-600'/>
                <button className="bg-black p-2 text-white mt-2  rounded-md">Get Started</button>
                <br />
                <p className='mt-2'>We care about the protection of your data. Read our <br /> <span className='text-blue-900'>Privacy Ploicy</span></p>
            </div>
        </div>
    </div>
  )
}

export default Subscriber