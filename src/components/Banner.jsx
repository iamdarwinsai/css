import Typed from 'react-typed';
function Banner() {
  return (
    
    <div className="bg-[#2699fb] w-full py-[50px]">
      <div className="max-w-[1240px] my-[100px] mx-auto font-bold text-white text-center">
        <div className="text-[25px] text-black md:text-[30px] p-[5px] md:p-[24px]">
          Learn with us
        </div>
        <div className="text-[45px]  md:text-[60px] p-[5px] md:p-[24px]">
          Grow with us
        </div>
        <div className="text-[25px] md:text-4xl p-[5px] md:p-[24px] font-serif">
          Learn <Typed className='text-black font-serif font-bold'
                    strings={['Web Development','Android Dev','Machine Learning']}
                    typeSpeed={100}
                    backSpeed={50}
                    loop={true}
                />
        </div>
        <button className="bg-black p-2 text-white mt-2  rounded-md">Get Started</button>
      </div>

    </div>
  )
}

export default Banner