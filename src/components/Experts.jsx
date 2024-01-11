import laptop from "../assests/images/laptop.jpg"

function Experts() {
  return (
    <div className="max-w-[1240px] mx-auto  mt-3 mb-3 p-2  md:grid grid-cols-2">
        <div className="col-span-1 md:w-[80%] text-center">
            <img src={laptop} alt="" className="inline"/>
        </div>  
        <div className="col-span-1 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-green-500 text-justify">Learn from Experts</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolore cumque, error, numquam animi, asperiores beatae quibusdam atque qui est hic? Libero quasi quia iusto ipsa tempora voluptas pariatur quaerat, maiores, nobis laboriosam quidem recusandae et. Eaque optio velit iste nulla pariatur.</p>
            <button className="bg-black p-2 text-white mt-2 w-[20%] rounded-md">Get Started</button>
        </div>
    </div>
  )
}

export default Experts